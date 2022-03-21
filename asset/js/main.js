//Generare una griglia di gioco quadrata, simile a quella dello screenshot, in cui ogni cella contiene un numero tra 1 e 100.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
let box = document.getElementById("box")

let livelli = document.getElementById("livelli");

let bottone = document.getElementById("bottone");

var celleLivello = 0;

//funzione per i numeri random
// function numeriRandom ( num1, num2 ){
//     return Math.floor(Math.random()* num1) + num2;
// }

bottone.addEventListener("click",
    function () {
        console.log(livelli.value)

        if (livelli.value == "livello medio") {
            celleLivello = 81;
            document.documentElement.style.setProperty("--numero-celle", "9");

        } else if (livelli.value == "livello difficile") {
            celleLivello = 49;
            document.documentElement.style.setProperty("--numero-celle", "7");

        } else {
            celleLivello = 100;

        }

        for (i = 1; i <= celleLivello; i++) {
            let divContainer = document.createElement("div");
            //aggiungere una calsse al div creatp
            divContainer.classList.add("cell-100")
            //aggiungere i numeri alla singola cella
            divContainer.innerHTML = i
        
        
            //appendere l'elemento creato dentro il div in html con id box
            box.appendChild(divContainer);
        
            //fumzione evento cliccato
            divContainer.addEventListener("click",
                function () {
                    console.log(this);
        
                    //mettere una classe al this
                    this.classList.add("color-cell")
                }
        
            )
        
        }
    }

)



console.log(box)




//bonus
// Permettere all'utente di indicare una difficoltà in base alla quale viene generato un numero variabile di celle:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49