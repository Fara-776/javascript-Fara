var circle = document.getElementsByClassName("circle");
// console.log(circle);
var del = document.getElementById("deletedData");
var arr = [...circle];
// console.log(arr);
var delarr = [];
       
arr.map((element, index) => {
element.addEventListener("click", () => {
    // console.log(element);
element.remove();
delarr.push(element.textContent);
del.innerHTML = 'Deleted Data: ' + delarr.map(element => `<div class="deletedCircle">${element}</div>`).join(' ');
});
});




       

        