import { useEffect, useRef, useState } from 'react'

export type SectionLink = {
  id: string
  label: string
}

type SectionNavProps = {
  items: SectionLink[]
}

export function SectionNav({ items }: SectionNavProps) {
  const navRef = useRef<HTMLElement>(null)
  const jumpingRef = useRef(false)
  const [active, setActive] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const syncActive = () => {
      if (jumpingRef.current) return

      const navBottom = navRef.current?.getBoundingClientRect().bottom ?? 64
      const marker = navBottom + 48
      let current = items[0]?.id ?? ''
      for (const item of items) {
        const el = document.getElementById(item.id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= marker) current = item.id
      }
      setActive(current)
    }

    syncActive()
    window.addEventListener('scroll', syncActive, { passive: true })
    window.addEventListener('scrollend', syncActive)
    window.addEventListener('hashchange', syncActive)
    return () => {
      window.removeEventListener('scroll', syncActive)
      window.removeEventListener('scrollend', syncActive)
      window.removeEventListener('hashchange', syncActive)
    }
  }, [items])

  return (
    <nav ref={navRef} className="section-nav" aria-label="Page sections">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={item.id === active ? 'is-active' : undefined}
          onClick={() => {
            setActive(item.id)
            jumpingRef.current = true
            window.setTimeout(() => {
              jumpingRef.current = false
            }, 700)
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
