import logo from './logo.svg';
import './App.css';
import InputContainer from './components/InputContainer';
import ToDoContainer from './components/ToDoContainer';
import { useState } from 'react';
function App() {

const [inputVal, setInputValue] = useState('');

const [todo, addToDos] = useState([]);

function writeToDo(e){
  setInputValue(e.target.value);
}

function addToDo(){
  if(inputVal!='')
  {
    addToDos((prevToDos) => [...prevToDos, inputVal]);
    setInputValue('');
  }
}r

function delTodo(toDoIndex)
{
  addToDos((prevToDo) => prevToDo.filter((prevToDos, prevToDoIndex) => {
  return prevToDoIndex!= toDoIndex
}));
}

  return (
    <main>
      <h1>My To Do App</h1>
      <InputContainer inputValue={inputVal} writeToDo={writeToDo} todos={addToDo}/>
      <ToDoContainer todos={todo} delTodo={delTodo}/>
    </main>
   );
}

export default App;
