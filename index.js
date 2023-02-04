const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 640
canvas.height = 480

const helpBox = {x: 40, y: 412, width: 52, heigth: 16}


class Digimon {
    constructor(name, posx, posy, evolist) {
        this.name = name
        this.x = posx
        this.y = posy
        this.evolutions = evolist
    }
    width = 37
    heigth = 37
}

const digimons = [
    new Digimon('botamon',58,84,['koromon']),
    new Digimon('poyomon',58,160,['tokomon']),
    new Digimon('punimon',58,236,['tsunomon']),
    new Digimon('yuramon',58,312,['tanemon']),
    new Digimon('koromon',132,84,['agumon','gabumon','kunemon']),
    new Digimon('tokomon',132,160,['patamon','biyomon','kunemon']),
    new Digimon('tsunomon',132,236,['elecmon','penguinmon','kunemon']),
    new Digimon('tanemon',132,312,['palmon','betamon','kunemon']),
    new Digimon('agumon',206,84,['birdramon','meramon','greymon','tyrannomon',
                'monochromon','centaurmon','sukamon','numemon','bakemon2','nanimon']),
    new Digimon('gabumon',206,122,['nanimon','sukamon','numemon','bakemon2','drimogemon','ogremon'
    ,'garurumon','centarumon','monochromon','tyrannomon']),
    new Digimon('patamon',206,160,['nanimon','sukamon','numemon','bakemon2','angemon','leomon','ogremon'
    ,'drimogemon','tyrannomon','unimon']),
    new Digimon('elecmon',206,198,['angemon','leomon','kokatorimon','bakemon2','numemon','sukamon','nanimon']),
    new Digimon('biyomon',206,236,['nanimon','sukamon','numemon','bakemon2','unimon','birdramon','airdramon'
    ,'kabuterimon','kokatorimon']),
    new Digimon('kunemon',206,274,['nanimon','sukamon','numemon','bakemon2','kabuterimon','kuwagamon','vegiemon']),
    new Digimon('palmon',206,312,['nanimon','sukamon','numemon','bakemon2','whamon','coelamon','vegiemon','kuwagamon', 'ninjamon']),
    new Digimon('betamon',206,350,['nanimon','sukamon','numemon','bakemon2','whamon','coelamon','shellmon','seadramon']),
    new Digimon('penguinmon',206,388,['nanimon','sukamon','numemon','garurumon','mojyamon','shellmon'
    ,'frigimon','whamon','bakemon']),
    new Digimon('greymon',280,84,['skullgreymon','metalgreymon','vademon','sukamon']),
    new Digimon('monochromon',280,122,['metalmamemon','metalgreymon','.3vademon','sukamon']),
    new Digimon('ogremon',280,160,['andromon','giromon','vademon','sukamon']),
    new Digimon('airdramon',280,198,['phoenixmon','megadramon','vademon','sukamon']),
    new Digimon('kuwagamon',280,236,['piximon','hkabuterimon','vademon','sukamon']),
    new Digimon('whamon',280,274,['mamemon','megaseadramon','vademon','sukamon']),
    new Digimon('frigimon',280,312,['metalmamemon','mamemon','vademon','sukamon']),
    new Digimon('nanimon',280,350,['digitamamon','sukamon','vademon']),
    new Digimon('meramon',328,84,['metalgreymon','andromon','vademon','sukamon']),
    new Digimon('drimogemon',328,122,['metalgreymon','vademon','sukamon']),
    new Digimon('leomon',328,160,['andromon','mamemon','vademon','sukamon']),
    new Digimon('kokatorimon',328,198,['piximon','phoenixmon','vademon','sukamon']),
    new Digimon('vegiemon',328,236,['piximon','vademon','sukamon']),
    new Digimon('shellmon',328,274,['hkabuterimon','megaseadramon','vademon','sukamon']),
    new Digimon('mojyamon',328,312,['skullgreymon','mamemon','vademon','sukamon']),
    new Digimon('birdramon',376,84,['phoenixmon','vademon','sukamon']),
    new Digimon('tyrannomon',376,122,['megadramon','metalgreymon','vademon','sukamon']),
    new Digimon('angemon',376,160,['andromon','devimon','phoenixmon','vademon','sukamon']),
    new Digimon('unimon',376,198,['phoenixmon','giromon','vademon','sukamon']),
    new Digimon('ninjamon',376,236,['metalmamemon','mamemon','piximon','vademon','sukamon']),
    new Digimon('coelamon',376,274,['megaseadramon','vademon','sukamon']),
    new Digimon('numemon',376,312,['monzaemon','vademon','sukamon']),
    new Digimon('centarumon',424,84,['andromon','giromon','vademon','sukamon']),
    new Digimon('devimon',424,122,['megadramon','SullGreymon','vademon','sukamon']),
    new Digimon('bakemon',424,160,['giromon','skullgreymon','vademon','sukamon']),
    new Digimon('bakemon2',424,160,[]), 
    new Digimon('kabuterimon',424,198,['hkabuterimon','metalmamemon','vademon','sukamon']),
    new Digimon('seadramon',424,236,['megadramon','megaseadramon','vademon','sukamon']),
    new Digimon('garurumon',424,274,['skullgreymon','megaseadramon','vademon','sukamon']),
    new Digimon('sukamon',424,312,['etemon','vademon']),
    new Digimon('metalgreymon',498,84,['sukamon']),
    new Digimon('skullgreymon',498,122,['sukamon']),
    new Digimon('giromon',498,160,['sukamon']),
    new Digimon('hkabuterimon',498,198,['sukamon']),
    new Digimon('mamemon',498,236,['sukamon']),
    new Digimon('megaseadramon',498,274,['sukamon']),
    new Digimon('vademon',498,312,['sukamon']),
    new Digimon('etemon',498,350,['sukamon']),
    new Digimon('andromon',546,84,['sukamon']),
    new Digimon('megadramon',546,122,['sukamon']),
    new Digimon('phoenixmon',546,160,['sukamon']),
    new Digimon('piximon',546,198,['sukamon']),
    new Digimon('metalmamemon',546,236,['sukamon']),
    new Digimon('monzaemon',546,274,['sukamon']),
    new Digimon('digitamamon',546,312,['sukamon'])
]

