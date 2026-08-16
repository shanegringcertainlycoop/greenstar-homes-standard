// The standard's "test suite": structural consistency checks that run on
// every push and pull request. Exits non-zero with a list of problems.
import { readFile, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'

const problems = []
const ok = (msg) => console.log('✓', msg)

// 1. standard.json parses and is internally consistent
const d = JSON.parse(await readFile('standard.json', 'utf8'))
const pillarSlugs = new Set(d.pillars.map((p) => p.slug))
const levelSlugs = new Set(d.levels.map((l) => l.slug))
const badgeSlugs = new Set(d.badges.map((b) => b.slug))

for (const r of d.requirements) {
  const where = `requirement "${r.slug}"`
  if (!r.title) problems.push(`${where}: missing title`)
  if (!pillarSlugs.has(r.pillar)) problems.push(`${where}: unknown pillar "${r.pillar}"`)
  if (!levelSlugs.has(r.requiredAtLevel)) problems.push(`${where}: unknown level "${r.requiredAtLevel}"`)
  for (const b of r.countsTowardBadges ?? []) {
    if (!badgeSlugs.has(b)) problems.push(`${where}: counts toward unknown badge "${b}"`)
  }
  for (const bl of r.byLevel ?? []) {
    if (bl.level && !levelSlugs.has(bl.level)) problems.push(`${where}: byLevel references unknown level "${bl.level}"`)
  }
}
ok(`standard.json: ${d.requirements.length} requirements, ${d.pillars.length} pillars, ${d.levels.length} levels, ${d.badges.length} badges`)

// 2. every requirement in the JSON has its markdown file, and vice versa
const expected = new Set()
for (const r of d.requirements) {
  const p = d.pillars.find((x) => x.slug === r.pillar)
  const path = `standard/${String(p.order).padStart(2, '0')}-${p.slug}/${r.slug}.md`
  expected.add(path)
  if (!existsSync(path)) problems.push(`missing file for requirement: ${path}`)
}
for (const dir of await readdir('standard')) {
  for (const f of await readdir(`standard/${dir}`)) {
    if (f === 'README.md') continue
    const path = `standard/${dir}/${f}`
    if (!expected.has(path)) problems.push(`orphan file (no matching requirement in standard.json): ${path}`)
  }
}
ok('markdown tree matches standard.json (no missing or orphan requirement files)')

// 3. core documents exist
for (const f of ['README.md', 'CONTRIBUTING.md', 'LICENSE.md', 'CHANGELOG.md', 'GOVERNANCE.md', 'ERRATA.md', 'rfcs/README.md', 'rfcs/0000-template.md', 'levels.md', 'badges.md']) {
  if (!existsSync(f)) problems.push(`missing core document: ${f}`)
}
ok('core documents present')

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`)
  for (const p of problems) console.error('✗', p)
  process.exit(1)
}
console.log('\nAll checks passed.')
