let database = firebase.database();

function send() {
	let message = document.getElementById("message").value;
    
    messageobj = {
                 message: message,
                 author: "Jatin"          // give it your name  ex: author: "your name"
              }
       write(messageobj)
       $("#message").val("")
 }

function write(objmessage) {
	
	database.ref("/chat").push(objmessage)
}


function read()
{
    database.ref('/chat').on('value',function (data){    //.on is the listener that is always checking any updation in databaseand tell the frontend as soon as changes are made
    
     let messages = data.val();
    $("#display").empty();
    $("#friend").empty();

    for(messagekey in messages)
    {     
    	let message = messages[messagekey];
        let friendname = ""; 

        if(message.author == "Jatin")
    	{
             $("#display").append(`<!-- <p id= "name">${message.author}</p> --> <p id="text">${message.message}</p><br>`)  //your message. This will be displayed on right side of screen 
        }
         
        else
        {
            $("#display").append(`<!-- <p id= "name">${message.author}</p> --> <p id="text">${message.message}</p><br>`)   //your friend's message. This will be displayed on left side of screen
             friendname = message.author;
        }
        document.getElementById("friend").innerHTML = friendname;
    }

    }); 

}

read();