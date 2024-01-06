var time=document.getElementById('time');
var newYearMessage= document.getElementById('newYearMessage');
var showNewYearMessage = false;

setInterval(() => {
   
    var date=new Date();
ct=date.toLocaleTimeString();
// console.log(ct);

if (ct === '12:13:00 AM') {
    showNewYearMessage = true;
}
if (showNewYearMessage) {
    newYearMessage.style.display = 'block';
} else {
    newYearMessage.style.display = 'none';
}

time.innerHTML = `<h1>${ct}</h1>`


},1000)