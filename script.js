gameBoard = document.getElementById("gameBoard");
let timer = 0;
let bestTime;

setInterval(updateTimer, 1000)



function setBestTime() {
    if (!localStorage.getItem("bestTime") || localStorage.getItem("bestTime") === 0) {
        localStorage.setItem("bestTime", 1000);
    }
    bestTime = localStorage.getItem("bestTime");
    document.getElementById("spanBestTime").innerHTML = `${bestTime}s`;
}

function updateTimer() {
    timer += 1
    document.getElementById("spanCurrentTime").innerHTML = `${timer}s`
};


function shuffle(array) {
    var m = array.length,
        t, i;

    //while there remain elements to shuffle...

    while (m) {
        //pick a remaining element...
        i = Math.floor(Math.random() * m--);
        //and swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return (array);

};

document.addEventListener("DOMContentLoaded", () => {



    document.querySelector("#header").addEventListener("click", () => location.reload());

    let x = 1;


    let numbers = [8, 7, 7, 6, 6, 6, 5, 5, 5, 5,
        4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3,
        2, 2, 2, 2, 2, 2, 2,
        1, 1, 1, 1, 1, 1, 1, 1
    ];



    for (let r = 1; r < 7; r++) {

        for (let c = 1; c < 7; c++) {
            const newDiv = `<div class="r${r} c${c} number"></div>`
            gameBoard.innerHTML += newDiv;
        }
        gameBoard.innerHTML += `<div id="totalsC${x}" class="total"></div>`;
        x++;
    }

    for (x = 1; x < 7; x++) {
        gameBoard.innerHTML += `<div id="totalsR${x}" class="total"></div>`;
    }

    function initializeGame() {


        let newNumbers = numbers;
        shuffle(newNumbers);

        let i = 0;

        for (let r = 1; r < 7; r++) {
            for (let c = 1; c < 7; c++) {
                gameBoard.querySelector(`.r${r}.c${c}`).innerHTML = newNumbers[i];
                i++;
            }

        }
        setBestTime();
        updateTotals();
        updateTimer();
    }

    function updateTotals() {
        let newNumbers = numbers; //esto no sé si va, quizás esté duplicado
        //creo acá a tIndex como un índice para la creación de estos Totales,
        //y creo también a unos counter que usaré al iterar acá
        let tIndex = 0;
        let counter1, counter2, counter3, counter4, counter5, counter6;
        for (let r = 1; r < 7; r++) {
            counter1 = tIndex;
            counter2 = tIndex + 6;
            counter3 = tIndex + 12;
            counter4 = tIndex + 18;
            counter5 = tIndex + 24;
            counter6 = tIndex + 30;
            gameBoard.querySelector(`#totalsR${r}`).innerHTML = newNumbers[counter1] + newNumbers[counter2] + newNumbers[counter3] +
                newNumbers[counter4] + newNumbers[counter5] + newNumbers[counter6];
            // console.log(newNumbers[`${tIndex}+1`])
            tIndex++;
        }
        tIndex = 0;
        for (let c = 1; c < 7; c++) {
            let r = 1; //estará de más esto?
            counter1 = tIndex;
            counter2 = tIndex + 1;
            counter3 = tIndex + 2;
            counter4 = tIndex + 3;
            counter5 = tIndex + 4;
            counter6 = tIndex + 5;
            gameBoard.querySelector(`#totalsC${c}`).innerHTML = newNumbers[counter1] + newNumbers[counter2] + newNumbers[counter3] +
                newNumbers[counter4] + newNumbers[counter5] + newNumbers[counter6];
            tIndex += 6;

        }

    }
    let score = 0;

    gameBoard.querySelectorAll(".number").forEach(div => {
        div.onclick = function() {
            this.style.backgroundColor = "lightblue";
            this.style.color = "darkblue";
            if (this.innerHTML != "8") {
                score += parseInt(this.innerHTML);
                //para chequear si está sumando bien para detectar cuándo ganaste
                // console.log(score);
            }
            if (score === 112) {
                alert("YOU WON! Congratulations!")
                if (localStorage.getItem("bestTime") > timer) {
                    localStorage.setItem("bestTime", timer);
                    alert("Congratulations, that's a new record!")
                }
                location.reload()
            } else if (this.innerHTML === "8") {
                alert("You lost!")
                location.reload()
            }
        }
    })

    initializeGame();
})
