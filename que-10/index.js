ShowData();

    function ShowData() {
      
      if (localStorage.getItem("Data")) {
        var Data = JSON.parse(localStorage.getItem("Data"));

       
        var displayDiv = document.getElementById("display");
        displayDiv.textContent = Data.join(", ");
      } else {
        
        var displayDiv = document.getElementById("display");
        
        displayDiv.textContent = "No data available";
      }
    }

    function addData() {
     
      var input = document.getElementById("input").value;

    
      if (!input) {
        alert("Please enter a value before adding");
        return;
      }

   
      var Data = JSON.parse(localStorage.getItem("Data")) || [];

     
      Data.push(input);

     
      localStorage.setItem("Data", JSON.stringify(Data));

     
      ShowData();
    }