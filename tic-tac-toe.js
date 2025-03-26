let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGamebtn=document.querySelector(".newgame");
let msgcontainer=document.querySelector(".winner");
let msg=document.querySelector(".msg");
let turn0=true;
let count=0;
//playerx,playery
const winPattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turn0){
        box.innerText="0";
        turn0=false;
        count++;
       }else{
        box.innerHTML="X";
        turn0=true;
        count++;
       }
       //to make button only clicked once
       box.disabled=true;
       if(count===9){
        drawMatch();
       }else{
       checkWinner();
       }
    });
});
const showWinner=(winner)=>{
    msgcontainer.classList.remove("hide");
  msg.innerText=`Congratulations, Winner is ${(winner)}`;
  disableBtn();
};
const drawMatch=()=>{
    msgcontainer.classList.remove("hide");
    msg.innerText="Oops, it's a Draw!!";
    disableBtn();

}
const checkWinner=()=>{
    for(let pattern of winPattern){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val=== pos2val && pos2val === pos3val){
            console.log("Winner");
            showWinner(pos1val);
        }
    }
    }
};
const resetGame=()=>{
    turn0=true;
    msgcontainer.classList.add("hide");
    enableBoxes();
   
}
const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
for(let box of boxes){
 box.disabled=false;
 box.innerText="";
}
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
