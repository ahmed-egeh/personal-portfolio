import type { Profile as ProfileData } from '../types/portfolio'
import {
  EnvelopeIcon,
  GitHubIcon,
  LinkedInIcon,
  PinIcon,
} from './Icons'

type ProfileProps = {
  profile: ProfileData
}

export function Profile({ profile }: ProfileProps) {
  return (
    <header className="section profile">
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
    </header>
  )
}
