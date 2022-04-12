var player, winner = null;
var currentPlayer = document.getElementById('current-player');
var selectedWinner = document.getElementById('selected-winner');
var squares = document.getElementsByClassName('square');

switchPlayer('X');

function chooseSquare(id){
    if (winner !== null){
        return;
    }
    var square = document.getElementById(id);
    if(square.innerHTML !== '-'){
        return;
    }
    square.innerHTML = player;
    square.style.color = '#000';
    console.log('clicou no botão' + id);

    if(player === 'X'){
        player = 'O';
    }
    else{
        player = 'X';
    }
    switchPlayer(player);
    winnerCheck();
}

function switchPlayer(value){
    player = value;
    currentPlayer.innerHTML = player;
}

function winnerCheck(){
    var square1 = document.getElementById(1);
    var square2 = document.getElementById(2);
    var square3 = document.getElementById(3);
    var square4 = document.getElementById(4);
    var square5 = document.getElementById(5);
    var square6 = document.getElementById(6);
    var square7 = document.getElementById(7);
    var square8 = document.getElementById(8);
    var square9 = document.getElementById(9);

    if(sequenceCheck(square1, square2, square3)){
        colorChange(square1, square2, square3);
        winnerChange(square1);
        return;
    }
    if(sequenceCheck(square4, square5, square6)){
        colorChange(square4, square5, square6);
        winnerChange(square4);
        return;
    }
    if(sequenceCheck(square7, square8, square9)){
        colorChange(square7, square8, square9);
        winnerChange(square1);
        return;
    }
    if(sequenceCheck(square1, square4, square7)){
        colorChange(square1, square4, square7);
        winnerChange(square1);
        return;
    }
    if(sequenceCheck(square2, square5, square8)){
        colorChange(square2, square5, square8);
        winnerChange(square2);
        return;
    }
    if(sequenceCheck(square3, square6, square9)){
        colorChange(square3, square6, square9);
        winnerChange(square3);
        return;
    }
    if(sequenceCheck(square1, square5, square9)){
        colorChange(square1, square5, square9);
        winnerChange(square1);
        return;
    }
    if(sequenceCheck(square3, square5, square7)){
        colorChange(square3, square5, square7);
        winnerChange(square3);
        return;
    }
}

function winnerChange(square){
    winner = square.innerHTML;
    selectedWinner.innerHTML = winner;
}

function colorChange(square1, square2, square3){
    square1.style.background = '#0f0';
    square2.style.background = '#0f0';
    square3.style.background = '#0f0';
}

function sequenceCheck(square1, square2, square3){
    var isEqual = false;
    if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
        isEqual = true;
    }
    return isEqual;
}

function restart(){
    winner = null;
    selectedWinner.innerHTML = "";
    for (var i = 1; i <= 9; i++){
        var square = document.getElementById(i);
        square.style.background = '#eee';
        square.style.color = '#eee';
        square.innerHTML = '-';
    }
    switchPlayer('X');
}