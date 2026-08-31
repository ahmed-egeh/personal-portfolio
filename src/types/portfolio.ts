export type Profile = {
  name: string
  title: string
  summary: string
  email: string
  phone: string
  location: string
  notes: string[]
  avatar: string
  avatarAlt: string
  github: string
  linkedin: string
  intro: {
    src: string
    label: string
  }
  cv: {
    src: string
    label: string
    filename: string
  }
}

export type SkillGroup = {
  label: string
  icon?: 'code' | 'server' | 'cloud' | 'layers'
  items: string[]
}

export type ExperienceItem = {
  role: string
  company: string
  url?: string
  location: string
  start: string
  end: string
  summary: string
  highlights?: string[]
}

export type EducationItem = {
  degree: string
  school: string
  url?: string
  location: string
  start: string
  end: string
  summary: string
}

export type Language = {
  name: string
  level: string
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
    education: string
    languages: string
    projects: string
  }
  profile: Profile
  skillGroups: SkillGroup[]
  experience: ExperienceItem[]
  education: EducationItem[]
  languages: Language[]
  projects: Project[]
}
