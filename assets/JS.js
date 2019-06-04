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
var db = firebase.firestore();

//global variables
var player1data = db.collection("Player1");
var player1name;
var player1move;
var player1wins;
var player1losses;

var player2data = db.collection("player2");
var player2name;
var player2move;
var player2wins;
var player2losses;



// puts player 1 name to the database
$('#nameButton').on('click', function () {
     if (player1data.doc('player1').player1name == "") {
        player1name = $('#name').val();
        db.collections.doc('player1').set({
            player1name: player1name,
            player1move: empty,
            player1wins: 0,
            player1losses: 0,
        });
        //puts player1 name onto the page
        $('#player1name').text(player1name);
    } else {
        playzer2name = $('#name').val();
        db.collections.doc('player2').set({
            player2name: player2name,
            player2move: empty,
            player2wins: 0,
            player2losses: 0,
        });
        //puts player2 name onto the page
        $('player2name').text(player2name);
    }
})