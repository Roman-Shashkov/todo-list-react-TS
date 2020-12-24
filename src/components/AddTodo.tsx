import React, {useState} from 'react'

interface AddTodoProps {
    onAdd: (value: string) => void
}

const AddTodo: React.FC<AddTodoProps> = ({onAdd}): JSX.Element => {
    const [value, setValue] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent): void => { 
        if(event.key === 'Enter' && value.trim().length) {
            onAdd(value);
            setValue('')
        }
    }

    return (
        <div className = 'input-field mt' >
            <input 
                type='text'
                value={value}
                id='title'
                className='active'
                onChange={handleChange}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor='title'>Write Todo</label>
        </div>
    )
} 

export default AddTodo