import type { ComponentType, ReactNode } from 'react'

type IconProps = {
  className?: string
}

function Mark({
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function TypeScriptIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        fill="#fff"
        d="M6.4 10.1h4.7V12H9.4v6.6H7.7V12H6.4zm7.2 2.5h1.6c.1-.8.7-1.2 1.6-1.2.8 0 1.3.3 1.3.9 0 .6-.4.8-1.3 1.2l-.7.2c-1.3.5-1.9 1.2-1.9 2.4 0 1.5 1.1 2.4 2.8 2.4 1.6 0 2.7-.8 3-2.1h-1.7c-.2.6-.7.9-1.3.9-.8 0-1.2-.3-1.2-.9 0-.5.3-.8 1.2-1.1l.6-.2c1.4-.5 2.1-1.2 2.1-2.6 0-1.4-1.1-2.3-2.8-2.3-1.6 0-2.7.8-3 2.1z"
      />
    </Mark>
  )
}

export function PythonIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <path
        fill="#3776AB"
        d="M11.7 2.2c-4.6 0-4.3 2-4.3 2v2.1h4.4v.7H5.2S2.4 6.7 2.4 11.6s2.1 5 2.1 5h1.3v-2.4c0-2.7 2.3-3.2 4.3-3.2h4.3c1.9 0 2.4-1.3 2.4-2.6V4.3s.3-2.1-5.1-2.1zm-2.4 1.3a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z"
      />
      <path
        fill="#FFD43B"
        d="M12.3 21.8c4.6 0 4.3-2 4.3-2v-2.1h-4.4v-.7h6.6s2.8.3 2.8-4.6-2.1-5-2.1-5h-1.3v2.4c0 2.7-2.3 3.2-4.3 3.2H9.6c-1.9 0-2.4 1.3-2.4 2.6v4.1s-.3 2.1 5.1 2.1zm2.4-1.3a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"
      />
    </Mark>
  )
}

export function GoIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#00ADD8" />
      <path
        fill="#fff"
        d="M6.2 10.4c.3-.8 1-1.3 1.9-1.3 1.3 0 2.1.9 2.1 2.6 0 1.8-.9 2.7-2.2 2.7-.8 0-1.5-.4-1.8-1.2H4.6c.3 1.6 1.7 2.7 3.5 2.7 2.3 0 3.9-1.6 3.9-4.2 0-2.6-1.6-4.1-3.8-4.1-1.8 0-3.3 1.1-3.6 2.8zm5.8 4.7h1.6l.3-1.4h2.3l.3 1.4h1.7l-2.2-8h-1.9zm2-3.1h-1.6l.8-3.5zm5.1 3.1h1.6V8.8H21V7.3h-5.5v1.5h1.6z"
      />
    </Mark>
  )
}

export function NodeIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <path
        fill="#339933"
        d="M11.2 1.4 2.8 6.2v9.6l8.4 4.8 8.4-4.8V6.2z"
      />
      <path
        fill="#fff"
        d="M10.2 14.6c0 .9-.5 1.4-1.5 1.4-.9 0-1.5-.5-1.6-1.3H5.7c.2 1.6 1.4 2.6 3 2.6 1.9 0 3.1-1 3.1-2.8v-5h-1.6zm4.4 2.7c1.8 0 3.1-1 3.3-2.5h-1.6c-.2.7-.8 1.1-1.6 1.1-1.1 0-1.8-.7-1.8-1.8s.7-1.8 1.8-1.8c.8 0 1.4.4 1.6 1.1h1.6c-.2-1.6-1.5-2.6-3.3-2.6-2.1 0-3.5 1.4-3.5 3.3s1.4 3.2 3.5 3.2z"
      />
    </Mark>
  )
}

