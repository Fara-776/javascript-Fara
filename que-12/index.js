 var clock = document.getElementById('clock');
//  console.log(clock);
 var classdemo= document.getElementsByClassName('clock-container');
//  console.log(classdemo);
setInterval(() => {
   var now=new Date();
   var formatedtime=now.toLocaleString('en-US',{weekday: 'short', month: 'short', day:'numeric', year:'numeric', hour:'numeric', minute:'numeric', second:'numeric'});
   clock.textContent=formatedtime; 
},1000)


