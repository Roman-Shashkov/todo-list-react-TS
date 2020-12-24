import React from 'react'
import cn from 'classnames'


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
        return (
            <button 
                type='button'
                className={ cn('waves-effect waves-light btn', {'orange darken-1' : isActive })}
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