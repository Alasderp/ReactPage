import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App exampleProp="Hello there my friends"/>, document.getElementById("root"));
registerServiceWorker();
