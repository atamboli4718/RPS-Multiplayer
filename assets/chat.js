var chatRef = database.ref('/chatBox');

//click function for chat button
$('#chatButton').on("click", function(){
    event.preventDefault();
    chatContent();
})

//function to write chat to DOM
function chatContent() {
    var playerInfo = localStorage.getItem('player')
    console.log(playerInfo)
    var message = $("#textArea").val();
    chatRef.set({
        name: playerInfo,
        message: message,       
    })
    chatRef.on('value',function(snapshot){
        $('#chatHistory').text(playerInfo+' says: '+ message);        
    })
}
    
    




    // console.log('in chatContent function')
    // var messageDiv=$('<div>')
    // var message=$('#textArea').val()
    // messageDiv.addClass('my-5')
    // messageDiv.text(message)
    // var chatterDiv=$('<div>')
    // var chatter
    // chatterDiv.addClass('user_info')
    // chatterDiv.text(chatter)
    
    // chatterDiv.appendTo('#chatHistory')
    // chatterDiv.append(messageDiv)
