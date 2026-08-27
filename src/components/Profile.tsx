import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { Profile as ProfileData } from '../types/portfolio'
import { AmbientField } from './AmbientField'
import {
  DownloadIcon,
  EnvelopeIcon,
  GitHubIcon,
  LinkedInIcon,
  PhoneIcon,
  PinIcon,
  VideoIcon,
} from './Icons'

type ProfileProps = {
  profile: ProfileData
}

type Stage = 'idle' | 'leaving-info' | 'loading' | 'playing' | 'leaving-video'

const INFO_OUT_MS = 420
const LOAD_MS = 1700
const VIDEO_OUT_MS = 480

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export function Profile({ profile }: ProfileProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const seekingRef = useRef(false)
  const [stage, setStage] = useState<Stage>('idle')
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const cinema = stage !== 'idle'
  const showStage = stage === 'loading' || stage === 'playing' || stage === 'leaving-video'

  useEffect(() => {
    if (stage !== 'leaving-info') return
    const id = window.setTimeout(() => setStage('loading'), INFO_OUT_MS)
    return () => window.clearTimeout(id)
  }, [stage])

  useEffect(() => {
    if (stage !== 'loading') return
    const video = videoRef.current
    video?.load()
    const id = window.setTimeout(() => setStage('playing'), LOAD_MS)
    return () => window.clearTimeout(id)
  }, [stage])

  useEffect(() => {
    if (stage !== 'playing') return
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    setCurrentTime(0)
    void video.play().catch(() => {
      setStage('idle')
    })
  }, [stage])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !showStage) return

    const syncDuration = () => {
      if (Number.isFinite(video.duration)) setDuration(video.duration)
    }
    const syncTime = () => {
      if (!seekingRef.current) setCurrentTime(video.currentTime)
    }

    syncDuration()
    video.addEventListener('loadedmetadata', syncDuration)
    video.addEventListener('durationchange', syncDuration)
    video.addEventListener('timeupdate', syncTime)
    return () => {
      video.removeEventListener('loadedmetadata', syncDuration)
      video.removeEventListener('durationchange', syncDuration)
      video.removeEventListener('timeupdate', syncTime)
    }
  }, [showStage])

  useEffect(() => {
    if (stage !== 'leaving-video') return
    const video = videoRef.current
    video?.pause()
    const id = window.setTimeout(() => {
      if (video) video.currentTime = 0
      setStage('idle')
    }, VIDEO_OUT_MS)
    return () => window.clearTimeout(id)
  }, [stage])

  return (
    <header id="profile" className={`section profile is-${stage}`}>
      <AmbientField />
      <div className="profile-info" aria-hidden={cinema}>
        <div className="avatar-wrap">
          <img
            className="avatar"
            src={profile.avatar}
            alt={profile.avatarAlt}
            width={184}
            height={184}
          />
        </div>
        <h1>{profile.name}</h1>
        <p className="role">{profile.title}</p>
        <p className="summary">{profile.summary}</p>
        {stage === 'idle' ? (
          <div className="profile-actions">
            <button
              type="button"
              className="watch-btn"
              onClick={() => setStage('leaving-info')}
            >
              <VideoIcon className="icon" />
              {profile.intro.label}
            </button>
            <a
              className="cv-btn"
              href={profile.cv.src}
              download={profile.cv.filename}
            >
              <DownloadIcon className="icon" />
              {profile.cv.label}
            </a>
          </div>
        ) : null}
        <div className="meta">
          <a className="contact" href={`mailto:${profile.email}`}>
            <EnvelopeIcon className="icon" />
            {profile.email}
          </a>
          <a
            className="contact"
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
          >
            <PhoneIcon className="icon" />
            {profile.phone}
          </a>
          <p className="contact location">
            <PinIcon className="icon" />
            {profile.location}
          </p>
          {profile.notes.length ? (
            <p className="profile-status">{profile.notes.join(' · ')}</p>
          ) : null}
          <nav className="socials" aria-label="Social profiles">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon className="icon" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="icon" />
            </a>
          </nav>
        </div>
      </div>

      {showStage ? (
        <div className="intro-stage" aria-live="polite">
          <video
            ref={videoRef}
            className="intro-video"
            src={profile.intro.src}
            playsInline
            preload="auto"
            onEnded={() => setStage('leaving-video')}
          />
          {stage === 'loading' ? (
            <div className="intro-loader">
              <p className="intro-loader-title">INIT INTRO.FEED</p>
              <div className="intro-bar" role="progressbar" aria-label="Loading intro">
                <span />
              </div>
              <p className="intro-loader-meta">handshake · codec h264 · uplink ok</p>
            </div>
          ) : null}
          {stage === 'playing' ? (
            <div className="intro-controls">
              <input
                className="intro-seek"
                type="range"
                min={0}
                max={duration || 0}
                step={0.05}
                value={currentTime}
                aria-label="Intro timeline"
                style={
                  {
                    '--progress': `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
                  } as CSSProperties
                }
                onPointerDown={() => {
                  seekingRef.current = true
                }}
                onPointerUp={() => {
                  seekingRef.current = false
                }}
                onPointerCancel={() => {
                  seekingRef.current = false
                }}
                onChange={(event) => {
                  const next = Number(event.target.value)
                  setCurrentTime(next)
                  if (videoRef.current) videoRef.current.currentTime = next
                }}
              />
              <p className="intro-time">
                {formatTime(currentTime)} / {formatTime(duration)}
              </p>
              <button
                type="button"
                className="intro-skip"
                onClick={() => setStage('leaving-video')}
              >
                Skip
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </header>
  )
}
