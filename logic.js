const boxes = document.querySelectorAll(".box");
let turn=1;
function output(box){
    
    if (turn){
         box.innerText ="X";
         turn=0;
         
    }
    else{
         box.innerText ="O";
         turn=1;
    }
  box.style.pointerEvents = "none";
  let winner=checkwinner();
  if(winner==true){
    

  }
}
let pattern = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6],
];
 

const checkwinner=() =>{
    for(let i=0;i<8;i++){
      
        position1=pattern[i][0];
        position2=pattern[i][1];
        position3=pattern[i][2];
        
        let val1 = boxes[position1].innerText;
        let val2 = boxes[position2].innerText;
        let val3 = boxes[position3].innerText;

        if (val1 !== "" && val1 === val2 && val1 === val3) {
             setTimeout(() => {
        alert(val1 + " wins!");
    }, 100);
    return true;
        }
    }
    }
    

function resetGame(){
    boxes.forEach(box => {
        box.innerText = "";
        box.style.pointerEvents = "auto"; 
    });

    turn = 1;
}