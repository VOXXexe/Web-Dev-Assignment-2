//constants
const AS = document.getElementById("AS");
const NOS = document.getElementById("NOS");
const SP = document.getElementById("SP");
const Result1 = document.getElementById("Result1");
const MOD = document.getElementById("MOD");
const Eticket = document.getElementById("Eticket");
const boxoffice = document.getElementById("boxoffice");
const post = document.getElementById("post");

//eventlisteners for the drop-downlists, number inputs and the buttons
AS.addEventListener("select", add);
NOS.addEventListener("select", add);
SP.addEventListener("click", add);
MOD.addEventListener("select", add);
Eticket.addEventListener("click",  calculate);
boxoffice.addEventListener("click", calculate);
post.addEventListener("click", calculate);


//function code for the calculations and the discounts
function add() {

    var AS = document.getElementById('AS').value;
    var NOS = document.getElementById('NOS').value;
    var result = AS * NOS;
    document.getElementById('Result1').innerHTML =("£" + result.toFixed(2));

    if(NOS == 6 || NOS == 7 || NOS == 8 || NOS == 9){
    document.getElementById('Results2').innerHTML = ("Discount10%")
    var result2 = result - [AS * NOS] * 10 / 100;
    document.getElementById('Results3').innerHTML =("£" + result2.toFixed(2));
    }
    else if (NOS1 == 10 || NOS1 > 10 ){
    document.getElementById('Results2').innerHTML = ("Discount15%")
    var result2 = result - [AS * NOS] / 100 * 15;
    document.getElementById('Result3').innerHTML =("£" + result2.toFixed(2));
    }

document.getElementById('overallcost').innerHTML = result2 
}


function calculate(){
    if(document.getElementById('Eticket').checked){
        document.getElementById('MOD').innerHTML = ("DeliveryMethod");
        document.getElementById('Results4').innerHTML = ("£"+ Eticket.value);
    }
    if(document.getElementById('boxoffice').checked){
        document.getElementById('MOD').innerHTML = ("DeliveryMethod");
        document.getElementById('Results4').innerHTML = ("£"+ boxoffice.value);
    }
    if(document.getElementById('post').checked){
        document.getElementById('MOD').innerHTML = ("DeliveryMethod");
        document.getElementById('Results4').innerHTML = ("£"+ post.value);
    }
}

function show(){
    if(document.getElementById('AS').selected){
        document.getElementById('costandshow').innerHTML = ("costandshow");
        document.getElementById('costandshow').innerHTML = ("AS".value);
    }
}