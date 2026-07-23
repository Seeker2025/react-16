import css from './ToDoItem.module.css';

export const ToDoItem = ({todoItem, toDelete}) =>{
    return (
        <>
            <div className={css.line}>
                <h3>{todoItem.title}</h3> 
                <p>{`${todoItem.completed}`}</p>

                <button
                type = "button"
                onClick = {()=>toDelete(todoItem.id)}
                >
                    X
                </button>
            </div>
        </>
    )
}