const imageTable = {
    'agumon': './assets/agumon.jpg',
    'airdramon': './assets/airdramon.jpg',
    'andromon': './assets/andromon.jpg',
    'angemon': './assets/angemon.jpg',
    'bakemon': './assets/bakemon.jpg', // for Penguinmon
    'bakemon2': './assets/bakemon2.jpg', // for the rest of Rookie digimons
    'betamon': './assets/betamon.jpg',
    'birdramon': './assets/birdramon.jpg',
    'biyomon': './assets/biyomon.jpg',
    'centarumon': './assets/centarumon.jpg',
    'coelamon': './assets/coelamon.jpg',
    'devimon': './assets/devimon.jpg',
    'digitamamon': './assets/digitamamon.jpg',
    'drimogemon': './assets/drimogemon.jpg',
    'elecmon': './assets/elecmon.jpg',
    'etemon': './assets/etemon.jpg',
    'frigimon': './assets/frigimon.jpg',
    'gabumon': './assets/gabumon.jpg',
    'garurumon': './assets/garurumon.jpg',
    'giromon': './assets/giromon.jpg',
    'greymon': './assets/greymon.jpg',
    'hkabuterimon': './assets/hkabuterimon.jpg',
    'kabuterimon': './assets/kabuterimon.jpg',
    'kokatorimon': './assets/kokatorimon.jpg',
    'koromon': './assets/fresh.jpg',
    'kunemon': './assets/kunemon.jpg',
    'kuwagamon': './assets/kuwagamon.jpg',
    'leomon': './assets/leomon.jpg',
    'mamemon': './assets/mamemon.jpg',
    'megadramon': './assets/megadramon.jpg',
    'megaseadramon': './assets/megaseadramon.jpg',
    'meramon': './assets/meramon.jpg',
    'metalgreymon': './assets/metalgreymon.jpg',
    'metalmamemon': './assets/metalmamemon.jpg',
    'mojyamon': './assets/mojyamon.jpg',
    'monochromon': './assets/monochromon.jpg',
    'monzaemon': './assets/monzaemon.jpg',
    'nanimon': './assets/nanimon.jpg',
    'ninjamon': './assets/ninjamon.jpg',
    'nunemon': './assets/nunemon.jpg',
    'ogremon': './assets/ogremon.jpg',
    'palmon': './assets/palmon.jpg',
    'patamon': './assets/patamon.jpg',
    'penguinmon': './assets/penguinmon.jpg',
    'phoenixmon': './assets/phoenixmon.jpg',
    'piximon': './assets/piximon.jpg',
    'seadramon': './assets/seadramon.jpg',
    'shellmon': './assets/shellmon.jpg',
    'skullgreymon': './assets/skullgreymon.jpg',
    'sukamon': './assets/sukamon.jpg',
    'tanemon': './assets/fresh.jpg',
    'tokomon': './assets/fresh.jpg',
    'tsunomon': './assets/fresh.jpg',
    'tyrannomon': './assets/tyrannomon.jpg',
    'unimon': './assets/unimon.jpg',
    'vademon': './assets/vademon.jpg',
    'vegiemon': './assets/vegiemon.jpg',
    'whamon': './assets/whamon.jpg'
}

