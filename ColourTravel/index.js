var box=document.getElementsByClassName('box');
var arr=[...box];
var cnt=1;
function change(color)
{
    if(cnt==1){
        arr[0].style.backgroundColor=color;
        cnt=cnt+1;
    }
    else if(cnt==2){
        arr[1].style.backgroundColor=color;
        cnt=cnt+1;
    }
    else if(cnt==3){
        arr[2].style.backgroundColor=color;
        cnt=cnt+1;
    }
    else if(cnt==4){
        arr[3].style.backgroundColor=color;
        cnt=cnt+1;
    }
    else if(cnt==5){
        arr[4].style.backgroundColor=color;
        cnt=1;
    }
   


}