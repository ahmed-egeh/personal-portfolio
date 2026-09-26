import type { CSSProperties } from 'react'

type Mote = {
  kind: 'dot' | 'char'
  x: number
  y: number
  size: number
  duration: number
  delay: number
  glyph?: string
}

const MOTES: Mote[] = [
  { kind: 'char', glyph: '{ }', x: 6, y: 8, size: 0.92, duration: 10, delay: 0 },
  { kind: 'char', glyph: '</>', x: 78, y: 6, size: 0.8, duration: 12, delay: 0.3 },
  { kind: 'char', glyph: '01', x: 18, y: 22, size: 0.76, duration: 9, delay: 0.2 },
  { kind: 'char', glyph: '=>', x: 88, y: 20, size: 0.84, duration: 11, delay: 0.7 },
  { kind: 'char', glyph: '[]', x: 8, y: 38, size: 0.78, duration: 10, delay: 0.1 },
  { kind: 'char', glyph: '::', x: 70, y: 32, size: 0.88, duration: 13, delay: 0.5 },
  { kind: 'char', glyph: '#', x: 92, y: 42, size: 1.02, duration: 11, delay: 0.25 },
  { kind: 'char', glyph: '&&', x: 28, y: 48, size: 0.72, duration: 12, delay: 0.8 },
  { kind: 'char', glyph: ';', x: 4, y: 58, size: 1.08, duration: 9, delay: 0.4 },
  { kind: 'char', glyph: 'fn', x: 82, y: 56, size: 0.74, duration: 10, delay: 0.15 },
  { kind: 'char', glyph: '<>', x: 14, y: 70, size: 0.8, duration: 11, delay: 0.6 },
  { kind: 'char', glyph: '||', x: 62, y: 68, size: 0.86, duration: 12, delay: 0.35 },
  { kind: 'char', glyph: '++', x: 90, y: 72, size: 0.78, duration: 9, delay: 0.9 },
  { kind: 'char', glyph: '??', x: 22, y: 84, size: 0.7, duration: 13, delay: 0.2 },
  { kind: 'char', glyph: ':=', x: 48, y: 12, size: 0.76, duration: 10, delay: 0.55 },
  { kind: 'char', glyph: '0x', x: 74, y: 86, size: 0.72, duration: 11, delay: 0.45 },
  { kind: 'char', glyph: '!=', x: 40, y: 92, size: 0.8, duration: 9, delay: 0.1 },
  { kind: 'char', glyph: '>>', x: 56, y: 50, size: 0.74, duration: 12, delay: 0.75 },
  { kind: 'char', glyph: '{}', x: 36, y: 6, size: 0.82, duration: 10, delay: 0.3 },
  { kind: 'char', glyph: '::', x: 96, y: 90, size: 0.7, duration: 11, delay: 0.65 },
  { kind: 'dot', x: 12, y: 14, size: 5, duration: 8, delay: 0.1 },
  { kind: 'dot', x: 42, y: 18, size: 4, duration: 11, delay: 0.4 },
  { kind: 'dot', x: 64, y: 10, size: 6, duration: 9, delay: 0.2 },
  { kind: 'dot', x: 86, y: 14, size: 5, duration: 10, delay: 0.5 },
  { kind: 'dot', x: 24, y: 30, size: 5, duration: 8, delay: 0.3 },
  { kind: 'dot', x: 52, y: 28, size: 4, duration: 13, delay: 0.7 },
  { kind: 'dot', x: 76, y: 26, size: 6, duration: 9, delay: 0.15 },
  { kind: 'dot', x: 10, y: 46, size: 5, duration: 10, delay: 0.45 },
  { kind: 'dot', x: 44, y: 42, size: 4, duration: 8, delay: 0.25 },
  { kind: 'dot', x: 68, y: 44, size: 6, duration: 11, delay: 0.6 },
  { kind: 'dot', x: 94, y: 34, size: 5, duration: 9, delay: 0.35 },
  { kind: 'dot', x: 32, y: 62, size: 4, duration: 12, delay: 0.2 },
  { kind: 'dot', x: 58, y: 60, size: 6, duration: 8, delay: 0.8 },
  { kind: 'dot', x: 84, y: 64, size: 5, duration: 10, delay: 0.1 },
  { kind: 'dot', x: 16, y: 78, size: 5, duration: 9, delay: 0.55 },
  { kind: 'dot', x: 38, y: 76, size: 4, duration: 11, delay: 0.3 },
  { kind: 'dot', x: 70, y: 80, size: 6, duration: 8, delay: 0.4 },
  { kind: 'dot', x: 92, y: 78, size: 5, duration: 12, delay: 0.7 },
  { kind: 'dot', x: 8, y: 92, size: 6, duration: 10, delay: 0.15 },
  { kind: 'dot', x: 50, y: 88, size: 4, duration: 9, delay: 0.5 },
  { kind: 'dot', x: 66, y: 94, size: 5, duration: 11, delay: 0.25 },
  { kind: 'dot', x: 88, y: 96, size: 6, duration: 8, delay: 0.65 },
]

export function AmbientField() {
  return (
    <div className="ambient-field" aria-hidden="true">
      {MOTES.map((mote, index) => (
        <span
          key={`${mote.kind}-${index}`}
          className={`ambient-mote is-${mote.kind}`}
          style={
            {
              '--x': `${mote.x}%`,
              '--y': `${mote.y}%`,
              '--dur': `${mote.duration}s`,
              '--delay': `${mote.delay}s`,
              '--size': mote.kind === 'dot' ? `${mote.size}px` : `${mote.size}rem`,
            } as CSSProperties
          }
        >
          {mote.kind === 'char' ? mote.glyph : null}
        </span>
      ))}
    </div>
  )
}
