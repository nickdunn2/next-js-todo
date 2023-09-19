import { Todo } from "@prisma/client"
import React from "react"

interface Props {
  todo: Todo
}

const TodoItem: React.FC<Props> = (props) => {
  return (
    <div>
      {props.todo.content}
    </div>
  )
}

export default TodoItem
