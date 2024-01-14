var btn = document.getElementById('btn');
var amt = document.getElementById('amt');
var invest = document.getElementById('invest');
var usernum = document.getElementsByClassName('usernum');
var arr = [...usernum];
var btn1 = document.getElementById('btn1');
var jackpot = document.getElementById('jackpot');
var interval;
var dynamicInputContainer = document.getElementById("dynamicInputContainer");
var winamt=document.getElementById('winAmt');

function msg() {
    amt.style.display = 'none';
    btn.style.display = 'none';
    if (amt.value == 0 || amt.value < 0) {
        alert("Invalid amount")
    } else {
        invest.innerHTML = `<h1>your invested amount is:${amt.value}</h1>`;
    }
}


btn1.addEventListener("click", () => {

    if (arr[0].value == "" || arr[0].value <0 || arr[1].value == "" || arr[1].value < 0 || arr[2].value == "" || arr[2].value <0 || arr[3].value < 0 || arr[3].value
     == "") {
        alert("Invalid Number");

    }
    else if (jackpot) {
        jackpot.style.display = 'block';

        for (let i = 0; i < 4; i++) {
            randomBox();
        }

        randomlottery();
    }
});


function randomBox() {
    var input = document.createElement("input");
    input.type = "number";
    dynamicInputContainer.appendChild(input);
    input.style.border='2px solid black';
    input.style.width='50px'
    input.style.height='40px'
    input.style.marginLeft='10px'
    input.style.borderRadius='5px'
    input.style.marginTop='10PX'
    input.style.textAlign='center'
    input.style.fontWeight='bold'



}

function randomlottery() {
    var inputBoxes = dynamicInputContainer.getElementsByTagName("input");
    var currentIndex = 0;
    winamt.style.display='block';
    interval = setInterval(function () {
        
            inputBoxes[currentIndex].value = Math.floor(Math.random() * 9);
            if(usernum[currentIndex].value==inputBoxes[currentIndex].value)
            {

                amt.value = amt.value * 10;
                // console.log(amt.value);
                winamt.innerHTML=`<center><h1>Congratulations! You Have Won ${amt.value} Rupees</h1></center>`;
            }
            currentIndex++;
           
      
        if(currentIndex>3) {
            clearInterval(interval);
        }
    }, 1000);
}





