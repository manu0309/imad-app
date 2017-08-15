// Counter Code
var button = document.getElementById('counter');
//var counter = 0;

button.onClick = function() {
    
    //Make a request to the counter variable
    var request = new XMLhttpRequest();
    
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLhttpRequest.DONE) {
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTMl = counter.toString();
            }
        }
    };
    
  //  counter = counter + 1;
   // var span = document.getElementById("count");
    //span.innerHTML = counter.toString();
    request.open('GET','http://coco98.imad.hasura-app.io/counter',true);
    request.send(null);
    
};
