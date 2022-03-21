//Generare una griglia di gioco quadrata, simile a quella dello screenshot, in cui ogni cella contiene un numero tra 1 e 100.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
let box = document.getElementById("box")

//funzione per i numeri random
// function numeriRandom ( num1, num2 ){
//     return Math.floor(Math.random()* num1) + num2;
// }


for ( i = 1 ; i <= 100; i ++ ){
    let divContainer = document.createElement("div");
    //aggiungere una calsse al div creatp
    divContainer.classList.add("cell")
    //aggiungere i numeri alla singola cella
    divContainer.innerHTML = i


    //appendere l'elemento creato dentro il div in html con id box
    box.appendChild(divContainer);
     
    //fumzione evento cliccato
    divContainer.addEventListener( "click",
        function(){
            console.log(this);

            //mettere una classe al this
            this.classList.add("color-cell")
        }
        
    )

}    
console.log(box)
    

