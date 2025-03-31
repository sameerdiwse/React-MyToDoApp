import React from "react";
import ToDo from "./ToDo";

function ToDoContainer({todos, delTodo})
{
    return (
        <div className="container">
        {todos.map((todo, toDoIndex) => {
        return(
            <ToDo todo={todo} toDoIndex={toDoIndex} delTodo={delTodo}/>
        )
        })}
      </div>
    )
}

export default ToDoContainer;