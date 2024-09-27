
function checkCharacterType() {
    // get input
    var input = document.getElementById("inputChar").value;
    
    // in single input
    if(input.lenght === 1){
        document.getElementById("text").innerText = "Enter a Single Number";
        return
    }
    
    if(input>= 1 && input <= 100){
        document.getElementById("text").innerText = "Your Input is a Number";
    }

    if(input>= "A" && input <= "Z"){
        document.getElementById("text").innerText = "Your Input is a Uppercase Letter";
    }

    if(input>= "a" && input <= "z"){
        document.getElementById("text").innerText = "Your Input is a Lowercase Letter";
    }
}