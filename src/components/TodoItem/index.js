// Write your code here
import './index.css'

const TodoItem = props => {
  const {item, deleteItem} = props

  const {id, title} = item

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
