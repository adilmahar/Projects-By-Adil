
let display = document.getElementById("display_text")


document.getElementById("zero").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        document.getElementById("display_text").textContent = "0";
    }
    else{
        document.getElementById("display_text").textContent += "0";
    }
   
}
document.getElementById("one").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        document.getElementById("display_text").textContent = "1";
    }
    else{
        document.getElementById("display_text").textContent += "1";
    }
   
}
document.getElementById("two").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        document.getElementById("display_text").textContent = "2";
    }
    else{
        document.getElementById("display_text").textContent += "2";
    }
   
}
document.getElementById("three").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        document.getElementById("display_text").textContent = "3";
    }
    else{
        document.getElementById("display_text").textContent += "3";
    }
   
}
document.getElementById("four").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        document.getElementById("display_text").textContent = "4";
    }
    else{
        document.getElementById("display_text").textContent += "4";
    }
   
}
document.getElementById("five").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        document.getElementById("display_text").textContent = "5";
    }
    else{
        document.getElementById("display_text").textContent += "5";
    }
   
}
document.getElementById("six").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        document.getElementById("display_text").textContent = "6";
    }
    else{
        document.getElementById("display_text").textContent += "6";
    }
   
}
document.getElementById("seven").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        document.getElementById("display_text").textContent = "7";
    }
    else{
        document.getElementById("display_text").textContent += "7";
    }
   
}
document.getElementById("eight").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        document.getElementById("display_text").textContent = "8";
    }
    else{
        document.getElementById("display_text").textContent += "8";
    }
   
}
document.getElementById("nine").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        document.getElementById("display_text").textContent = "9";
    }
    else{
        document.getElementById("display_text").textContent += "9";
    }
   
}
document.getElementById("plus").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        console.log("[Error]: Cannot Perform that Action Enter a Number first")
    }
    else{
        let string_length = document.getElementById("display_text").textContent.length
        
        console.log(string_length)

        let lastchar = document.getElementById("display_text").textContent[string_length-1]
        if(lastchar == "÷" || lastchar == "+" || lastchar == "-" || lastchar == "x" || lastchar == "."){
            console.log("[Error]: Cannot Perform that Action Enter a Number first")
        }
        else{
             document.getElementById("display_text").textContent += "+";
        }


       
    }
   
}
document.getElementById("minus").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        console.log("[Error]: Cannot Perform that Action Enter a Number first")
    }
    else{
        let string_length = document.getElementById("display_text").textContent.length
        
        console.log(string_length)

        let lastchar = document.getElementById("display_text").textContent[string_length-1]
        if(lastchar == "÷" || lastchar == "+" || lastchar == "-" || lastchar == "x" || lastchar == "."){
            console.log("[Error]: Cannot Perform that Action Enter a Number first")
        }
        else{
             document.getElementById("display_text").textContent += "-";
        }
    }
   
}
document.getElementById("divide").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        console.log("[Error]: Cannot Perform that Action Enter a Number first")
    }
    else{
        let string_length = document.getElementById("display_text").textContent.length
        
        console.log(string_length)

        let lastchar = document.getElementById("display_text").textContent[string_length-1]
        if(lastchar == "÷" || lastchar == "+" || lastchar == "-" || lastchar == "x" || lastchar == "."){
            console.log("[Error]: Cannot Perform that Action Enter a Number first")
        }
        else{
             document.getElementById("display_text").textContent += "÷";
        }
    }
   
}
document.getElementById("multi").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        console.log("[Error]: Cannot Perform that Action Enter a Number first")
    }
    else{
        let string_length = document.getElementById("display_text").textContent.length
        
        console.log(string_length)

        let lastchar = document.getElementById("display_text").textContent[string_length-1]
        if(lastchar == "÷" || lastchar == "+" || lastchar == "-" || lastchar == "x" || lastchar == "."){
            console.log("[Error]: Cannot Perform that Action Enter a Number first")
        }
        else{
             document.getElementById("display_text").textContent += "x";
        }
    }
   
}


document.getElementById("dot").onclick = function(){
    if(display.textContent == "Click a Button" || display.textContent == "Error"){
        console.log("[Error]: Cannot Perform that Action Enter a Number first")
    }
    else{
        let string_length = document.getElementById("display_text").textContent.length
        
        console.log(string_length)

        let lastchar = document.getElementById("display_text").textContent[string_length-1]
        if(lastchar == "÷" || lastchar == "+" || lastchar == "-" || lastchar == "x" || lastchar == "."){
            console.log("[Error]: Cannot Perform that Action Enter a Number first")
        }
        else{
             document.getElementById("display_text").textContent += ".";
        }
    }
   
}


//- Back Function =//

document.getElementById("back").onclick = function () {
    const display = document.getElementById("display_text");
    const currentText = display.textContent;
    
    if (currentText == "Click a Button") {
        
        console.log("[Error]: Cannot Perform that Action. Enter a Number first.");
        return;
    }

    if (currentText == "Error") {
        display.textContent = "Click a Button";
        return;
    }

    // Remove last character
    display.textContent = currentText.slice(0, -1);
};




//- Calculating Function -//

document.getElementById("solve").onclick = function(){
    let display = document.getElementById("display_text");
    let equation = display.textContent;


    if(document.getElementById("display_text").textContent == "Click a Button"){
        document.getElementById("display_text").textContent = "Click a Button";
    }
    else {
        
        equation = equation.replaceAll("x", "*").replaceAll("÷", "/")

        console.log("Evaluating:", equation);

        try {
            display.textContent = eval(equation);
        } catch (error) {
            display.textContent = "Error";
            console.error("Invalid equation:", error);
        }
    }


   
}


//- Clear Function -//


document.getElementById("clear").onclick = function(){
    
    document.getElementById("display_text").textContent = "Click a Button"
   
}