export function PostgresIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <circle cx="12" cy="12" r="10" fill="#336791" />
      <path
        fill="#fff"
        d="M12.1 5.2c-2.6 0-4.2 1.3-4.2 3.1 0 1.2.6 2 1.7 2.5l.3.1c-.8.4-1.2 1-1.2 1.9 0 1.6 1.4 2.6 3.6 2.6.5 0 1 0 1.4-.2v1.1c0 .9-.4 1.2-1.3 1.2-.7 0-1.1-.3-1.2-.8H9.8c.2 1.3 1.3 2 2.8 2 1.8 0 2.8-.8 2.8-2.5V11c0-1.3.5-1.7 1.3-1.7.3 0 .6 0 .8.2V7.8c-.3-.1-.6-.2-1-.2-1.1 0-1.8.6-2.1 1.6-.4-.8-1.2-1.3-2.3-1.4zm.1 1.5c1.1 0 1.8.6 1.8 1.6v.3c-.5-.1-1.1-.2-1.8-.2-1.4 0-2.2.5-2.2 1.4 0 .3.1.5.3.7-.7-.3-1-.8-1-1.5 0-1.3 1.1-2.3 2.9-2.3z"
      />
    </Mark>
  )
}

export function RedisIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#DC382D" />
      <path
        fill="#fff"
        d="M4.6 13.4 12 16.6l7.4-3.2-7.4-3.2zm0-4.2L12 12.4l7.4-3.2L12 6zm0 8.4L12 21l7.4-3.4-7.4-3.2z"
      />
    </Mark>
  )
}

export function AwsIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#232F3E" />
      <path
        fill="#FF9900"
        d="M6.4 15.2c2.1 1.6 5.2 2.4 8 2.4 2 0 4.1-.4 5.7-1.2.3-.2.5.1.2.4-1.3 1.1-4.3 2-7 2-3.3 0-6.2-.9-8.2-2.1-.3-.2-.1-.5.2-.4zm16-1.1c.2-.3-.1-.5-.4-.4-1 .3-1.2.4-2.2.2-.3 0-.3-.2 0-.4 1.6-1.1 4.1-.8 4.4-.4.3.4-.1 3.2-1.7 4.5-.2.2-.5.1-.4-.1.5-.8 1.5-2.6 0-3.4z"
      />
      <path
        fill="#fff"
        d="M7.4 8.2 6 12.6h1.4l.3-1h1.5l.3 1h1.5L9.6 8.2zm.6 2.3.5-1.6.5 1.6zm4.1-2.3h1.4v4.4h-1.4zm1.8 0 1.5 2.3V8.2h1.3v4.4h-1.1L14.1 10v2.6h-1.3z"
      />
    </Mark>
  )
}

export function KubernetesIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <circle cx="12" cy="12" r="10" fill="#326CE5" />
      <path
        fill="#fff"
        d="M12 6.2 13.4 9l3.1.3-2.3 2.1.7 3-2.9-1.6L9.1 14.4l.7-3-2.3-2.1 3.1-.3zm0 2.3-1.1 2.1-2.3.2 1.7 1.6-.5 2.2 2.2-1.2 2.2 1.2-.5-2.2 1.7-1.6-2.3-.2z"
      />
    </Mark>
  )
}

export function PhpIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#777BB4" />
      <path
        fill="#fff"
        d="M7.4 14.8c.7 0 1.2-.2 1.6-.5.3-.4.5-.9.3-1.6L8.8 9.2H7.2l.4 2.3H6.4L6 9.2H4.4l.7 4.1c.1.7.5 1.1 1.2 1.4.4.1.8.1 1.1.1zm5.2 0c.7 0 1.3-.2 1.6-.6.4-.4.5-1 .3-1.7l-.5-3.3h-1.6l.4 2.4h-1.2l-.4-2.4H9.6l.7 4.2c.1.7.6 1.2 1.3 1.3.3.1.7.1 1 .1zm5.6 0c.7 0 1.2-.2 1.5-.5.4-.4.5-.9.3-1.6l-.5-3.5h-1.6l.4 2.3h-1.2l-.4-2.3h-1.6l.7 4.1c.1.7.5 1.2 1.2 1.4.4.1.8.1 1.2.1z"
      />
    </Mark>
  )
}

export function LaravelIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#FF2D20" />
      <path
        fill="#fff"
        d="m6.2 8.4 3.2-1.8 3.2 1.8v3.2l-3.2 1.8-3.2-1.8zm8.4-1.2 3.2 1.8v3.2l-3.2 1.8-1.4-.8V9.4zm-1.6 8.2 3.2 1.8 3.2-1.8V12l-3.2 1.8L13 12z"
      />
    </Mark>
  )
}

