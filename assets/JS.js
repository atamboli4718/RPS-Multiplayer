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

firebase.initializeApp(firebaseConfig);

//reference to the database
var database = firebase.database();

//global variables
var player1name;
var player1move;
var player1wins;
var player1losses;

var player2name;
var player2move;
var player2wins;
var player2losses;



// puts player 1 name to the database
$('#nameButton').on('click',function(){
    if database.ref().on("value", function(snapshot) {
        player1name = $('#name').val();
        database.ref().set({
            Player1Name: player1name,
            Player1Move: empty,
            Player1Wins: 0,
            Player1Losses: 0,
        });  
        //puts player1 name onto the page
        $('#player1name').text(player1name);  
    } else {
        playzer2name = $('#name').val();
        database.ref().set({
            Player2Name: player2name,
            Player2Move: empty,
            Player2Wins: 0,
            Player2Losses: 0,
        });
    }   
});




