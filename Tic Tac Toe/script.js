
let turn = "X"
let win = false



let Button_1 = document.getElementById("1")
let Button_2 = document.getElementById("2")
let Button_3 = document.getElementById("3")
let Button_4 = document.getElementById("4")
let Button_5 = document.getElementById("5")
let Button_6 = document.getElementById("6")
let Button_7 = document.getElementById("7")
let Button_8 = document.getElementById("8")
let Button_9 = document.getElementById("9")

let Arr = new Array(9);

let turne = document.getElementById("turne")
let reset = document.getElementById("reset")

reset.onclick = function(){
    Button_1.textContent = "‎ "
    Button_2.textContent = "‎ "
    Button_3.textContent = "‎ "
    Button_4.textContent = "‎ "
    Button_5.textContent = "‎ "
    Button_6.textContent = "‎ "
    Button_7.textContent = "‎ "
    Button_8.textContent = "‎ "
    Button_9.textContent = "‎ "

    win = false
    turn = "X"
    turne.textContent = "X's Turn"
    Arr = []


    console.log(" - Reset - ")
    console.log("Turn: X")
    
}

Button_1.onclick = function(){

    if(win){
        return;
    }

    if(Button_1.textContent == "‎ "){

        Button_1.textContent = turn;
        
        if(turn == "X"){
            Arr[0] = "X"
            turn = "O"
            turne.textContent = "O's Turn"
            console.log("Turn: ",turn)
        }
        else if(turn == "O"){
             Arr[0] = "O"
            turn = "X"
            turne.textContent = "X's Turn"
            console.log("Turn: ",turn)
        }
    }
    else{
        console.log("Button Already Clicked")
    }

    wincon()
}
Button_2.onclick = function(){
    if(win){
        return;
    }

    if(Button_2.textContent == "‎ "){

        Button_2.textContent = turn;

       if(turn == "X"){
            Arr[1] = "X"
            turn = "O"
            turne.textContent = "O's Turn"
            console.log("Turn: ",turn)
        }
        else if(turn == "O"){
             Arr[1] = "O"
            turn = "X"
            turne.textContent = "X's Turn"
            console.log("Turn: ",turn)
        }
        
    }
    else{
        console.log("Button Already Clicked")
    }
    wincon()
}
Button_3.onclick = function(){

    if(win){
        return;
    }


    if(Button_3.textContent == "‎ "){

        Button_3.textContent = turn;

       if(turn == "X"){
            Arr[2] = "X"
            turn = "O"
            turne.textContent = "O's Turn"
            console.log("Turn: ",turn)
        }
        else if(turn == "O"){
             Arr[2] = "O"
            turn = "X"
            turne.textContent = "X's Turn"
            console.log("Turn: ",turn)
        }
        
    }
    else{
        console.log("Button Already Clicked")
        console.log(Arr)
    }
    wincon()
}
Button_4.onclick = function(){

    if(win){
        return;
    }


    if(Button_4.textContent == "‎ "){

        Button_4.textContent = turn;

       if(turn == "X"){
            Arr[3] = "X"
            turn = "O"
            turne.textContent = "O's Turn"
            console.log("Turn: ",turn)
        }
        else if(turn == "O"){
             Arr[3] = "O"
            turn = "X"
            turne.textContent = "X's Turn"
            console.log("Turn: ",turn)
        }
        
    }
    else{
        console.log("Button Already Clicked")
        console.log(Arr)
    }
    wincon()
}

