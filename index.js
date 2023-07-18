"use strict";

const choices=['rock','scissor','paper'] //ο πινακας με τις επιλογες
let player, computer; 
let playerScore=0 
let compScore  =0;
let btn,finalScore,isSucces;
let rock,scissor,paper, randomNumber ,result ,succesmeme;

//Picking Buttons and Headers 
btn=document.querySelector(".btn"); 
rock= document.querySelector("#rock");    
scissor= document.querySelector("#scissor");
paper= document.querySelector("#paper");
player= document.querySelector('#playerScore'); 
computer= document.querySelector('#computerScore'); 
result= document.querySelector("#result"); 
finalScore= document.querySelector("#finalScore");



//Function that changes the behaviour of pressed button
function pressedImg(img){
    img.classList.add("pressed");
    setTimeout(function() {
      img.classList.remove("pressed");
    }, 100);
}

//Function for Music 
function playMusic(selectedSound){
    switch (selectedSound) {
    case "success":
        var audio=new Audio("sounds/success.wav");
        audio.play();
        break;
    case "failure":
        var audio=new Audio("sounds/failure.wav");
        audio.play();
        break;
    case "draw":
        var audio=new Audio("sounds/draw.mp3");
        audio.play();
        break; 
    case "restart":
        var audio=new Audio("sounds/restart.mp3");
        audio.play();
        break;  
    default: 
        console("Sorry,this one does not exist. ")
            break;
       } 
}


//Function that changes the background photo 
function successBackground(value){
    value? document.body.classList.add("winnerbody"):  document.body.classList.remove("winnerbody");
}
function resultFunctionselectedImg(selectedImg){
    let  random= Math.floor(Math.random() * 3); //random number 
    isSucces=false;
        if(choices[random]===selectedImg){ // DRAW
            playMusic("draw");
            player.innerText=selectedImg; 
            computer.innerText= selectedImg; 
            result.innerText= `Draw` 
            result.style.color = "gray";
            successBackground(isSucces);
           
        }else if( (selectedImg==="rock" && choices[random]==="scissor") || (selectedImg==="scissor" && choices[random]==="paper") || (selectedImg==="paper" && choices[random]==="rock") ){
            playMusic("success");
            result.innerText=  `You Win!
                               ${selectedImg} beats ${choices[random]}`;
            result.style.color="green";
            player.innerText=selectedImg;
            computer.innerText=choices[random]
            
            playerScore++ //ΑΥΞΑΝΕΤΑΙ ΤΟ ΣΚΟΡ ΤΟΥ ΠΑΙΚΤΗ
            isSucces=true;
            successBackground(isSucces);
            document.body.classList.add("winnerbody");

        }else{
            playMusic("failure");
            result.innerText=  `You Lose! 
                            ${choices[random]} beats ${selectedImg}`
            result.style.color = "red"; // Ορισμός κόκκινου χρώματος
            player.innerText=selectedImg
            computer.innerText=choices[random]
            document.body.classList.remove("winnerbody");
            compScore++; //ΑΥΞΑΝΕΤΑΙ ΤΟ ΣΚΟΡ ΤΟΥ ΑΝΤΙΠΑΛΟΥ
            successBackground(isSucces);
    }
    finalScore.innerHTML=`Score: ${playerScore}- ${compScore}`// εμφανιζει το σκορ 
}
//EventListeners 

scissor.addEventListener("click", function () {
    pressedImg(scissor);
    resultFunctionselectedImg("scissor"); });

  
rock.addEventListener("click", function () {
    pressedImg(rock);
    resultFunctionselectedImg("rock");  });

  
paper.addEventListener("click", function () {
    pressedImg(paper);
    resultFunctionselectedImg("paper");  });


btn.addEventListener("click",()=>{
    playMusic("restart");
    //Declare variables
    playerScore = 0; 
    compScore = 0; 
    isSucces=false;
    finalScore.innerHTML = `Score:${playerScore } - ${compScore}`; //Εμφάνιση του αρχικού σκορ
    result.innerText="Tap to start again"
    player.innerText="You";
    computer.innerText="Competitor";
    successBackground(isSucces);
    setTimeout(() => {
        result.innerText="Let's start!"
    }, 2000);    })
 