//click function for chat button
$('#chatButton').on("click", function(){
    event.preventDefault();
    chatContent();
})

//function to write chat to DOM
function chatContent() {
    database.ref()





    console.log('in chatContent function')
    var messageDiv=$('<div>')
    var message=$('#textArea').val()
    messageDiv.addClass('my-5')
    messageDiv.text(message)
    var chatterDiv=$('<div>')
    var chatter
    database.ref().on('child_added',function(snapshot){
    chatter=snapshot.val(player1name)
    })
    chatterDiv.addClass('user_info')
    chatterDiv.text(chatter)
    
    chatterDiv.appendTo('#chatHistory')
    chatterDiv.append(messageDiv)
}