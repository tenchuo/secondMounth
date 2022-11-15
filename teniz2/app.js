const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const c = document.getElementById('span')
let count = 0
btn1.addEventListener('click', e => {
    if (count > 0){
        count--
        c.innerText = count
        c.style.color = "red"   
    }})
 
btn2.addEventListener('click', e => {
    count++
    c.innerText = count
    c.style.color = "green"
})


const posX = document.getElementById('posX') 
const posY = document.getElementById('posY')
const blok = document.querySelector ('.blok')
blok.addEventListener('mousemove', event => {
    let x = event.screenX
    let y = event.screenY
    posX.innerHTML = x
    posY.innerHTML = y
})

let svetofor = prompt('ВВедите цвет светофора').toLowerCase()
const stop = document.querySelector ('.red')
const yellow = document.querySelector ('.yellow')
const green = document.querySelector ('.green')
const text = document.querySelector ('.else')

    if (svetofor === 'красный') {
        stop.style.background = "red"
        stop.innerText = "STOP"
    }
    else if (svetofor === 'желтый') {
        yellow.style.background = "yellow"
        yellow.innerText = "WAIT"
    }
    else if (svetofor === 'зеленный' || svetofor === 'зеленый'){
        green.style.background = "green"
        green.innerText = "GO"
    } 
    else text.innerText = "вы вели не правилный свет"

