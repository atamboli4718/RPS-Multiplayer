//click function for chat button
$('#chatButton').on("click", function(){
    event.preventDefault();
    chatContent();
})

//function to write chat to DOM
function chatContent() {
    var playerInfo = localStorage.getItem('player')
    console.log(playerInfo)
    var message = $("#textArea").val()
    $('#chatHistory').prepend(playerInfo+message)
    //$('#chatHistory').text(message);
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