Button_5.onclick = function(){

    if(win){
        return;
    }


    if(Button_5.textContent == "‎ "){

        Button_5.textContent = turn;

       if(turn == "X"){
            Arr[4] = "X"
            turn = "O"
            turne.textContent = "O's Turn"
            console.log("Turn: ",turn)
        }
        else if(turn == "O"){
             Arr[4] = "O"
            turn = "X"
            turne.textContent = "X's Turn"
            console.log("Turn: ",turn)
        }
        
    }
    else{
        console.log("Button Already Clicked")
        console.log(Arr)
    }
    wincon()
}
Button_6.onclick = function(){

    if(win){
        return;
    }


    if(Button_6.textContent == "‎ "){

        Button_6.textContent = turn;

       if(turn == "X"){
            Arr[5] = "X"
            turn = "O"
            turne.textContent = "O's Turn"
            console.log("Turn: ",turn)
        }
        else if(turn == "O"){
             Arr[5] = "O"
            turn = "X"
            turne.textContent = "X's Turn"
            console.log("Turn: ",turn)
        }
        
    }
    else{
        console.log("Button Already Clicked")
        console.log(Arr)
    }
    wincon()
}
Button_7.onclick = function(){

    if(win){
        return;
    }


    if(Button_7.textContent == "‎ "){

        Button_7.textContent = turn;

       if(turn == "X"){
            Arr[6] = "X"
            turn = "O"
            turne.textContent = "O's Turn"
            console.log("Turn: ",turn)
        }
        else if(turn == "O"){
             Arr[6] = "O"
            turn = "X"
            turne.textContent = "X's Turn"
            console.log("Turn: ",turn)
        }
        
    }
    else{
        console.log("Button Already Clicked")
        console.log(Arr)
    }
    wincon()
}
Button_8.onclick = function(){

    if(win){
        return;
    }


    if(Button_8.textContent == "‎ "){

        Button_8.textContent = turn;

       if(turn == "X"){
            Arr[7] = "X"
            turn = "O"
            turne.textContent = "O's Turn"
            console.log("Turn: ",turn)
        }
        else if(turn == "O"){
            Arr[7] = "O"
            turn = "X"
            turne.textContent = "X's Turn"
            console.log("Turn: ",turn)
        }
        
    }
    else{
        console.log("Button Already Clicked")
        console.log(Arr)
    }
    wincon()
}
Button_9.onclick = function(){

    if(win){
        return;
    }


    if(Button_9.textContent == "‎ "){

        Button_9.textContent = turn;

       if(turn == "X"){
            Arr[8] = "X"
            turn = "O"
            turne.textContent = "O's Turn"
            console.log("Turn: ",turn)
        }
        else if(turn == "O"){
             Arr[8] = "O"
            turn = "X"
            turne.textContent = "X's Turn"
            console.log("Turn: ",turn)
        }
        
    }
    else{
        console.log("Button Already Clicked")
        console.log(Arr)
    }
    wincon()
}



function wincon(){
    
    if(Arr[0] == "X" && Arr[1] == "X" && Arr[2] == "X" || Arr[3] == "X" && Arr[4] == "X" && Arr[5] == "X" || Arr[6] == "X" && Arr[7] == "X" && Arr[8] == "X"){
        console.log("X wins")
        turne.textContent = "X WINS"
        win = true
        return;
    }
    if(Arr[0] == "X" && Arr[3] == "X" && Arr[6] == "X" || Arr[1] == "X" && Arr[4] == "X" && Arr[7] == "X" || Arr[2] == "X" && Arr[5] == "X" && Arr[8] == "X"){
        console.log("X wins")
        turne.textContent = "X WINS"
        win = true
        return;
    }
    if( Arr[0] == "O" && Arr[1] == "O" && Arr[2] == "O" || Arr[3] == "O" && Arr[4] == "O" && Arr[5] == "O" || Arr[6] == "O" && Arr[7] == "O" && Arr[8] == "O"){
        turne.textContent = "O WINS"
        console.log("O Wins")
        win = true
        return;
    }
    if( Arr[0] == "O" && Arr[3] == "O" && Arr[6] == "O" || Arr[1] == "O" && Arr[4] == "O" && Arr[7] == "O" || Arr[2] == "O" && Arr[5] == "O" && Arr[8] == "O"){
        turne.textContent = "O WINS"
        console.log("O Wins")
        win = true
        return;
    }
    if( Arr[0] == "O" && Arr[4] == "O" && Arr[8] == "O" || Arr[6] == "O" && Arr[4] == "O" && Arr[2] == "O"){
        turne.textContent = "O WINS"
        console.log("O Wins")
        win = true
        return;
    }
    if( Arr[0] == "X" && Arr[4] == "X" && Arr[8] == "X" || Arr[6] == "X" && Arr[4] == "X" && Arr[2] == "X"){
        turne.textContent = "X WINS"
        console.log("X Wins")
        win = true
        return;
    }

}