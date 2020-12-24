import React, {useState} from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ItemFilter from './components/ItemFilter'
import { ITodo } from './interfaces';



const App: React.FC = (): JSX.Element => {

  const [todos, setTodos] = useState <ITodo[]>([])
  const [filterItem, setFilterItem] = useState<string> ('all')

  const getNewTodo = (value: string): ITodo=> ({
      value,
      completed: false,
      id: Date.now(),
    }
  )


  const addTodo = (value: string) => {
    const newTodo = getNewTodo (value)
    setTodos([...todos , newTodo])
  }

  const toggleHandler = (id: number) => () => {
    const newTodos: ITodo[] = todos.map((todo: ITodo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodos)
  } 

  const removeHandler = (id: number) => () => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const onFilterChange = (name: string) => {
    setFilterItem(name)
  }

  const filter = () => {
    switch (filterItem) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((item) => !item.completed);
      case 'done':
        return todos.filter((item) => item.completed);
      default:
        return todos;
    }
  }

  const visibleItems = filter()

  return (
    <div>
      <h3 className ='header-logo card-panel teal lighten-2'>Todo List</h3>
      <ItemFilter
        filter = {filterItem}
        onFilterChange={onFilterChange}/>
      <AddTodo onAdd = {addTodo}/>
      <TodoList 
        todos= {visibleItems}
        onToggle = {toggleHandler}
        onRemove = {removeHandler}
      />
    </div>
  );
}

export default App;
