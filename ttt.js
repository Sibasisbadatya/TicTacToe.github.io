console.log("hello");
// music part
let tmusic = new Audio("eachstep.mp3");
let winning = new Audio("winner.mp3");
let t = "X";

// function calling(x and 0)
const changeTurn = () => {
    return t === "X" ? "0" : "X"
}
// function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("s1");
    let Wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 5, 6],
    ]

    Wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".p").innerText ="Player who entered " + boxtext[e[0]].innerText + " wins."
            winning.play();
            document.getElementById("image").style.height="100%";
        }

    })
}
// game logic


let boxes = document.getElementsByClassName("d1");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".s1");
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = t;
            t = changeTurn();
            tmusic.play();
            checkWin();
            document.getElementsByClassName("xy")[0].value = "Turn for " + t;

        }

    })
})

function plag(){
  window.location.reload(true);

}