gameBoard = document.getElementById("gameBoard");
let timer = 0;
let bestTime;

setInterval(updateTimer, 1000)

const howToPlayBtn = document.getElementById("howToPlayBtn");
howToPlayBtn.onclick = howToPlayMsg;
//declaro los contadores para el #missingNumbers
let count1 = count2 = count3 = count4 = count5 = count6 = count7 = 0;


//decido color para los #MissingNumbers encontrados:

let encontrado = "red";

//declaro los #missingNumbers
let siete1 = document.getElementById("siete-1");
let siete2 = document.getElementById("siete-2");
let seis1 = document.getElementById("seis-1");
let seis2 = document.getElementById("seis-2");
let seis3 = document.getElementById("seis-3");
let cinco1 = document.getElementById("cinco-1");
let cinco2 = document.getElementById("cinco-2");
let cinco3 = document.getElementById("cinco-3");
let cinco4 = document.getElementById("cinco-4");
let cuatro1 = document.getElementById("cuatro-1");
let cuatro2 = document.getElementById("cuatro-2");
let cuatro3 = document.getElementById("cuatro-3");
let cuatro4 = document.getElementById("cuatro-4");
let cuatro5 = document.getElementById("cuatro-5");
let tres1 = document.getElementById("tres-1");
let tres2 = document.getElementById("tres-2");
let tres3 = document.getElementById("tres-3");
let tres4 = document.getElementById("tres-4");
let tres5 = document.getElementById("tres-5");
let tres6 = document.getElementById("tres-6");
let dos1 = document.getElementById("dos-1");
let dos2 = document.getElementById("dos-2");
let dos3 = document.getElementById("dos-3");
let dos4 = document.getElementById("dos-4");
let dos5 = document.getElementById("dos-5");
let dos6 = document.getElementById("dos-6");
let dos7 = document.getElementById("dos-7");
let uno1 = document.getElementById("uno-1");
let uno2 = document.getElementById("uno-2");
let uno3 = document.getElementById("uno-3");
let uno4 = document.getElementById("uno-4");
let uno5 = document.getElementById("uno-5");
let uno6 = document.getElementById("uno-6");
let uno7 = document.getElementById("uno-7");
let uno8 = document.getElementById("uno-8");

