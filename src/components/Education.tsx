import type { EducationItem } from '../types/portfolio'
import { GraduationIcon, PinIcon } from './Icons'

type EducationProps = {
  label: string
  items: EducationItem[]
}

export function Education({ label, items }: EducationProps) {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <h2 id="education-heading">
        <GraduationIcon className="icon" />
        {label}
      </h2>
      <ol className="timeline">
        {items.map((item) => (
          <li className="job" key={`${item.school}-${item.degree}`}>
            <div className="job-head">
              <h3>{item.degree}</h3>
              <p className="dates">
                {item.start} – {item.end}
              </p>
            </div>
            <p className="company">{item.school}</p>
            <p className="job-location">
              <PinIcon className="icon" />
              {item.location}
            </p>
            <p className="summary">{item.summary}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
