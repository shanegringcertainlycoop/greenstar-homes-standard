// Regenerates the standard/ tree, levels.md, badges.md, and standard.json
// from the live published standard. Run from the repo root:
//
//   node scripts/export.mjs
//
// One file per requirement so that each credit's git history IS its
// changelog. This script never touches CHANGELOG.md (hand-maintained) or
// the repo docs (README, CONTRIBUTING, LICENSE).
import { mkdir, rm, writeFile } from 'node:fs/promises'

const SOURCE = 'https://standard.greenstarhomes.org/standard.json'
const REPO = 'https://github.com/shanegringcertainlycoop/greenstar-homes-standard'

const d = await (await fetch(SOURCE)).json()

await rm('standard', { recursive: true, force: true })
await mkdir('standard', { recursive: true })

const sec = (label, val) => (val ? [`**${label}:**`, '', val, ''] : [])

// levels.md
{
  const L = ['# Certification levels', '', 'Requirements are additive: each level includes every requirement of the levels below it.', '']
  for (const t of d.levels) {
    L.push(`## Level ${t.order}: ${t.name}`)
    if (t.summary) L.push(t.summary)
    L.push('')
  }
  await writeFile('levels.md', L.join('\n'))
}

// standard/<NN-pillar>/<requirement>.md + per-pillar index
for (const p of d.pillars) {
  const dir = `standard/${String(p.order).padStart(2, '0')}-${p.slug}`
  await mkdir(dir, { recursive: true })
  const reqs = d.requirements.filter((r) => r.pillar === p.slug)

  const idx = [`# Pillar ${p.order}: ${p.name}`, '']
  if (p.summary) idx.push(p.summary, '')
  idx.push('## Requirements', '')
  for (const r of reqs) {
    idx.push(`- [${r.title}](${r.slug}.md)${r.requiredAtLevel !== 'certified' ? ` *(${r.requiredAtLevel}+)*` : ''}`)
  }
  idx.push('')
  await writeFile(`${dir}/README.md`, idx.join('\n'))

  for (const r of reqs) {
    const path = `${dir}/${r.slug}.md`
    const applies = []
    if (r.newConstructionOnly) applies.push('new construction only')
    if (r.existingOnly) applies.push('existing buildings only')
    const L = [
      `# ${r.title}`,
      '',
      `*Pillar: ${p.name} · Required at: ${r.requiredAtLevel.charAt(0).toUpperCase() + r.requiredAtLevel.slice(1)} level and above${applies.length ? ' · ' + applies.join(', ') : ''}*`,
      '',
    ]
    if (r.summary) L.push(r.summary, '')
    L.push(...sec('Specification', r.specification))
    L.push(...sec('Scope', r.scope))
    L.push(...sec('Requirements', r.requirements))
    L.push(...sec('Documentation', r.documentation))
    L.push(...sec('Guidance', r.guidance))
    if (r.byLevel?.length) {
      L.push('**By level:**', '')
      for (const bl of r.byLevel) L.push(`- ${bl.level ? bl.level.charAt(0).toUpperCase() + bl.level.slice(1) : '?'}: ${bl.summary}`)
      L.push('')
    }
    if (r.countsTowardBadges?.length) {
      L.push(`*Counts toward badges: ${r.countsTowardBadges.join(', ')}*`, '')
    }
    L.push('---')
    L.push(`Reference: ${r.url}`)
    L.push(`Change history: ${REPO}/commits/main/${path}`)
    L.push('')
    await writeFile(path, L.join('\n'))
  }
}

// badges.md
{
  const L = ['# Achievement badges', '', 'Optional recognitions any certified project can add by meeting additional criteria.', '']
  for (const b of d.badges) {
    L.push(`## ${b.name}`)
    if (b.pillar) L.push(`*Pillar: ${b.pillar}*`)
    if (b.summary) L.push('', b.summary)
    L.push('', `Reference: ${b.url}`, '')
  }
  await writeFile('badges.md', L.join('\n'))
}

await writeFile('standard.json', JSON.stringify(d, null, 2))
console.log(`exported ${d.requirements.length} requirements across ${d.pillars.length} pillars`)
