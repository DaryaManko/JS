// tworzenie img w js-ie
const img1=document.createElement('img')
const img2 = new Image()
img1.src=""

//setTimeout(), setInterval()
setTimeout(
    ()=>{
       console.log('Ouc!')
       const box = document.querySelector('#slider-inner')
       box.style.transform = 'translate(200px,0px)'
       setTimeout()
    },2_000)

let positionX = 0
const anim = setInterval(
    ()=>{
        const box = document.querySelector('#slider-inner')
        box.style.transform = 'translate(${positionX}px,0px)'
        positionX++
    } , 16)
    
setTimeout(() => {
    clearInterval(anim)
    }, 6_000)