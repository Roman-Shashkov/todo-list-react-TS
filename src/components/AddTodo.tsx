import React, {useState} from 'react'
import { PropsAddTodo } from '../interfaces'

export const AddTodo: React.FC <PropsAddTodo> = ({onAdd}) => {
    const [title, setTitle] = useState<string>('')

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter' && title.length !== 0) {
            onAdd(title);
            setTitle('')
        }
    }

    return (
        <div className = 'input-field mt' >
            <input 
                type='text'
                value={title}
                id='title'
                className='active'
                onChange={changeInput}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor='title'>Write Todo</label>
        </div>
    )
} 