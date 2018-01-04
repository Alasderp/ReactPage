import React, { Component } from 'react';
import './button.css';
import sound from './Call of the Gigguk.mp3'

class Button extends Component {

    playSound() {
        let x = document.createElement("AUDIO");
        x.src = sound
        x.play();
    }

      render() {
        return (

        <div id="buttonHolder">  
          <a className="button" onClick={this.playSound}></a>
        </div>

        );
    }


}

export default Button;