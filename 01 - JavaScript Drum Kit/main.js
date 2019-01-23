document.addEventListener("DOMContentLoaded", function(event) { //optional?

    function playSound(e) { 
        //target audio element with attribute value matching key's code       
        let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        
        if (sound === null) return; //so no error messages in console  
        sound.currentTime = 0;  //restart audio if key pressed before audio is finished
        sound.play();   //play audio

        //add css to key/div that was pressed
        let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
       
        key.classList.add("playing");  
        //remove class after all css style ends instead of setTimeout (won't be in sync with other timed styles in css)
        // setTimeout(function(){ key.classList.remove("playing"); }, 100);
        key.addEventListener("transitionend", (e) => {
            key.classList.remove("playing");
            // console.log(e.propertyName);
        });
    }

    //listen for any key pressed on keyboard (playSound without () so not immediately invoked)
    document.addEventListener( "keydown", playSound );  
});

