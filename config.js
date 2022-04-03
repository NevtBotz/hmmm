import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6281224863098'],
  ['0'],
  ['6281224863098', 'Della', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Created By'
global.author = 'Cloud Bot'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'Level',
      limit: 'Limit',
      health: 'HP',
      exp: 'EXP',
      money: 'Uang',
      potion: 'Potion',
      diamond: 'Diamond',
      common: 'Common',
      uncommon: 'UnCommon',
      mythic: 'MythicCrate',
      legendary: 'LegendaryCrate',
      pet: 'Pet',
      trash: 'Sampah',
      armor: 'Armor',
      sword: 'Sword',
      wood: 'Kayu',
      rock: 'Batu',
      string: 'Benang',
      horse: 'Kuda',
      cat: 'Kucing',
      dog: 'Anjing',
      fox: 'Rubah',
      petFood: 'Makanan Pet',
      iron: 'Iron',
      gold: 'Gold',
      emerald: 'Emerald'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
