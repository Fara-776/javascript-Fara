var box=document.getElementsByClassName("box")
//consol.log(box);
var arr=[...box];
// console.log(arr);
var  cnt=1;
arr.map((element,index)=>{
    // console.log(index);
    element.addEventListener("click",()=>{
        // console.log(index);

        if(cnt==1){
            element.style.backgroundColor="orange";
            cnt=cnt+1;
        }
        else if(cnt==2){
            element.style.backgroundColor="white";
            cnt=cnt+1;
        }
        else
        {
            element.style.backgroundColor="green";
            cnt=1
        }
    })
})