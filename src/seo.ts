import type { Portfolio } from './types/portfolio'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.append(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.append(el)
  }
  el.setAttribute('href', href)
}

function absoluteUrl(siteUrl: string | undefined, path: string) {
  if (!path) return ''
  if (/^https?:\/\//i.test(path)) return path
  if (!siteUrl) return path
  return new URL(path, siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`).href
}

export function applySeo(portfolio: Portfolio) {
  const { meta, profile, skillGroups, experience, education, languages } = portfolio
  const siteUrl = meta.siteUrl?.trim()
  const image = absoluteUrl(siteUrl, profile.avatar)
  const pageUrl = siteUrl || undefined

  document.title = meta.title
  upsertMeta('name', 'description', meta.description)
  upsertMeta('name', 'author', profile.name)
  upsertMeta('name', 'robots', 'index, follow')
  upsertMeta('property', 'og:title', meta.title)
  upsertMeta('property', 'og:description', meta.description)
  upsertMeta('property', 'og:type', 'profile')
  upsertMeta('property', 'og:locale', 'en_US')
  upsertMeta('property', 'og:image', image)
  upsertMeta('property', 'profile:first_name', profile.name.split(' ')[0] ?? profile.name)
  upsertMeta('property', 'profile:last_name', profile.name.split(' ').slice(1).join(' '))
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', meta.title)
  upsertMeta('name', 'twitter:description', meta.description)
  upsertMeta('name', 'twitter:image', image)

  if (pageUrl) {
    upsertMeta('property', 'og:url', pageUrl)
    upsertLink('canonical', pageUrl)
  }

  const currentJob = experience.find((item) => item.end === 'Present')
  const school = education[0]
  const person: Record<string, unknown> = {
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    email: `mailto:${profile.email}`,
    telephone: profile.phone.replace(/\s/g, ''),
    image,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location.replace(/,.*$/, ''),
      addressCountry: 'DE',
    },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: skillGroups.flatMap((group) => group.items),
    knowsLanguage: languages.map((language) => ({
      '@type': 'Language',
      name: language.name,
    })),
  }

  if (pageUrl) person.url = pageUrl
  if (currentJob) {
    person.worksFor = {
      '@type': 'Organization',
      name: currentJob.company,
      ...(currentJob.url ? { url: currentJob.url } : {}),
    }
  }
  if (school) {
    person.alumniOf = {
      '@type': 'CollegeOrUniversity',
      name: school.school,
      ...(school.url ? { url: school.url } : {}),
    }
  }

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        name: meta.title,
        description: meta.description,
        ...(pageUrl ? { url: pageUrl } : {}),
        mainEntity: { '@id': '#person' },
      },
      { '@id': '#person', ...person },
    ],
  }

  let script = document.getElementById('person-jsonld')
  if (!script) {
    script = document.createElement('script')
    script.id = 'person-jsonld'
    script.setAttribute('type', 'application/ld+json')
    document.head.append(script)
  }
  script.textContent = JSON.stringify(graph)
}