export function VueIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#1A1A1A" />
      <path fill="#41B883" d="M3.6 5.2h3.6L12 13.2 16.8 5.2h3.6L12 20.4z" />
      <path fill="#fff" d="M7.2 5.2h3.2L12 8.4l1.6-3.2h3.2L12 13.2z" />
    </Mark>
  )
}

export function AngularIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <path fill="#DD0031" d="M12 2.4 3.8 5.4l1.3 12.2L12 21.6l6.9-4 1.3-12.2z" />
      <path fill="#fff" d="m12 5.6 4.4 10.2h-1.8l-.9-2.3H10.3l-.9 2.3H7.6zm-.9 6.2h1.8L12 9.2z" />
    </Mark>
  )
}

export function ReactIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#20232A" />
      <circle cx="12" cy="12" r="1.6" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3.2"
        stroke="#61DAFB"
        strokeWidth="1.2"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3.2"
        stroke="#61DAFB"
        strokeWidth="1.2"
        transform="rotate(120 12 12)"
      />
    </Mark>
  )
}

export function JavaScriptIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        fill="#111"
        d="M11 17.6c0 1.6-1 2.5-2.6 2.5-1.4 0-2.3-.7-2.7-1.6l1.5-.9c.2.4.5.8 1.1.8.6 0 1-.2 1-.9v-5.3H11zm3.2 2.5c-1.8 0-3-1-3.5-2.2l1.5-.9c.4.8 1 1.3 1.9 1.3.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.3l-.5-.2c-1.4-.6-2.4-1.4-2.4-3 0-1.5 1.1-2.6 2.9-2.6 1.3 0 2.2.4 2.9 1.6l-1.4 1c-.3-.6-.8-.9-1.5-.9-.7 0-1.1.4-1.1.9 0 .6.4.9 1.4 1.3l.5.2c1.7.7 2.5 1.6 2.5 3.2 0 1.8-1.4 2.8-3.1 2.8z"
      />
    </Mark>
  )
}

export function MySqlIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#4479A1" />
      <path
        fill="#fff"
        d="M8.2 15.4c.5.4 1.1.6 2 .6 1.4 0 2.2-.7 2.2-1.8 0-1.2-.8-1.6-2.2-2.1-.9-.3-1.2-.5-1.2-.9s.4-.7 1.1-.7c.7 0 1.2.2 1.6.6l.9-1.1c-.6-.5-1.4-.8-2.5-.8-1.4 0-2.3.8-2.3 1.9 0 1.2.8 1.6 2.3 2.1.8.3 1.1.5 1.1.9 0 .4-.5.8-1.2.8-.8 0-1.5-.3-2-.8zm6.3.5h1.5V9.4h-1.5zm2.7 0h1.5l2.1-6.5h-1.6l-1.2 4.1-1.2-4.1h-1.7z"
      />
    </Mark>
  )
}

export function MongoIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#13AA52" />
      <path
        fill="#fff"
        d="M12.4 4.2c.2 2.6 1.8 4.2 2.4 5.8.8 2.1.6 3.9-.4 5.2-1.2 1.6-3.2 2.2-3.4 2.2s-2.2-.6-3.4-2.2c-1-1.3-1.2-3.1-.4-5.2.6-1.6 2.2-3.2 2.4-5.8.1 0 .8 2.1 1.4 2.1s1.3-2.1 1.4-2.1z"
      />
    </Mark>
  )
}

export function SymfonyIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#000" />
      <path
        fill="#fff"
        d="M7.2 8.2c1.4-1.2 3.2-1.8 5.1-1.6 2.4.2 4.2 1.6 4.4 3.6.2 1.8-1 3.2-3.2 3.8l2.3 3.8h-2.2l-2-3.4H9.4V18H7.2zm2.2 2v2.4h2.2c1.2 0 1.9-.5 1.8-1.3 0-.8-.8-1.1-2-1.1z"
      />
    </Mark>
  )
}

export function ClickHouseIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#FFCC00" />
      <path fill="#111" d="M6 6h2.4v12H6zm4.8 0H13v12h-2.2zm4.8 0H18v12h-2.4z" />
    </Mark>
  )
}

