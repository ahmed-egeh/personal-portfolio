import { useEffect, useRef, useState } from 'react'
import type { Profile as ProfileData } from '../types/portfolio'
import { AmbientField } from './AmbientField'
import {
  DownloadIcon,
  EnvelopeIcon,
  GitHubIcon,
  LinkedInIcon,
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

export function Profile({ profile }: ProfileProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [stage, setStage] = useState<Stage>('idle')

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
    void video.play().catch(() => {
      setStage('idle')
    })
  }, [stage])

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

  const cinema = stage !== 'idle'
  const showStage = stage === 'loading' || stage === 'playing' || stage === 'leaving-video'

  return (
    <header className={`section profile is-${stage}`}>
      <AmbientField />
      <div className="profile-info" aria-hidden={cinema}>
        <img
          className="avatar"
          src={profile.avatar}
          alt={profile.avatarAlt}
          width={124}
          height={124}
        />
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
          <p className="contact location">
            <PinIcon className="icon" />
            {profile.location}
          </p>
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
            <button
              type="button"
              className="intro-skip"
              onClick={() => setStage('leaving-video')}
            >
              Skip
            </button>
          ) : null}
        </div>
      ) : null}
    </header>
  )
}
