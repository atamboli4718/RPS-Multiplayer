/* 
Psuedo Code:
Add the images of the rock paper scissors to the screen HTML
Create the name & wins field for the HTML
Create the box for the "game" and who won HTML
Create Firebase project
Create alert for Enter your name
Write that data to the screen
Create when entered assigned to 1 if empty, if not assign to two
Assign name for chat window
Create chat window with name and time and date stamp example example2
Do logic for what beats what - find project from Week 4
Playzer 1 always goes first
Winner in center box

*/

// Firebase objects and initilization
var firebaseConfig = {
  apiKey: "AIzaSyAp-4rbip43yTXSQi6u5j24nxmWvzxUivw",
  authDomain: "rps-game-d993b.firebaseapp.com",
  databaseURL: "https://rps-game-d993b.firebaseio.com",
  projectId: "rps-game-d993b",
  storageBucket: "rps-game-d993b.appspot.com",
  messagingSenderId: "994168819528",
  appId: "1:994168819528:web:1fde03218a2642cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference to the database
var database = firebase.database();

var nameSwitch = 0;

//keys
player1Ref = database.ref('/player1');
player2Ref = database.ref('/player2');

database.ref('/player1').once('value', function (snapshot) {
  console.log(snapshot.val());
})

// puts player 1 name to the database
$('#letsPlay').on('click', function () {
  event.preventDefault();
  console.log('in click function');
  if (!nameSwitch) {
    console.log('insetplayer1namefunction');
    player1name = $('#name').val();
    nameSwitch = 1;
    player1Ref.set({
      player1name: player1name,
      player1wins: player1wins,
      player1losses: player1losses,
    });
    //puts player1 name onto the page
    $('#player1name').html(player1name);
    $('#gameSpace').text('Wating on Player2 to join.')
    //puts player2 name into the db
  } else if (nameSwitch == 1) {
    console.log('insetplayer2namefunction');
    player2name = $('#name').val();
    nameSwitch = 2;
    player2Ref.set({
      player2name: player2name,
      player2wins: player2wins,
      player2losses: player2losses,
    });
    //puts player2 name onto the page
    $('#player2name').html(player2name);
    $('#gameSpace').text('Make your move!');
  }
  //alerts that the game is full  
  else {
    alert('game is full, please wait');
  }
  $('#name').reset();
})

//variables for player moves and wins
var player1move;
var player2move;

var player1wins = 0;
$('#player1wins').text(player1wins);
var player2wins = 0;
$('#player2wins').text(player2wins);

var player1losses = 0;
$('#player1losses').text(player1losses);
var player2losses = 0;
$('#player2losses').text(player2losses);

//click functions for rps buttons
$('#rock1').on('click', function () {
  event.preventDefault();
  player1move = 'r';
  console.log(player1move);
  database.ref('/player1').update({
    player1move: player1move,
  });
  gamePlay();
})

$('#paper1').on('click', function () {
  event.preventDefault();
  player1move = 'p';
  console.log(player1move);
  database.ref('/player1').update({
    player1move: player1move,
  });
  gamePlay();
})

$('#scissors1').on('click', function () {
  event.preventDefault();
  player1move = 's';
  console.log(player1move);
  database.ref('/player1').update({
    player1move: player1move,
  });
  gamePlay();
})

$('#rock2').on('click', function () {
  event.preventDefault();
  player2move = 'r';
  console.log(player2move);
  database.ref('/player2').update({
    player2move: player2move,
  });
  gamePlay();
})

$('#paper2').on('click', function () {
  event.preventDefault();
  player2move = 'p';
  console.log(player2move);
  database.ref('/player2').update({
    player2move: player2move,
  });
  gamePlay();
})

$('#scissors2').on('click', function () {
  event.preventDefault();
  player2move = 's';
  console.log(player2move);
  database.ref('/player2').update({
    player2move: player2move,
  });
  gamePlay();
})

//function for determining winner
function gamePlay() {
  if ((player1move == "r") || (player1move == "p") || (player1move == "s")) {

    if ((player1move == "r" && player2move == "s") ||
      (player1move == "s" && player2move == "p") ||
      (player1move == "p" && player2move == "r")) {
      player1wins++;
      player2losses++;
    } else if (player1move == player2move) {
      $('#gameSpace').text("you tied! play again");
      
    } else {
      player1losses++;
      player2wins++;
    }  
  }
  score (); 
}

//function to push wins & losses to db
function score () {
  database.ref('/player1').update({
    player1wins: player1wins,
  });
  database.ref('/player1').update({
    player1losses: player1losses,
  });
  database.ref('/player2').update({
    player2wins: player2wins,
  });
  database.ref('/player2').update({
    player2losses: player2losses,
  });
}

//checking for player moves
// function winnerCheck (){
//     database.ref().once('value',function(snapshot){
//     console.log(snapshot.val());


//   })

// }

// winnerCheck();