const input1 = document.querySelector("#val1")
const input2 = document.querySelector("#val2")
const input3 = document.querySelector("#val3")
const input4 = document.querySelector("#val4")

console.dir(input1)

console.log(input1.value)

input1.value=20

console.log(input1.value)


//pobieranie diva

const PojemnikNaWyniki = document.querySelector('.wyniki')

// reagowanie na klikniecie
const przeliczBtn = document.querySelector('#przelicz')
przeliczBtn.addEventListener('click',lab1)
input1.addEventListener("change", lab1)
input2.addEventListener("change", lab1)
input3.addEventListener("change", lab1)
input4.addEventListener("change", lab1)


function lab1() {
    console.log('user udusil buttona')
    const suma = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value) + parseInt(input4.value)
    const avg = suma / 3
    const min = Math.min(input1.value , input2.value , input3.value , input4.value)
    const max = Math.max(input1.value , input2.value , input3.value , input4.value)

    PojemnikNaWyniki.innerHTML = "Suma: " + suma +
     " Średnia: " + avg + " Min: " + min + " Max: " + max
}
