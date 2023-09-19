import { Todo } from "@prisma/client"
import TodoItem from "@/components/TodoItem"
import React from "react"

interface Props {
  todos: Todo[]
}

const TodoList: React.FC<Props> = (props) => {
  return (
    <div>
      {props.todos.map((todo: Todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
