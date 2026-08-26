import type { SkillGroup } from '../types/portfolio'
import { CloudIcon, CodeIcon, LayersIcon, ServerIcon } from './Icons'

const skillIcons = {
  code: CodeIcon,
  server: ServerIcon,
  cloud: CloudIcon,
} as const

type SkillsProps = {
  label: string
  groups: SkillGroup[]
}

export function Skills({ label, groups }: SkillsProps) {
  return (
    <section className="section" aria-labelledby="skills-heading">
      <h2 id="skills-heading">
        <LayersIcon className="icon icon-color" />
        {label}
      </h2>
      <div className="skill-groups">
        {groups.map((group) => {
          const Icon = group.icon ? skillIcons[group.icon] : undefined
          return (
            <div key={group.label} className="skill-group">
              <h3>
                {Icon ? <Icon className="icon" /> : null}
                {group.label}
              </h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
