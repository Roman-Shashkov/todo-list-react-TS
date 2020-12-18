import React, {useState} from 'react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { Todo } from './interfaces';


const App: React.FC = () => {

  const [todos, setTodos] = useState <Todo[]>([])

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      title: title,
      completed: false,
      id: Date.now()
    }
    setTodos([...todos, newTodo]);
  }

  const toggleHandler = (id: number) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    setTodos (todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h3 className ='header-logo card-panel teal lighten-2'>Todo List</h3>
      <AddTodo onAdd = {addTodo}/>
      <TodoList 
        todos={todos}
        onToggle = {toggleHandler}
        onRemove = {removeHandler}
      />
    </div>
  );
}

export default App;