function updateMissingNumbers(num){
    switch(num){
        case "7":
            if (count7 > 0){
                siete1.style.backgroundColor = encontrado;
                siete1.style.color = encontrado;
                siete1.style.borderColor = encontrado;  
                if (count7 > 1) {
                    siete2.style.backgroundColor = encontrado;
                    siete2.style.color = encontrado;
                    siete2.style.borderColor = encontrado;  
                }
            }
            break;
        case "6":
            if (count6 > 0){
                seis1.style.backgroundColor = encontrado;
                seis1.style.color = encontrado;
                seis1.style.borderColor = encontrado;  
                if (count6 > 1) {
                    seis2.style.backgroundColor = encontrado;
                    seis2.style.color = encontrado;
                    seis2.style.borderColor = encontrado;  
                    if (count6 > 2) {
                        seis3.style.backgroundColor = encontrado;
                        seis3.style.color = encontrado;
                        seis3.style.borderColor = encontrado;  
                    }
                }
            }
            break;
        case "5":
            if (count5 > 0){
                cinco1.style.backgroundColor = encontrado;
                cinco1.style.color = encontrado;
                cinco1.style.borderColor = encontrado;
                if (count5 > 1) {
                    cinco2.style.backgroundColor = encontrado;
                    cinco2.style.color = encontrado;
                    cinco2.style.borderColor = encontrado;
                    if (count5 > 2) {
                        cinco3.style.backgroundColor = encontrado;
                        cinco3.style.color = encontrado;
                        cinco3.style.borderColor = encontrado;
                        if (count5 > 3) {
                            cinco4.style.backgroundColor = encontrado;
                            cinco4.style.color = encontrado;
                            cinco4.style.borderColor = encontrado;
                        }
                    }
                }
            }
            break;
        case "4":
            if (count4 > 0){
                cuatro1.style.backgroundColor = encontrado;
                cuatro1.style.color = encontrado;
                cuatro1.style.borderColor = encontrado;
                if (count4 > 1) {
                    cuatro2.style.backgroundColor = encontrado;
                    cuatro2.style.color = encontrado;
                    cuatro2.style.borderColor = encontrado;
                    if (count4 > 2) {
                        cuatro3.style.backgroundColor = encontrado;
                        cuatro3.style.color = encontrado;
                        cuatro3.style.borderColor = encontrado;
                        if (count4 > 3) {
                            cuatro4.style.backgroundColor = encontrado;
                            cuatro4.style.color = encontrado;
                            cuatro4.style.borderColor = encontrado;
                            if (count4 > 4) {
                                cuatro5.style.backgroundColor = encontrado;
                                cuatro5.style.color = encontrado;
                                cuatro5.style.borderColor = encontrado;
                            }
                        }
                    }
                }
            }
            break;
        case "3":
            if (count3 > 0){
                tres1.style.backgroundColor = encontrado;
                tres1.style.color = encontrado;
                tres1.style.borderColor = encontrado;
                if (count3 > 1) {
                    tres2.style.backgroundColor = encontrado;
                    tres2.style.color = encontrado;
                    tres2.style.borderColor = encontrado;
                    if (count3 > 2) {
                        tres3.style.backgroundColor = encontrado;
                        tres3.style.color = encontrado;
                        tres3.style.borderColor = encontrado;
                        if (count3 > 3) {
                            tres4.style.backgroundColor = encontrado;
                            tres4.style.color = encontrado;
                            tres4.style.borderColor = encontrado;
                            if (count3 > 4) {
                                tres5.style.backgroundColor = encontrado;
                                tres5.style.color = encontrado;
                                tres5.style.borderColor = encontrado;
                                if (count3 > 5) {
                                    tres6.style.backgroundColor = encontrado;
                                    tres6.style.color = encontrado;
                                    tres6.style.borderColor = encontrado;
                                }
                            }
                        }
                    }
                }
            }
            break;
        case "2":
            if (count2 > 0){
                dos1.style.backgroundColor = encontrado;
                dos1.style.color = encontrado;
                dos1.style.borderColor = encontrado;
                if (count2 > 1) {
                    dos2.style.backgroundColor = encontrado;
                    dos2.style.color = encontrado;
                    dos2.style.borderColor = encontrado;
                    if (count2 > 2) {
                        dos3.style.backgroundColor = encontrado;
                        dos3.style.color = encontrado;
                        dos3.style.borderColor = encontrado;
                        if (count2 > 3) {
                            dos4.style.backgroundColor = encontrado;
                            dos4.style.color = encontrado;
                            dos4.style.borderColor = encontrado;
                            if (count2 > 4) {
                                dos5.style.backgroundColor = encontrado;
                                dos5.style.color = encontrado;
                                dos5.style.borderColor = encontrado;
                                if (count2 > 5) {
                                    dos6.style.backgroundColor = encontrado;
                                    dos6.style.color = encontrado;
                                    dos6.style.borderColor = encontrado;
                                    if (count2 > 6) {
                                        dos7.style.backgroundColor = encontrado;
                                        dos7.style.color = encontrado;
                                        dos7.style.borderColor = encontrado;
                                    }
                                }
                            }
                        }

                    }
                }
            }
            break;
        case "1":
            if (count1 > 0){
                uno1.style.backgroundColor = encontrado;
                uno1.style.color = encontrado;
                uno1.style.borderColor = encontrado;
                if (count1 > 1) {
                    uno2.style.backgroundColor = encontrado;
                    uno2.style.color = encontrado;
                    uno2.style.borderColor = encontrado;
                    if (count1 > 2) {
                        uno3.style.backgroundColor = encontrado;
                        uno3.style.color = encontrado;
                        uno3.style.borderColor = encontrado;
                        if (count1 > 3) {
                            uno4.style.backgroundColor = encontrado;
                            uno4.style.color = encontrado;
                            uno4.style.borderColor = encontrado;
                            if (count1 > 4) {
                                uno5.style.backgroundColor = encontrado;
                                uno5.style.color = encontrado;
                                uno5.style.borderColor = encontrado;
                                if (count1 > 5) {
                                    uno6.style.backgroundColor = encontrado;
                                    uno6.style.color = encontrado;
                                    uno6.style.borderColor = encontrado;
                                    if (count1 > 6) {
                                        uno7.style.backgroundColor = encontrado;
                                        uno7.style.color = encontrado;
                                        uno7.style.borderColor = encontrado;
                                        if (count1 > 7) {
                                            uno8.style.backgroundColor = encontrado;
                                            uno8.style.color = encontrado;
                                            uno8.style.borderColor = encontrado;
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
            }
            break;
    
    }

}

function resetMissingNumbers(){
    //reseteo los contadores del #missingNumbers

    count1 = count2 = count3 = count4 = count5 = count6 = count7 = 0;

}
function howToPlayMsg(){
    alert("How to play? (1/4)")
    alert("The 6x6 board has eight cells with the number 1, seven with the number 2, six with the number 3, five with the number 4, four with the number 5, three with the number 6, two with the number 7 and only one with the number 8... which should be avoided at all costs, because if you click on it it will be game over! (2/4)")
    alert("When you start, you can only see the totals for each row and column. Use that as a guide so to avoid clicking on the cell containing the number 8! (3/4)")
    alert("loc8 can be played in solitaire mode, but should be more enjoyable if played in teams: this way, every team can click on one, two or three cells (as they wish), and then pass the turn to the next team...hopefully, leaving them in a tight spot! (4/4)")
}

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
        resetMissingNumbers();
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
                switch (this.innerHTML) {
                    case "1":
                        count1++;
                        break;
                    case "2":
                        count2++;
                        break;
                    case "3":
                        count3++;
                        break;
                    case "4":
                        count4++;
                        break;
                    case "5":
                        count5++;
                        break;
                    case "6":
                        count6++;
                        break;
                    case "7":
                        count7++;
                        break;
                }
                updateMissingNumbers(this.innerHTML);
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
