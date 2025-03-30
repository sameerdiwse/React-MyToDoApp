function ToDoContainer()
{
    return (
        <div className="container">
        <div className="todo">
          <p>Build React App!</p>
          <div className='actions'>
            <input type='checkbox'></input>
            <button>Delete</button>
          </div>
        </div>
      </div>
    )
}

export default ToDoContainer;