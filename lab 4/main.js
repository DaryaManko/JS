const terazTimestamp = Date.now()
// Date.now() // timestamp
const teraz  = new Date('terazTimestamp')

const buttonAdd = document.querySelector('#buttonaAdd')

//buttonAdd.addEventListener('click', addNote)

function addNote(){
    const title = document.querySelector('#title').value
    const content = documemt.querySelector('#content').value
    const colour = document.querySelector('#colour').value
    const pin = document.querySelector('#pin').value

localStorage.setItem('note1_title', JSON.stringify(title))    
localStorage.setItem('note1_content', JSON.stringify(content))   
localStorage.setItem('note1_colour', JSON.stringify(colour))   
localStorage.setItem('note1_ispin', JSON.stringify(pin))   
localStorage.setItem('note1_date', JSON.stringify(new Date().toISOString()))   


}

//for (let index=0; index< numbersOfNotes; index++){
 //localStorage.setItem('note1_title', JSON.stringify(title))    
//localStorage.setItem('note1_content', JSON.stringify(content))   
//localStorage.setItem('note1_colour', JSON.stringify(colour))   
//localStorage.setItem('note1_ispin', JSON.stringify(pin))   
//localStorage.setItem('note1_date', JSON.stringify(new Date().toISOString()))   
//}