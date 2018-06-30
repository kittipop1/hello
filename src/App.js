import React, { Component } from 'react';
import SayHello from './components/SayHello';
import './App.css';
import Border from './components/Border';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Kittipop Thongprapai",
      age: 22
    };
  }
  incrementAge(){
    this.setState({age: this.state.age + 10});
  }
  decrementAge(){
    this.setState({age: this.state.age - 10});
  }
    render() {
      return (
        <div className="App">
        <SayHello name={this.state.name} />
          <p>Hello, {this.state.name}</p>
          <p>age, {this.state.age}</p>

          <div
         style={{
           width: this.state.age,
           border: 2,
           borderStyle: "solid",
           color: "#deab53"
         }}
       />
       <Border>
          <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>
          <button onClick={() => this.decrementAge()}>ลบอายุ</button>
          </Border>
        </div>
      );
    }
    
  }
   

export default App;
