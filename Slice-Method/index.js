var boxes=document.getElementsByClassName("box")
// console.log(box);
var btn=document.getElementById('btn')
var arr=[...boxes]
// console.log(arr.length);
// console.log(arr);
var del = document.getElementById("deletedData");

function deleteBoxes() {
    var start = parseInt(document.getElementById('start').value);
    var end = parseInt(document.getElementById('end').value);
    if(start<=0 || end<=0 || start>10 || end>10|| start>end)
    {
        alert('Invalid input box please enter correct value');
        btn.disabled=true;
    }
    var deletedBoxes = arr.slice(start - 1, end);
    deletedBoxes.forEach(box => box.remove());

    var deletedBoxContents = deletedBoxes.map(box => box.textContent);
    del.innerHTML = '<h1>Deleted Boxes: </h1>' + deletedBoxContents.map(el => `<div class="deletedBox"><h1>${el}</h1></div>`).join(' ');

}



