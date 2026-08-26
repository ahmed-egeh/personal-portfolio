import { useEffect } from 'react'
import { Experience } from './components/Experience'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { portfolio } from './data/loadPortfolio'

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
        <Skills
          label={portfolio.sections.skills}
          groups={portfolio.skillGroups}
        />
        <Experience
          label={portfolio.sections.experience}
          items={portfolio.experience}
        />
        <Projects
          label={portfolio.sections.projects}
          items={portfolio.projects}
        />
      </div>
    </main>
  )
}

export default App
