import React, { Component } from 'react';
import todo from '../../todo.json';
import css from './ToDoList.module.css';

import { ToDoItem } from 'components/ToDoItem/ToDoItem';

export class ToDoList extends Component{
    state = {
       toDoList: todo,
    };

    render(){
        return(
            <div>
                <h1>My To Do List</h1>
                    <ul className={css.parLine}>

                {
                    this.state.toDoList.map(itm=>{
                        return <li >
                            
                                <ToDoItem todoItem ={itm}/>
                                                        
                                </li>
                    })
                }

                    </ul>

            </div>
        )
    }
}