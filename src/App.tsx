import { useEffect } from 'react'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Languages } from './components/Languages'
import { Profile } from './components/Profile'
import { SectionNav } from './components/SectionNav'
import { Skills } from './components/Skills'
import { portfolio } from './data/loadPortfolio'

const sectionLinks = [
  { id: 'profile', label: portfolio.sections.profile },
  { id: 'experience', label: portfolio.sections.experience },
  { id: 'skills', label: portfolio.sections.skills },
  { id: 'education', label: portfolio.sections.education },
  { id: 'languages', label: portfolio.sections.languages },
]

function App() {
  useEffect(() => {
    document.title = portfolio.meta.title

    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.setAttribute('name', 'description')
      document.head.append(description)
    }
    description.setAttribute('content', portfolio.meta.description)
  }, [])

  return (
    <main className="page">
      <Profile profile={portfolio.profile} />
      <div className="content">
        <SectionNav items={sectionLinks} />
        <Experience
          label={portfolio.sections.experience}
          items={portfolio.experience}
        />
        <Skills
          label={portfolio.sections.skills}
          groups={portfolio.skillGroups}
        />
        <Education
          label={portfolio.sections.education}
          items={portfolio.education}
        />
        <Languages
          label={portfolio.sections.languages}
          items={portfolio.languages}
        />
      </div>
    </main>
  )
}

export default App
