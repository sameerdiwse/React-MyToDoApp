import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>My To Do App</h1>

      <div className="input-container">
        <input type="text"></input>
        <button>+</button>
      </div>

      <div className="container">
        <div className="todo">
          <p>Build React App!</p>
          <div className='actions'>
            <input type='checkbox'></input>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </main>
   );
}

export default App;
