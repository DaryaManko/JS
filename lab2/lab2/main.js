//tworenie img w js-ie

//polecenie: 
//https://github.com/rbrzegowy/Programowanie-w-Javascript---stacjonarni-2024/tree/main/Lab%202%20-%20slider


const img0 = new Image()
const img1 = new Image()
const img2 = new Image()
const img3 = new Image()
const img4 = new Image()
const img5 = new Image()

img0.src="https://picsum.photos/id/12/200"
img1.src="https://picsum.photos/id/13/200"
img2.src="https://picsum.photos/id/14/200"
img3.src="https://picsum.photos/id/15/200"
img4.src="https://picsum.photos/id/16/200"
img5.src="https://picsum.photos/id/17/200"

const package = document.querySelector('.slider')

// pobranie przycisków 
const zdj0 = document.querySelector('zdj1')
const zdj1 = document.querySelector('zdj2')
const zdj2 = document.querySelector('zdj3')
const zdj3 = document.querySelector('zdj4')
const zdj4 = document.querySelector('zdj5')
const zdj5 = document.querySelector('zdj6')



// zdj0.addEventListener(onclick, ******)
// zdj1.addEventListener(onclick, ******)
// zdj2.addEventListener(onclick, ******)
// zdj3.addEventListener(onclick, ******)
// zdj4.addEventListener(onclick, ******)
// zdj5.addEventListener(onclick, ******)



let positionX = 0

function next_slide(which){

//let opacity = 1

 const anim = setInterval(
     ()=>{
        const images = document.querySelectorAll('img')


        //images[which].style.opacity = opacity    
        //opacity = opacity -0.025
        
        positionX = positionX + 5
        

        // images[which].style.transform = 'translate( -' + positionX + 'px ,0px)'
        // images[which + 1].style.transform = 'translate( -' + positionX + 'px ,0px)'
        // images[which + 2].style.transform = 'translate( -' + positionX + 'px ,0px)'
        // //images[which + 3].style.opacity = 1
        // images[which + 3].style.transform = 'translate( -' + positionX + 'px ,0px)'
        // images[which + 4].style.transform = 'translate( -' + positionX + 'px ,0px)'
        // images[which + 5].style.transform = 'translate( -' + positionX + 'px ,0px)'

        box.style.transform = 'translate( -' + positionX + 'px ,0px)'