export function SqlIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#336791" />
      <ellipse cx="12" cy="8" rx="6" ry="2.2" stroke="#fff" strokeWidth="1.4" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.4"
        d="M6 8v8c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V8"
      />
    </Mark>
  )
}

export function CronIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#475569" />
      <circle cx="12" cy="12" r="6.2" stroke="#fff" strokeWidth="1.5" />
      <path stroke="#fff" strokeWidth="1.5" strokeLinecap="round" d="M12 8.5V12l2.4 1.6" />
    </Mark>
  )
}

export function SupervisorIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#0F766E" />
      <path
        fill="#fff"
        d="M12 7.2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-4.6 9.2c.4-2 2.2-3.2 4.6-3.2s4.2 1.2 4.6 3.2H7.4z"
      />
    </Mark>
  )
}

export function SentryIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#362D59" />
      <path fill="#fff" d="M6.4 16.8 12 7.2l5.6 9.6H6.4zm2.6-1.4h6L12 10.4z" />
    </Mark>
  )
}

export function GitIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#F05032" />
      <path
        fill="#fff"
        d="M17.2 11.3 12.7 6.8a1 1 0 0 0-1.4 0l-1 1 1.3 1.3a1.1 1.1 0 0 1 1.4 1.4l1.2 1.2a1.1 1.1 0 1 1-.6.6l-1.1-1.1v3a1.1 1.1 0 1 1-.9 0v-3a1.1 1.1 0 0 1-.6-1.5L8.8 9.1 6.8 11.1a1 1 0 0 0 0 1.4l4.5 4.5a1 1 0 0 0 1.4 0l4.5-4.5a1 1 0 0 0 0-1.4z"
      />
    </Mark>
  )
}

export function CicdIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#2563EB" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M8 10.2A4 4 0 0 1 16 9.4M16 13.8A4 4 0 0 1 8 14.6"
      />
      <path fill="#fff" d="m16 6.8 2 2.6H14zm-8 10.4-2-2.6h4z" />
    </Mark>
  )
}

export function RestIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#0EA5E9" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M8 9h8M8 12h8M8 15h5"
      />
    </Mark>
  )
}

export function PostmanIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#FF6C37" />
      <circle cx="12" cy="12" r="5.2" fill="#fff" />
      <path fill="#FF6C37" d="M10.2 10.4 16 8.8l-4.2 5.6z" />
    </Mark>
  )
}

export function PhpUnitIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#4F5B93" />
      <path fill="#fff" d="M7 8h3.2c1.6 0 2.5.8 2.5 2.2S11.8 12.4 10.2 12.4H8.6V16H7zm1.6 1.3v1.8h1.4c.7 0 1.1-.3 1.1-.9s-.4-.9-1.1-.9z" />
    </Mark>
  )
}

export function JestIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#C21325" />
      <path
        fill="#fff"
        d="M12 6.6c2.8 0 5 1.8 5 4.6 0 2.2-1.4 3.7-3.4 4.3l.6 2.9H9.8l.6-2.9C8.4 14.9 7 13.4 7 11.2c0-2.8 2.2-4.6 5-4.6z"
      />
    </Mark>
  )
}

export function KarmaIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#319C2A" />
      <path fill="#fff" d="M7.2 16.4 12 7.2l4.8 9.2h-2.2L12 11.2l-2.6 5.2z" />
    </Mark>
  )
}

export function PhpStanIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#1E3A5F" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="m8 12 2.4 2.4L16 8.8"
      />
    </Mark>
  )
}

export function RectorIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#7C3AED" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M8 15.2 12 8l4 7.2M9.4 12.8h5.2"
      />
    </Mark>
  )
}

export function CartIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#16A34A" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M6.5 7.5h1.6l1.2 7h7.4l1.6-5.2H9"
      />
      <circle cx="10.2" cy="16.8" r="1" fill="#fff" />
      <circle cx="15.6" cy="16.8" r="1" fill="#fff" />
    </Mark>
  )
}

export function PayIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#1D4ED8" />
      <rect x="5.5" y="8" width="13" height="8.4" rx="1.4" stroke="#fff" strokeWidth="1.4" />
      <path stroke="#fff" strokeWidth="1.4" d="M5.5 11h13" />
    </Mark>
  )
}

