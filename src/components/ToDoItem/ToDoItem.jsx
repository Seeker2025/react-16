import css from './ToDoItem.module.css';

export const ToDoItem = ({todoItem}) =>{
    return (
        <>
             <div className={css.line}>
                <h3>{todoItem.title}</h3> 
                <p>{`${todoItem.completed}`}</p>
           </div>
        </>
    )
}