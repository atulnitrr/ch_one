import React, { Fragment } from 'react';
import './App.css';
import Person from "./component/Person"

function App() {
  return (
    <Fragment className="App">
      
      <div className="person">
        <h1>Atul kumar</h1>
        <p>My age : 29</p>
      </div>

      <Person name="amit" age="49"/>
    </Fragment>
  );
}

export default App;
