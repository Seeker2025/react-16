import React, { Component } from "react";
import { Modalka } from './Modalka/Modalka';


export class App extends Component {

      state = {
        isShowModal: false,
      }

     showModal = () => {
        this.setState({
          isShowModal: true,
        })
      }

      hideModal = () => {
        this.setState({ isShowModal: false })
    }
   
        render(){
          return (
        <div>
            This is App react-16
            
            <button type="button"
            onClick={this.showModal}
            >
              Открыть Модалку
            </button>

  { 
  this.state.isShowModal && <Modalka onClose={this.hideModal}/>
  }
            
        </div>
          )
        }
   
  
};
