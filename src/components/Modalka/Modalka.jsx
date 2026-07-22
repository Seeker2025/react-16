import React, { Component } from "react";
import css from './Modalka.module.css'

export class Modalka extends Component{
    state ={

    }

    render(){
        return (
            <div className = {css.modalka}>
            <button
            type = "button"
            onClick = {this.props.toClose} 
            >
                X
            </button>
                <p>My Modalka</p>
            </div>
        )
    }

}