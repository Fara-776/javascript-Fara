var mail=document.getElementById('mail')
// console.log(mail);
var btn=document.getElementById('btn')
// console.log(btn);
btn.addEventListener("click",()=>{
    if(mail.value=''){
        alert("Must Be Enter Email Before Add")
    }
})