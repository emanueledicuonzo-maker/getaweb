import { existsSync } from 'node:fs'

const mustNotExist = [
  'src/content/legacy/alba.html',
  'src/content/legacy/cuneo.html',
  'src/content/legacy/saluzzo.html',
  'src/content/legacy/savigliano.html',
  'src/content/legacy/torino.html',
  'src/content/legacy/architettura-informativa-updated.html',
  'src/content/legacy/architettura-informativa.html',
  'src/content/legacy/pagine-geo.html',
  'src/content/legacy/perche-oggi-non-basta-avere-un-sito.html',
  'src/content/legacy/perche-le-pagine-geo-aiutano-davvero-a-trovare-clienti.html'
]

const found = mustNotExist.filter(existsSync)
if (found.length) {
  console.error('Found dismissed pages that should not exist:', found)
  process.exit(1)
}

console.log('Structure check passed.')
