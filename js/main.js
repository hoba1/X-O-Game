let scorexp = document.querySelector(".X");
let scoreop = document.querySelector(".O");
let scorex = 0;
let scoreo = 0;

if(localStorage.getItem("X") != ""){
    if(localStorage.getItem("scorex") != null){
        scorex = localStorage.getItem("scorex")
        scorexp.innerHTML = `${localStorage.getItem("X")}: ${localStorage.getItem("scorex")}`
    } else {
        scorexp.innerHTML = `${localStorage.getItem("X")}: 0`
    }
}
if(localStorage.getItem("O") != ""){
    if(localStorage.getItem("scoreo") != null){
        scoreo = localStorage.getItem("scoreo")
        scoreop.innerHTML = `${localStorage.getItem("O")}: ${localStorage.getItem("scoreo")}`
    } else {
        scoreop.innerHTML = `${localStorage.getItem("O")}: 0`
    }
}

let turn = "X";
let boxs = []

function end(num1){
    let overlay = document.createElement("div");
    overlay.classList.add("end-game");
    let winnerp = document.createElement("p");
    winnerp.classList.add("winner-p");
    winnerp.innerHTML = `${localStorage.getItem(boxs[num1])} winner`;
    overlay.appendChild(winnerp);
    document.body.appendChild(overlay);
    if(boxs[num1] == "X") {
        scorex++
        localStorage.setItem("scorex",scorex);
    } else if(boxs[num1] == "O"){
        scoreo++
        localStorage.setItem("scoreo",scoreo);
    }
    setInterval(function(){winnerp.innerHTML += "."},1000);
    setTimeout(function(){location.reload()},3000);
}

function winner(){
    for(let i = 1; i < 10; i++){
        boxs[i] = document.getElementById("item" + i).innerHTML;
    };
    if(boxs[1] == boxs[2] && boxs[2] == boxs[3] && boxs[1] != ''){
        end(1)
    }   else if(boxs[4] == boxs[5] && boxs[5] == boxs[6] && boxs[4] != ''){
        end(4)
    }   else if(boxs[7] == boxs[8] && boxs[8] == boxs[9] && boxs[7] != ''){
        end(7)
    }   else if(boxs[1] == boxs[4] && boxs[4] == boxs[7] && boxs[1] != ''){
        end(1)
    }   else if(boxs[2] == boxs[5] && boxs[5] == boxs[8] && boxs[2] != ''){
        end(2)
    }   else if(boxs[3] == boxs[6] && boxs[6] == boxs[9] && boxs[3] != ''){
        end(3)
    }   else if(boxs[1] == boxs[5] && boxs[5] == boxs[9] && boxs[1] != ''){
        end(1)
    }   else if(boxs[3] == boxs[5] && boxs[5] == boxs[7] && boxs[3] != ''){
        end(3)
    }
}

function game(id){
    let ele = document.getElementById(id);
    if(turn === "X" && ele.innerHTML == ""){ 
        ele.innerHTML = "X";
        turn = "O";
    } else if(turn === "O" && ele.innerHTML == ""){
        ele.innerHTML = "O";
        turn = "X";
    }
    winner();
}

document.querySelector(".Restart").addEventListener("click", () => {
    localStorage.clear()
    location.href = "index.html"
})
