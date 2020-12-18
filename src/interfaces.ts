export interface Todo {
    title: string
    id: number
    completed: boolean
}

export interface PropsTodoItem {
    todos: Todo[]
    onToggle(id: number): void
    onRemove(id: number): void
}

export interface PropsAddTodo {
    onAdd(title: string): void
}