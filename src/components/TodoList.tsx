import React from 'react'
import cn from 'classnames'
import { ITodo } from '../interfaces'

interface ITodoListProps {
    todos: ITodo[];
    onToggle: (id: number) => () => void;
    onRemove: (id: number) => () => void;
}

 const TodoList: React.FC <ITodoListProps> = ({todos, onRemove, onToggle}):JSX.Element => {
    const renderContent = () => (   
        <ul>
            {todos.map(todo => (
                <li className={ cn('todo', {'completed' : todo.completed })} key={todo.id}>
                    <label>
                        <input 
                            type='checkbox'
                            checked={todo.completed}
                            onChange={onToggle(todo.id)}
                        />
                        <span>{todo.value}</span>    
                        <i className='material-icons red-text'
                            onClick={onRemove(todo.id)}>delete</i>
                    </label>
                </li>
            ))}
        </ul>
    )
     
    const renderEmptyContent = () => <p className='center'>You Have No Todos</p>

    return (
        <>
            {todos.length ? renderContent() : renderEmptyContent()}
        </>
    )
}

export default TodoList