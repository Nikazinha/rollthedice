

function roleDice(){
//Getting dice 1 a randomNumber
var randomNumber1 = Math.random();
randomNumber1 = Math.floor ((randomNumber1 * 6)+1); //1 -6 Dado 1

var randomDiceNumber1 = "images/dice"+ randomNumber1 + ".png"; // dice1.png - dice6.png

//Getting dice 2 a randomNumber
var randomNumber2 = Math.random();
randomNumber2 = Math.floor ((randomNumber2 * 6)+1);//1 -6 Dado 2

var randomDiceNumber2 = "images/dice"+ randomNumber2 + ".png"; // dice1.png - dice6.png

//Atribuindo as imagens aos dados:
var image1 = document.querySelector(".img1").setAttribute("src", randomDiceNumber1 );
var image2 = document.querySelector(".img2").setAttribute("src", randomDiceNumber2 );

// Condicionantes:

//if player1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = " 🏁 Vitória do Jogador 1";
}
//if player2 wins
  else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Vitória do Jogador 2 🏁";
  }
//no one wins
  else{
    document.querySelector("h1").innerHTML = "Empate";

}
}

var somDado = new Audio();
somDado.src = "images/dicesound.mp3";
