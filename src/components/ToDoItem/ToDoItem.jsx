import css from './ToDoItem.module.css';

export const ToDoItem = ({
    todoItem,
    toDelete,
    handle
                        }) =>{
    return (
        <>
            <div className={css.line}>
                <h3>{todoItem.title}</h3> 
                <p>{`${todoItem.completed}`}</p>

                <div>
                    <input
                    type="checkbox"
                    checked={todoItem.completed}
                    onChange={()=>handle(todoItem.id)}
                    />

                </div>

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