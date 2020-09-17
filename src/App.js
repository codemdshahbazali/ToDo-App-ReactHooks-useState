import React, {useState} from 'react';
import './App.css';

function Todo({ todo, index, completeToDo }) {
  return (
    <div className='todo' style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
      {todo.text}
      <div>
        <button onClick={() => completeToDo(index)}>Complete</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;
    console.log(value);

    addTodo(value);
    setValue('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="inout" value={value} onChange={e => setValue(e.target.value)}/>
      </form>
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React Hooks',
      isComplete: false
    },
    {
      text: 'Learn React COntext APIs',
      isComplete: false
    },
    {
      text: 'Learn React Redux',
      isComplete: false
    }
  ]);

  const addTodo = function(text) {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeToDo = (index) => {
    console.log(index);
    const newTodos = [...todos];
    console.log(newTodos)
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <Todo key={index} index={index} todo={todo} completeToDo={completeToDo}/>
          );
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
