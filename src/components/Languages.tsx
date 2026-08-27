import type { Language } from '../types/portfolio'

type LanguagesProps = {
  label: string
  items: Language[]
}

export function Languages({ label, items }: LanguagesProps) {
  return (
    <section className="section" aria-labelledby="languages-heading">
      <h2 id="languages-heading">{label}</h2>
      <ul className="chips">
        {items.map((item) => (
          <li key={item.name}>
            {item.name}
            <span className="lang-level">{item.level}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
