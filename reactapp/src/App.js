import React, { Component } from 'react';
import logo from './logo.png';
import song from './National Anthem of USSR.mp3'
import './App.css';
import $ from 'jquery'; 

class App extends Component {

  constructor() {
    super();

    this.state = {
      stateText:[]
    }

  }

  allDogs(){

    let dogArray = [];

    let url = this.props.baseURL + "api/dog";

    $.getJSON(url,   
        
        function(jsonData){
            //Loop through json data returned by server
            for(let x in jsonData){
                    dogArray.push(jsonData[x]);
            }
        this.setState({stateText: dogArray})
        }.bind(this)
    );
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
      
    let url = this.props.baseURL + "api/dog/add";

    $.post(url,payload,this.allDogs());

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
        <input type="button" id="allDogs" onClick={this.allDogs.bind(this)} value="All Dogs"/><br/>
        
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
