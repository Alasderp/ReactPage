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
    };

  }

  validateTextBoxes(){

      let id = document.getElementById("idInput").value;
      let name = document.getElementById("nameInput").value;
      let age = document.getElementById("ageInput").value;
      let breed = document.getElementById("breedInput").value;

      if(id.trim() === "" || id.trim() === "" || id.trim() === "" || id.trim() === ""){
        alert("All fields must have entries");
        return false;
      }

      return true;

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

    //If textboxes have been validated successfuly
    if(this.validateTextBoxes()){
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

      $.post(url,payload);
    }

    }

    deleteDog(){

      let id = $("#idInput").val();
      let url = this.props.baseURL + "api/dog/delete/" + id;
      {/*
      var settings={type:"DELETE"};        
	    $.ajax(
        url,
        settings,
      );
      */}
      if(id.trim() === ""){
        alert("ID field requires an entry");
      }
      else{
        let fetchData = {
          method: 'DELETE'
        };

        fetch(url, fetchData);
      }

  }

  editDog(){

    if(this.validateTextBoxes()){
      let id = $("#idInput").val();
      let url = this.props.baseURL + "api/updateDog/" + id;

      let name = $("#nameInput").val();
      let age = $("#ageInput").val();
      let breed = $("#breedInput").val();

      let payload = JSON.stringify({
        "name":name,
        "age":age,
        "species":breed
      });

      let fetchData = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: payload
      };
      fetch(url, fetchData).then((response)=>{
        this.allDogs();
      });

    }
      
  }

  getOneDog(){

      let id = $("#idInput").val();
      let url = this.props.baseURL + "api/dog/" + id;

      //Check if id field has an entry
      if(id.trim() === ""){
        alert("ID field requires an entry");
      }
      else{
        fetch(url)
        .then(function(response){
            //If a 2xx response is received return the response as JSON
            if(response.ok){  
              return response.json();  
            }
            //Throw an error otherwise and jump to the catch statement
            throw Error(response.statusText);
        })
        .then(function(response){
          //Do stuff with the JSON
          alert("Name: " + response.name + " Age: " + response.age + " Breed: " + response.species);
        })
        .catch(function(error){
          console.log("Request Failed: " + error.message);
        });
      }
  
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
        <input type="button" id="getDog" value="Get Dog" onClick={this.getOneDog.bind(this)}/><br/>
        <input type="button" id="updateDog" value="Edit Dog" onClick={this.editDog.bind(this)}/><br/>
        <input type="button" id="deleteDog" value="Delete Dog" onClick={this.deleteDog.bind(this)}/><br/>
        <input type="button" id="allDogs" value="All Dogs" onClick={this.allDogs.bind(this)}/><br/>
        
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
