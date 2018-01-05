import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './Button/Button';
import KeyListener from './KeyPresses/KeyListener'
import registerServiceWorker from './registerServiceWorker';

//Place both components inside a div
//A property is also being passed down to App component
let page = (
  <div>
    <App exampleProp="Hello there my friends" baseURL="http://localhost:3001/"/>  
    <Button/>
    <KeyListener/>
  </div>
);

//Render both components at once
ReactDOM.render(page, document.getElementById("root"));
registerServiceWorker();