export function FallbackSkillIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#64748B" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="m9 9-3 3 3 3M15 9l3 3-3 3"
      />
    </Mark>
  )
}

export function DockerIcon({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#2496ED" />
      <path
        fill="#fff"
        d="M12.8 6.4h2.1v2.1h-2.1zm-2.5 0h2.1v2.1H10.3zm0 2.5h2.1v2.1H10.3zm-2.5 0h2.1v2.1H7.8zm-2.4 0h2.1v2.1H5.4zm5 2.4h2.1v2.1h-2.2zm-2.6 0h2.1v2.1H7.8zm-2.4 0h2.1v2.1H5.4zm7.4 0h2.1v2.1h-2.1zM4.2 14.2c0 2.6 2.6 3.6 5.1 3.6 3.9 0 6.7-1.4 8.2-3.9.9.1 3.2.1 4.1-1.4-.3.1-1.6.1-1.9-.6.7-.8.9-2 .4-2.8-.5.7-1.4 1.1-2.4 1.1H4.2z"
      />
    </Mark>
  )
}

const skillIconMap: Record<string, ComponentType<IconProps>> = {
  typescript: TypeScriptIcon,
  python: PythonIcon,
  go: GoIcon,
  golang: GoIcon,
  nodejs: NodeIcon,
  node: NodeIcon,
  postgresql: PostgresIcon,
  postgres: PostgresIcon,
  redis: RedisIcon,
  aws: AwsIcon,
  amazonwebservices: AwsIcon,
  kubernetes: KubernetesIcon,
  k8s: KubernetesIcon,
  docker: DockerIcon,
  php: PhpIcon,
  laravel: LaravelIcon,
  vuejs: VueIcon,
  vue: VueIcon,
  angular: AngularIcon,
  react: ReactIcon,
  javascript: JavaScriptIcon,
  js: JavaScriptIcon,
  mysql: MySqlIcon,
  mariadb: MySqlIcon,
  mongodb: MongoIcon,
  mongo: MongoIcon,
  awssqs: AwsIcon,
  github: GitHubMark,
  symfony: SymfonyIcon,
  clickhouse: ClickHouseIcon,
  sql: SqlIcon,
  cron: CronIcon,
  cronjobs: CronIcon,
  supervisor: SupervisorIcon,
  supervisors: SupervisorIcon,
  sentry: SentryIcon,
  git: GitIcon,
  cicd: CicdIcon,
  restapis: RestIcon,
  restapi: RestIcon,
  postman: PostmanIcon,
  phpunit: PhpUnitIcon,
  jest: JestIcon,
  karma: KarmaIcon,
  phpstan: PhpStanIcon,
  rector: RectorIcon,
  amazonsellingpartnerapi: AwsIcon,
  amazonadvertisingapi: AwsIcon,
  amazonadvertising: AwsIcon,
  api2cart: CartIcon,
  paymentproviders: PayIcon,
}

function GitHubMark({ className }: IconProps) {
  return (
    <Mark className={className}>
      <rect width="24" height="24" rx="4" fill="#111" />
      <path
        fill="#fff"
        d="M12 5.2a6.8 6.8 0 0 0-2.2 13.3c.3 0 .5-.2.5-.4v-1.3c-1.9.4-2.3-.8-2.3-.8-.3-.7-.7-1-.7-1-.6-.4 0-.4 0-.4.7.1 1 .7 1 .7.6 1 1.6.7 2 .5 0-.4.2-.7.4-.9-1.5-.2-3.1-.8-3.1-3.4 0-.8.3-1.4.7-1.9 0-.2-.3-.8.1-1.8 0 0 .6-.2 1.9.7a6.5 6.5 0 0 1 3.4 0c1.3-.9 1.9-.7 1.9-.7.4 1 .1 1.6.1 1.8.5.5.7 1.1.7 1.9 0 2.6-1.6 3.2-3.1 3.4.2.2.4.6.4 1.2v1.8c0 .2.2.4.5.4A6.8 6.8 0 0 0 12 5.2z"
      />
    </Mark>
  )
}

export function skillIconFor(name: string) {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, '')
  return skillIconMap[key] ?? FallbackSkillIcon
}
