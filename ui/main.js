// Counter Code
var button = document.getElementById('counter');
var counter = 0;

button.onClick = function() {
    
    //Make a request to the counter variable
    
    
    //Capture the response and store it in a variable
    
    
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
    
};
