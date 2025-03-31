import React from 'react'

function InputContainer({inputValue, writeToDo, todos})
{
    return (
        <div className="input-container">
        <input type="text" value={inputValue} onChange={writeToDo}></input>
        <button onClick={todos}>+</button>
      </div>
    );
}

export default InputContainer;