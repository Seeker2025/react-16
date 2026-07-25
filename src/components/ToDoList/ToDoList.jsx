import React, { Component } from 'react';
import todo from '../../todo.json';
import css from './ToDoList.module.css';
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
                todoList: prevState.todoList.map((todo)=>{
                    console.log(todo);
                return todo.id === id
                ?{...todo, completed: !todo.completed}
                :todo    
                    
                })
            }
        })
    }

    

    render(){
        return(
            <div>
                <h1>My To Do List</h1>
                    <ul className={css.parLine}>

            {
                this.state.toDoList.map(itm=>{
                    return <li key ={nanoid()}>
                        
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