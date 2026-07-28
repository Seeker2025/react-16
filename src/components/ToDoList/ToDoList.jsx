import React, { Component } from 'react';
import todo from '../../todo.json';
import css from './ToDoList.module.css';
import { Form } from '../Form/Form';
import { nanoid } from 'nanoid';

import { ToDoItem } from 'components/ToDoItem/ToDoItem';

export class ToDoList extends Component{
    state = {
       toDoList: todo,
    };

    toDelete = (id) =>{
    this.setState((prevState)=>({
        toDoList: prevState.toDoList.filter((itm)=>itm.id!==id),
    }))
    }

    handleCheck = (id) => {
        this.setState((prevState)=>{
            return {
                toDoList: prevState.toDoList.map((todo)=>{
                    console.log(todo);
                return todo.id === id
                ?{...todo, completed: !todo.completed}
                :todo    
                    
                })
            }
        })
    }


    addToDo = (value) =>{
        this.setState((prev)=>{
            return{
                toDoList: [
                    ...prev.toDoList,
                    { id: nanoid(), title: value, completed: false },
                ],
            }
        })
    }

    

    render(){
        return(
            <div>
                <h1>My To Do List</h1>
                    <ul className={css.parLine}>

            <Form addToDo = {this.addToDo}/>


            {
                this.state.toDoList.map(itm=>{
                    return <li key ={itm.id}>
                        
                            <ToDoItem
                            todoItem = {itm}
                            toDelete = {this.toDelete}
                            handle={this.handleCheck}
                            />
                                                
                            </li>
                })
            }

                    </ul>

            </div>
        )
    }
}