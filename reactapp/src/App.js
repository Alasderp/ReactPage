import React, { Component } from 'react';
import logo from './logo.png';
import song from './National Anthem of USSR.mp3'
import './App.css';

class App extends Component {

  constructor() {
    super();
    
    //Array of dog objects - implemented as a state
    this.state = {
      stateText: 
      [
        {
            id:1,
            name:"Koshi",
            age:12,
            species:"Collie-Poodle"
        },
        {
          id:2,
          name:"Rosha",
          age:14,
          species:"Labrador"          
        }
      ]
    }
  }

    addDogBtn() {
      //Get values from text boxes
      let id = document.getElementById("idInput").value;
      let name = document.getElementById("nameInput").value;
      let age = document.getElementById("ageInput").value;
      let breed = document.getElementById("breedInput").value;

      //Create json object from values
      let payload = {
        "id":id,
        "name":name,
        "age":age,
        "species":breed
      };
      
      //Copy state into temp array
      let tempArray = this.state.stateText.slice();

      //Mutate temp array
      tempArray.push(payload);

      //Set state to temp array
      this.setState({stateText: tempArray})

    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {/*Access the property passed down and place it on page*/}
          <br/>{this.props.exampleProp}
          </p>
          <br/>

        <audio controls>
          <source src={song} type="audio/mpeg"/>
        </audio>
        <br/>
        Id:
        <input id="idInput" type="text"/><br/>
        Name:
        <input id="nameInput" type="text"/><br/>
        Age:
        <input id="ageInput" type="text"/><br/>
        Breed:
        <input id="breedInput" type="text"/><br/>
        <input type="button" id="addDog" value="Add dog" onClick={this.addDogBtn.bind(this)}/><br/>
        <input type="button" id="getDog" value="Get Dog"/><br/>
        <input type="button" id="updateDog" value="Edit Dog"/><br/>
        <input type="button" id="deleteDog" value="Delete Dog"/><br/>
        <input type="button" id="allDogs" value="All Dogs"/><br/>
        
        <div id="dogContainer">
          {
              this.state.stateText.map((dog) => (
                <p key = {dog.id}>Name: {dog.name} Age: {dog.age} Breed: {dog.species}</p>
              ))
          }
        </div>

      </div>
    );
  }
}

export default App;
