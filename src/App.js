import logo from './logo.svg';
import './App.css';
import InputContainer from './components/InputContainer';
import ToDoContainer from './components/ToDoContainer';
function App() {
  return (
    <main>
      <h1>My To Do App</h1>
      <InputContainer/>
      <ToDoContainer/>
    </main>
   );
}

export default App;
