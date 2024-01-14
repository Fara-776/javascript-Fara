var btn = document.getElementById('btn');
// console.log(input);
var data = JSON.parse(localStorage.getItem('data')) || [];
var input = document.getElementById('input')[0];
if (data.length == 0) {
    console.log("No one registered yet!");
}
else
    function add() {
        if (input.value !== '') {
            data.push(input.value);
            localStorage.setItem('data', JSON.stringify(data));
            input.value = ""    

        }
    }

