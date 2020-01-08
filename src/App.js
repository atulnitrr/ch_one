import React, {  Component } from 'react';
import './App.css';
import Person from "./Component/Person"

class App extends Component {

  state = {
    persons: [
      {name: 'max', age: 28},
      {name: 'manu', age: 29},
      {name: 'atul', age: 27}
    ], 
    otherState: "Other state"
  }

   swithcNameHandler = () => {
    this.setState({persons: [
      {name: 'Rohan', age: 28},
      {name: 'Baze', age: 29},
      {name: 'Rahul', age: 27}
    ]})
  
  }

  render() {
    return (
    <div className="App">    
      <button onClick={this.swithcNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobby : Cricket </Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    // React.createElement('div', null, React.createElement('h1', null, 'This works now'))
  );
}
}

export default App;
