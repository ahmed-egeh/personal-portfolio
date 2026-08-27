import type { ReactNode } from 'react'

type IconProps = {
  className?: string
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 3.5 9 6.2c.4.4.5 1 .2 1.5L8 9.4a14 14 0 0 0 6.6 6.6l1.7-1.2c.5-.3 1.1-.2 1.5.2l2.7 2.5c.5.5.5 1.3 0 1.8l-1.2 1.2c-.6.6-1.5.9-2.4.7C10.4 20.2 3.8 13.6 2.3 7.1c-.2-.9.1-1.8.7-2.4L4.2 3.5c.5-.5 1.3-.5 1.8 0z" />
    </svg>
  )
}

export function EnvelopeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
    </svg>
  )
}

function StrokeIcon({
  className,
  stroke = 'currentColor',
  children,
}: IconProps & { stroke?: string; children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function CodeIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
    </StrokeIcon>
  )
}

export function ServerIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </StrokeIcon>
  )
}

export function CloudIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.3-1.6A3.5 3.5 0 0 0 7 18z" />
    </StrokeIcon>
  )
}

export function VideoIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="m16 10 6-3v10l-6-3z" />
    </StrokeIcon>
  )
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M14 5h5v5" />
      <path d="M12 12 19 5" />
      <path d="M17 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5" />
    </StrokeIcon>
  )
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 4v10" />
      <path d="m8 10 4 4 4-4" />
      <path d="M5 18h14" />
    </StrokeIcon>
  )
}

export function GraduationIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="m3 10 9-5 9 5-9 5-9-5z" />
      <path d="M7 12.5v4.2c0 .4 2.2 2.3 5 2.3s5-1.9 5-2.3v-4.2" />
      <path d="M21 10v6" />
    </StrokeIcon>
  )
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </StrokeIcon>
  )
}

export function FolderIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z" />
    </StrokeIcon>
  )
}

export function LayersIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="m12 3.5-8.5 4.3L12 12l8.5-4.2L12 3.5z" />
      <path d="m3.5 12.4 8.5 4.2 8.5-4.2" />
      <path d="m3.5 16.6 8.5 4.2 8.5-4.2" />
    </StrokeIcon>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z" />
    </svg>
  )
}
