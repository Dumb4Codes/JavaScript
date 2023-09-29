
document.getElementById("submitButton").onclick = function(){

    let temp = document.getElementById("textBox").value;
    temp = Number(temp);

    if(document.getElementById("cButton").checked){
        temp = toCelsius(temp);
        document.getElementById("textLabel").innerHTML = temp + "°C";
    }
    else if(document.getElementById("fButton").checked){
        temp = toFahrenheit(temp);
        document.getElementById("textLabel").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("textLabel").innerHTML = "<big>Provide a unit!!!!</big";
    }
}

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}