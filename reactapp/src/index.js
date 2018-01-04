import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './Button/Button'
import registerServiceWorker from './registerServiceWorker';

//Place both components inside a div
//A property is also being passed down to App component
let page = (
  <div>
    <App exampleProp="Hello there my friends"/>  
    <Button/>
  </div>
);

//Render both components at once
ReactDOM.render(page, document.getElementById("root"));
registerServiceWorker();
