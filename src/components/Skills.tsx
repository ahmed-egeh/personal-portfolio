import type { CSSProperties } from 'react'
import type { SkillGroup } from '../types/portfolio'
import { CloudIcon, CodeIcon, LayersIcon, ServerIcon } from './Icons'
import { skillIconFor } from './SkillIcons'

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
        <LayersIcon className="icon" />
        {label}
      </h2>
      <div className="skill-groups">
        {groups.map((group, groupIndex) => {
          const Icon = group.icon ? skillIcons[group.icon] : undefined
          return (
            <div
              key={group.label}
              className="skill-group"
              style={{ '--group-i': groupIndex } as CSSProperties}
            >
              <h3>
                {Icon ? <Icon className="icon" /> : null}
                {group.label}
              </h3>
              <ul className="chips">
                {group.items.map((item, chipIndex) => {
                  const ChipIcon = skillIconFor(item)
                  return (
                    <li
                      key={item}
                      style={{ '--chip-i': chipIndex } as CSSProperties}
                    >
                      {ChipIcon ? <ChipIcon className="icon" /> : null}
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
