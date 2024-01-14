var btn=document.getElementById('btn');
var number=document.getElementById('number')
function random (){
const num= Math.floor(Math.random() * (100-1) + 1)
number.innerHTML=` <h1>${num}</h1>`
}
