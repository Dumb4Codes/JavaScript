
const subscribe = document.getElementById("myCheckBox");
const visa = document.getElementById("visaBtn");
const mastercard = document.getElementById("mastercardBtn");
const paypal = document.getElementById("paypalBtn");

document.getElementById("myButton").onclick = function(){
    if(subscribe.checked){
        console.log("Yep you are subscribed!");
    }
    else{
        console.log("You obviously don't belong here");
    }
    if(visa.checked){
        console.log("You got visa card");
    }
    else if(mastercard.checked){
        console.log("You got mastercard");
    }
    else if(paypal.checked){
        console.log("You got an online payment mode called paypal")
    }
    else{
        console.log("You must select a payment type")
    }

}
