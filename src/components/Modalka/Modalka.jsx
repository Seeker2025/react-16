import React, { Component } from "react";

export class Modalka extends Component{

    state={

    }

    render(){
        return (
            <>
            <div> 
               

                <button onClick={this.props.onClose}>X</button>

                <h1>My First Modal</h1>
            </div>
            </>
          
        )
    }
}