
function ToDo({todo, toDoIndex, delTodo})
{
    return(
        <div className="todo">
          <p>{todo}</p>
          <div className='actions'>
            <input type='checkbox'></input>
            <button onClick={() => delTodo(toDoIndex)}>Delete</button>
          </div>
        </div>
    );
}

export default ToDo;