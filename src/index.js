//get bill input
const tipForm = document.getElementById("tip-form"); //global scope

tipForm.addEventListener("submit", function(e){
    e.preventDefault();
    const billAmount = Number(document.querySelector("#bill-amount").value); //scoped to function, functionscope
    const tipPercentage = Number(document.querySelector("#tip-amount").value);
    const finalAmount = Number(document.querySelector("#final-amount").value);
    const tipAmount = tipPercentage * billAmount;
    const finalAmount = tipAmount + billAmount;
    tipAmount.innerHTML = `${finalAmount}`;

    

    //reset the calculator
    
    
});

//null is an intentional absent of the value
//undefined is you sepll a value wrong


//get tip percentage



//process the values (actual calculations) get the tip

//display 