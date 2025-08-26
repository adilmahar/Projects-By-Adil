


const todo = document.getElementById("todo")
let newtask = document.getElementById("newtask")


newtask.addEventListener("keypress",function(event){

    if (event.key == "Enter") {
      
      console.log("User pressed Enter:", newtask.value);
      newtodo();
    }
})






function newtodo(){
   console.log( newtask.value)

   let newlistitem = document.createElement("div")

   newlistitem.id = "listitem"


   newlistitem.textContent = "ToDo: " + newtask.value
   
   let emptycheck = "ToDo: " + ""


   if(emptycheck == newlistitem.textContent){
    console.log("Empty Data")
   }
   else{
    todo.append(newlistitem)
   }
   
   

    newtask.value = ""
}
