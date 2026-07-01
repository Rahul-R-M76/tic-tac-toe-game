let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let winmsg = document.querySelector(".win-msg");
let msg = document.querySelector("#msg");

let turnO = true;
let count =0;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enableboxes();
    winmsg.classList.add("hide"); 
    count =0 ; 
    
};



boxes.forEach((box) => {
    box.addEventListener("click", () => { 
        if(turnO){//player o
            box.innerText = "O";
            turnO = false;
            count++;
            
        } else { //player x
            box.innerText = "X";
            turnO = true;
            count++;
            
        }
        box.disabled = true;
        checkwinner();
        
    });
});

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled =false ;
        box.innerText = "";
    }
};

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled =true ;

    }
};

const showwinner = (winner) => {
    msg.innerText =`Congratulations, Winner is ${winner}`;
    winmsg.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
       let pos1val = boxes[pattern[0]].innerText; 
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;

       if(pos1val !="" && pos2val != "" && pos3val != "") {
        if(pos1val === pos2val && pos2val === pos3val) {
            showwinner(pos1val);
        }
        
       }
       
    }
    if(count===9) {
        msg.innerText = "Draw";
        winmsg.classList.remove("hide");
        console.log(count);

    }       
    
    
};

resetbtn.addEventListener("click",resetgame);

