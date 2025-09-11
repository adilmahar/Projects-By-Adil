

let run = false


let seconds = 0
let speed = 1000
let mins = 0
let RunClock = null
 let minus = 100
function startclock(){
  console.log(speed)
  if(RunClock != null){
    return;
  }
  console.log("Start Function Ran RunClick != null")
/*  document.getElementById("right-half").textContent = 
          seconds.toString().padStart(2, '0');
    document.getElementById("right-half").textContent = 
          mins.toString().padStart(2, '0');*/
     RunClock = setInterval(() => {
        seconds++;
        if (seconds > 60) {
          seconds = 0; // reset after 60
          mins = mins + 1
          if(mins > 59){
            mins = 0
          }
          document.getElementById("left-half").textContent = mins.toString().padStart(2,'0')
        }
       document.getElementById("right-half").textContent = 
          seconds.toString().padStart(2, '0'); // format as 00
      }, speed)
}
function stop(){
  clearInterval(RunClock)
  RunClock = null
  
}
function reset(){

  clearInterval(RunClock)
  RunClock = null
  seconds = 0
  mins = 0
  speed = 1000
  document.getElementById("right-half").textContent = 
          `0`.toString().padStart(2, '0');
    document.getElementById("left-half").textContent = 
          `0`.toString().padStart(2, '0');
}

