let Score = 0 
let win = false 
let tie = false
const gameOptions = ['rock', 'paper', 'scissors']
document.getElementById('rules_image').style.display = 'none';
document.getElementById('result').style.display = 'none';

function Game(Num){
    tie = false

    //gets random number and picks a random option for the computer
    Temp = (Math.ceil(Math.random() * 3)-1)
    Computer = (gameOptions[Temp])
    Player = (gameOptions[Num])
    console.log(Player ,"vs", Computer)

    var PCircle = document.getElementById("PCircle")
    var Image = document.getElementById("Image")

    //Makes the players circle change to match the image/color
    switch(Player){
        case 'rock':
            PCircle.style.background = "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))"
            Image.src = "./images/icon-rock.svg"
            if (Computer === 'paper'){
                win = false;}
            else if (Computer === 'scissors'){ 
                win = true}
            else{
                tie = true}
            break;

        case 'paper':
            PCircle.style.background = "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))"
            Image.src = "./images/icon-paper.svg"
            if (Computer === 'scissors'){
                win = false;
                break}
            else if (Computer === 'rock'){ 
                win = true}
            else{
                tie = true}
            break;
        
        case 'scissors':
            PCircle.style.background = "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))"
            Image.src = "./images/icon-scissors.svg"
            if (Computer === 'rock'){
                win = false;
                break}
            else if (Computer === 'paper'){ 
                win = true}
            else{
                tie = true}  
            break;   
    }



    if (win === true && tie === false){
        Score++;
        document.getElementById("You_Win").innerHTML = ("YOU WIN")
    }
    else if (win === false && tie === false){
        Score--;
        document.getElementById("You_Win").innerHTML = ("YOU LOSE")
    }
    else{
        document.getElementById("You_Win").innerHTML = ("TIE")
    }

    var Hide = document.getElementById("Game")
    var Hide2 = document.getElementById("Bottom_bar")
    var Hide3 = document.getElementById("Middle_Box")
    var Display = document.getElementById("result")
    Hide.style.display = "none"
    Hide2.style.display = "none"
    Hide3.style.display = "none"
    Display.style.display = "flex"

}

function Rule(){
    var Rules = document.getElementById("rules_image")
    if (Rules.style.display === "none")
        Rules.style.display = "flex";
    else{
        Rules.style.display = "none";
    }
}


function Playagain(){
    var Hide = document.getElementById("result")
    var Display = document.getElementById("Bottom_bar")
    var Display2 = document.getElementById("Game")

    if (Display2.style.display === "none"){
        Hide.style.display = "none"
        Display.style.display = "flex"
        Display2.style.display = "block"
     
    }
    else{
        Hide.style.display = "none"
        Display.style.display = "flex"
        Display2.style.display = "block"
    }
    $(document).ready(function(){
        $("#right").animate({"margin-left": "-=125px"}, "slow")
        $("#left").animate({"margin-right": "-=125px"}, "slow")
    })
}


/*$(document).ready(function(){
    $(".Circle").click(function(){
        if (win === true && tie === false){
            $("#PCircle").animate({
                height: "+=50px",
                width: "+=50px",
            })
            $("#PCircle").animate({
                height: "-=50px",
                width: "-=50px",
            })
        }
        else if (win === false && tie === false){
            $("#CCircle").animate({
                height: "+=50px",
                width: "+=50px",
            })
            $("#CCircle").animate({
                height: "-=50px",
                width: "-=50px",
            })  
        }
        else if (tie === true){
            $(".Circle2").animate({
                height: "+=50px",
                width: "+=50px",
            })
            $(".Circle2").animate({
                height: "-=50px",
                width: "-=50px",
            })
        }
    })  
})*/



$(document).ready(function(){
    $(".Circle").click(function(){
        var CCircle = document.getElementById("CCircle")
        var Image2 = document.getElementById("Image2")
        let Now = new Date().getTime()
        let Next = Now+5000
        let Temp2 = 3
        let x = setInterval (function(){
            console.log("asdadoajdsoj")
            let Temp3 = Temp2 
            Temp2 = (Math.ceil(Math.random() * 3)-1)
            while (Temp3 === Temp2 ){
                Temp2 = (Math.ceil(Math.random() * 3)-1)
            }
            switch(Temp2){
                case 0:{
                    CCircle.style.background = "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))" //rock
                    Image2.src = "./images/icon-rock.svg"
                    break
                }
                case 1:{
                    CCircle.style.background = "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))" //paper
                    Image2.src = "./images/icon-paper.svg"
                    break
                }
                case 2:{
                    CCircle.style.background = "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))" //scissors
                    Image2.src = "./images/icon-scissors.svg"
                    break
                }
            }
            let Now = new Date().getTime()
            let far = Next - Now
            if (far < 0){   //makes the loop stop when the time hits the specified future time
                clearInterval(x)  
                Computer_Choise()
            }            
        },200) //Does it every 200ms

    })
    
})

function Computer_Choise(){
    switch(Computer){
        case 'rock':{
            CCircle.style.background = "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))"
            Image2.src = "./images/icon-rock.svg"
            break;
        }
        case 'paper':{
            CCircle.style.background = "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))"
            Image2.src = "./images/icon-paper.svg"
            break;
        }
        case 'scissors':{
            CCircle.style.background = "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))"
            Image2.src = "./images/icon-scissors.svg"
            break;
        }
    }
    document.getElementById("score_counter").innerHTML = Score
    MoveItems() 
}

function MoveItems(){
    $(document).ready(function(){
        $("#right").animate({"margin-left": "+=125px"}, "slow")
        $("#left").animate({"margin-right": "+=125px"}, "slow")
    })
    setTimeout(Unhide,1000)
}

function Unhide(){
   //You_Win = document.getElementById("You_Win")
    $(document).ready(function(){
        console.log("test")
        //You_Win.style.textAlign = "right"
        $("#Middle_Box").fadeIn();
    })
}