import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/use-redux'
import { createTodo, deleteTodo, toggleTodo } from './store/slices/todos'
import Users from './components/Users'
import Posts from './components/Posts'

const App = () => {
  const [value, setValue] = useState('')
  const todos = useAppSelector((state) => state.todos)
  const dispatch = useAppDispatch()

  function createFn() {
    dispatch(createTodo({ id: Date.now(), text: value, completed: false }))
  }

  function deleteFn(todoId: number) {
    dispatch(deleteTodo(todoId))
  }

  function toggleFn(todoId: number) {
    dispatch(toggleTodo(todoId))
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={createFn}>create</button>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : '' }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteFn(todo.id)}>delete</button>
            <button onClick={() => toggleFn(todo.id)}>toggle</button>
          </li>
        ))}
      </ul>

      {/* <Users /> */}
      <Posts />
    </div>
  )
}

export default App
