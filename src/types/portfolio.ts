export type Profile = {
  name: string
  title: string
  summary: string
  email: string
  location: string
  avatar: string
  avatarAlt: string
  github: string
  linkedin: string
  intro: {
    src: string
    label: string
  }
}

export type SkillGroup = {
  label: string
  icon?: 'code' | 'server' | 'cloud'
  items: string[]
}

export type ExperienceItem = {
  role: string
  company: string
  start: string
  end: string
  summary: string
}

export type Project = {
  title: string
  description: string
  image: string
  imageAlt: string
  stack: string[]
  github: string
}

export type Portfolio = {
  meta: {
    title: string
    description: string
  }
  sections: {
    profile: string
    skills: string
    experience: string
    projects: string
  }
  profile: Profile
  skillGroups: SkillGroup[]
  experience: ExperienceItem[]
  projects: Project[]
}
