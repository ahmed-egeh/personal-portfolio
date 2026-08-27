import type { ExperienceItem } from '../types/portfolio'
import { BriefcaseIcon, PinIcon } from './Icons'

type ExperienceProps = {
  label: string
  items: ExperienceItem[]
}

export function Experience({ label, items }: ExperienceProps) {
  return (
    <section className="section" aria-labelledby="experience-heading">
      <h2 id="experience-heading">
        <BriefcaseIcon className="icon" />
        {label}
      </h2>
      <ol className="timeline">
        {items.map((item) => (
          <li className="job" key={`${item.company}-${item.role}-${item.start}`}>
            <div className="job-head">
              <h3>{item.role}</h3>
              <p className="dates">
                {item.start} – {item.end}
              </p>
            </div>
            <p className="company">{item.company}</p>
            <p className="job-location">
              <PinIcon className="icon" />
              {item.location}
            </p>
            <p className="summary">{item.summary}</p>
            {item.highlights?.length ? (
              <ul className="job-highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  )
}
