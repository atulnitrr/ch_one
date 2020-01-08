import React, { Fragment } from 'react';
import './App.css';
import Person from "./component/Person"

function App() {
  return (
    <div className="App">    
      <div className="person">
        <h1>Atul kumar</h1>
        <p>My age : 29</p>
      </div>
      <Person name="amit" age="49"/>
    </div>
    // React.createElement('div', null, React.createElement('h1', null, 'This works now'))
  );
}

export default App;
