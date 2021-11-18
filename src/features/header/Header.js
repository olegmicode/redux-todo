import { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextField from '@mui/material/TextField'

const Header = () => {
  const[text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChagne = e => setText(e.target.value)

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()

    if (e.key === 'Enter' && trimmedText) {
      dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      setText('')
    }
  }
  
  return (
    <div>
      <TextField
        placeholder="What needs to be done?"
        variant="outlined"
        size="small"
        autoFocus={true}
        value={text}
        onChange={handleChagne}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Header