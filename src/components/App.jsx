import React, { Component } from "react";
import { Modalka } from './Modalka/Modalka';
import { ToDoList } from "./ToDoList/ToDoList";

export class App extends Component{
  state ={
    isVisible: false,
  };

  toShow = () =>{
    this.setState({
      isVisible: true,
    })
  }

  toClose = () =>{
    this.setState({
      isVisible: false,
    })
  }

  

  render(){
    return(
      <div>
        <p>This is App</p>

        <button 
          type="button"
          onClick = {this.toShow}
        >
          Open My Modal
        </button>

        {
          this.state.isVisible &&  <Modalka toClose = {this.toClose}/>
        }

        <ToDoList/>
       
      </div>
    )
  }

}

   
  

