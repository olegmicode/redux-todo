import { useSelector, useDispatch } from 'react-redux'
// import { availableColors, capitalize } from '../filters/colors'
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const selectTodoById = (state, todoId) => {
  return state.todos.find(todo => todo.id === todoId)
}

const TodoListItem = ({ id }) => {
  const todo = useSelector(state => selectTodoById(state, id))
  const { text, completed, color } = todo

  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id })
  }

  const StatusIcon = () => {
    if (completed)
      return <CheckIcon color="success" onClick={handleCompletedChanged} />
    return <RadioButtonUncheckedIcon onClick={handleCompletedChanged} />
  }

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemIcon>
        <StatusIcon />
      </ListItemIcon>
      <ListItemText
        primary={text}
      />
    </ListItem>
  )
}

export default TodoListItem