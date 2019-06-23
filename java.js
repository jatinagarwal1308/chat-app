let database = firebase.database();

function send() {
	let message = document.getElementById("message").value;
    
    messageobj = {
                 message: message,
                 author: "Jatin"
              }
       write(messageobj)
       $("#message").val("")
 }

function write(objmessage) {
	
	database.ref("/chat").push(objmessage)
}


function read()
{
    database.ref('/chat').on('value',function (data){
    
     let messages = data.val();
    $("#display").empty();

    for(messagekey in messages)
    {     
    	let message = messages[messagekey];
    	$("#display").append(`<!-- <p id= "name">${message.author}</p> --> <p id="text">${message.message}</p><br>`)
    }

    }); 

}

read();