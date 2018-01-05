import React, { Component } from 'react';
import song from './Metal Gear Solid - Encounter.mp3'
import UhOh from './Game Over.mp3'

class KeyListener extends Component{

      constructor() {
        super();
        //up up down down left right left right b a
        var konamiCode = '38,38,40,40,37,39,37,39,66,65';
        //Store keypresses
        var keyPresses = [];

        var easterEgg = false;

        var checkKonami = function(e) {

            keyPresses.push(e.keyCode);
                if (keyPresses.slice(keyPresses.length-10).join() === konamiCode && easterEgg === false) {
                    easterEgg = true;
                    runKonami();
                }
                else if(keyPresses.length >= 10 && easterEgg === false){
                    easterEgg = true;
                    let x = document.createElement("AUDIO");
                    x.src = UhOh
                    x.play();
                }

        };

        //If Konami code is entered call this function
        var runKonami = function() {
            let x = document.createElement("AUDIO");
            x.src = song
            x.play();
        }

        //Each time key is pressed call check function
        document.addEventListener('keyup', checkKonami);
    
    }

    render(){
        return(
            <div>
            </div>
        );
    }

}

export default KeyListener