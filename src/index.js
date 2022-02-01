import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  {id: "task-0", name: "Breathe", completed: true},
  {id: "task-1", name: "Eat", completed: false},
  {id: "task-2", name: "Sleep", completed: false},
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);