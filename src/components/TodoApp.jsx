
import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [count, setcount] = useState(1)



  // const memoizedTodos = useMemo(() => {
  //   console.log('Memoizing todos...');
  //   return todos;
  // }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

 const Increase = ()=>{
  setcount(count+1);
}

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  return (
    <div>
      <h1>Todo App</h1>

   <h1>{count}</h1>
<button onClick={Increase}>Increase</button>

      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Add a new todo" 
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => handleToggleComplete(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
