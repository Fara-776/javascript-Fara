const url="https://api.github.com/users/Fara-776";

 var git1=document.getElementById('git1');
 var git2=document.getElementById('git2');
 var git3=document.getElementById('git3');
 var git4=document.getElementById('git4');
 var git5=document.getElementById('git5');
 var git6=document.getElementById('git6');


async function gitpic(){

    try{
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

    git1.innerHTML=`<h1>${result.type}</h1>`;
    git2.innerHTML=`<h1>${result.url}</h1>`;
    git3.innerHTML=`<h1>${result.redirected}</h1>`;
    git4.innerHTML=`<h1>${result.bodyUsed}</h1>`;
    git5.innerHTML=`<h1>${result.status}</h1>`;
    git6.innerHTML=`<h1>${result.ok}</h1>`;
    }
    catch(error)
    {
        console.log(error);

    }

}
gitpic()

