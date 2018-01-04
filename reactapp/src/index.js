import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './Button/Button'
import registerServiceWorker from './registerServiceWorker';

let page = (
  <div>
    <App exampleProp="Hello there my friends"/>
    <Button/>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
registerServiceWorker();