let selectedDigimons = 0
let evoDigimons = []
let evoSelected = []



function backgroundImage() {
    const background = new Image()
    background.onload = () => {
        c.drawImage(background, 0, 0, background.width, background.height,
            0, 0, canvas.width, canvas.height)
    }
    background.src = './assets/digimonevo.png'
}

function helpImage() {
    const help = new Image()
    help.onload = () => {
        c.drawImage(help, 0, 0, help.width, help.height,
            50, 50, 540, 380)
    }
    help.src = './assets/help.jpg'
}

function evolutionReq(dig) {
    const ev = new Image()
    ev.onload = () => {
        c.drawImage(ev, 0, 0, ev.width, ev.height,
            50, 50, 540, 380)
    }
    ev.src = dig
}

function newDigiArrays(dig) {
    // creates an array of the digimons to hide
    let hideDigs = []
    if (dig.evolutions.includes('bakemon') || dig.evolutions.includes('bakemon2')) {
        hideDigs = digimons.filter( d => d.name !== 'bakemon' && d.name !== 'bakemon2' 
                                        && !dig.evolutions.includes(d.name))
    } else {
        hideDigs = digimons.filter( d => !dig.evolutions.includes(d.name))
    }
    // creates an array of the digimons that are evolution of the selected digimon
    evoDigimons = digimons.filter( d => dig.evolutions.includes(d.name))

    return hideDigs
}

function hideNonEvo(hideDigs, dig) {
    c.fillStyle = '#878787'
    hideDigs.forEach( d =>  {
        // make sure we are not hiding the selected digimon
        if (d.name !== dig.name)
            c.fillRect(d.x,d.y,d.width,d.heigth)
    })
}

function boxClick(mouse, dig) {
    if (mouse.x >= dig.x && mouse.x <= (dig.x + dig.width) &&
    mouse.y >= dig.y && mouse.y <= (dig.y + dig.heigth)) {
            return true
    }
    return false

}

canvas.addEventListener('mousedown', m => {
    let rect = canvas.getBoundingClientRect()
    let mouse = {x: m.x - rect.x, 
                 y: m.y - rect.y}
    
    if (selectedDigimons == 0) {
        let result = digimons.find( d => boxClick(mouse,d))
        if (result) {
            hideNonEvo(newDigiArrays(result), result)
            selectedDigimons++
        }
    } else if ( selectedDigimons == 1) {
        let result = evoDigimons.find( d => boxClick(mouse,d))
        if (result) {
            evolutionReq(imageTable[result.name])
            selectedDigimons++
        }
    }

    if (boxClick(mouse, helpBox)) {
        helpImage()
        selectedDigimons = 2
    }
})

window.addEventListener('keydown', k => {
    if (k.key == 'Escape') {
        evoDigimons = null
        selectedDigimons = 0
        backgroundImage()
    }
})

backgroundImage()
