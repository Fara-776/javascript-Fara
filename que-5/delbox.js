var box=document.getElementsByClassName("box");
// console.log(box);
var arr=[...box]
// console.log(arr)
arr.map((element,index)=>{
    // console.log(index);
    element.addEventListener("click",()=>{
        // console.log(index);
        element.remove();

    })
})