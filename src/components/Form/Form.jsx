// import { ToDoList } from 'components/ToDoList/ToDoList';
import { Component } from 'react';

export class Form extends Component {
    state ={
        todo: '',
    };

    handleChange =({ target })=>{
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.addToDo(this.state.todo);

        this.setState({
            todo: '',
        })
    }

        render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label htmlFor ="exampleInputEmail">
                        Create to-do Form
                    </label>

                    <input
                        name = "todo"
                        type="text"
                        id="exampleInputEmail"
                        value = {this.state.todo}
                        onChange = {this.handleChange}
                    />

                </div>
                {console.log(!!this.state.todo)}
                
                    <button
                        type="submit"
                        disabled={!this.state.todo}
                    >
                        Add to-do
                    </button>

                
               

            </form>
        )
    }
}