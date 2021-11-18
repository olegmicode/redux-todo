import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem.js'
import List from '@mui/material/List'

const selectTodoIds = state => state.todos.map(todo => todo.id)

const TodoList = () => {
  const todoIds = useSelector(selectTodoIds, shallowEqual)

  const renderedListItems = todoIds.map(todoId => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return (
    <List>
      {renderedListItems}
    </List>
  )
}

export default TodoList