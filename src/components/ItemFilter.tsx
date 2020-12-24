import React from 'react'

interface ItemFilterProps {
    filter: string
    onFilterChange (name: string) : void
}

const ItemFilter: React.FC<ItemFilterProps> = ({onFilterChange, filter}): JSX.Element => {

   const buttonsArr = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'active'},
        {name: 'done', label: 'done'},
    ]

    const buttons = buttonsArr.map (({name, label}) => {
        const isActive = filter === name
        const isClass = isActive ? 'orange darken-1' : ''
        return (
            <button 
                type='button'
                className = {`waves-effect waves-light btn ${isClass}`}
                key = {name}
                onClick = {() => onFilterChange(name)}
            >
              {label}
            </button>    
        )
    })

    return (
        <div>
            {buttons}
        </div>
    )
   
}
export default ItemFilter