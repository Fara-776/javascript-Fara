var box=document.getElementsByClassName("box")
var arr=[...box]
arr.map((element,index)=>{
    element.addEventListener("click",()=>{
        if(element.style.backgroundColor=="black")
        element.style.backgroundColor="white";
        else
        element.style.backgroundColor="black";
    })
})

// arr.map((element,index)=>{
//     // console.log(element, index);
//     element.addEventListener("click",()=>{
//         // console.log(index);
//         if(element.style.backgroundColor=="black")
        
//                element.style.backgroundColor="white";
//         else
        
//             element.style.backgroundColor=="black";
//     })
// })