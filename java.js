/*when the user presses the submit button,change the greeting to include their name */

// get access to the button and set up event handler
    var button=document.getElementById("submit");
        button.onclick=changeGreeting;

    function changeGreeting(){
      var greeting=document.getElementsBytag Name("hello,world!");

      var input=document.getElementById("Name"),value
        greeting.innerHTML="Hello,"+ input;
    }