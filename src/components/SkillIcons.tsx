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
}

export function skillIconFor(name: string) {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, '')
  return skillIconMap[key]
}
