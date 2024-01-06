var box=document.getElementsByClassName("box")
// console.log(box);
var arr=[...box]
// console.log(arr);
arr.map((element,index)=>{
    // console.log(element.innerHTML);
    let prevvalue

    element.addEventListener("click",()=>{
        if(index==0)
        {
            prevvalue=arr.length-1;
        }
        else
        {
            prevvalue=index-1;
        }
        let newdata=parseInt(element.innerText)+parseInt(arr[prevvalue].innerText);

        element.innerHTML=`<h1>${newdata}</h1>`

    })

})