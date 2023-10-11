'use client'

import { Todo } from "@prisma/client"
import React, { useTransition } from "react"
import { completeTodo } from "@/utils/actions"

interface Props {
  todo: Todo
}

const TodoItem: React.FC<Props> = (props) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        props.todo.completed ? 'line-through text-gray-500': ''
      }`}
      onClick={() => startTransition(() => completeTodo(props.todo.id))}
    >
      {props.todo.content}
    </div>
  )
}

export default TodoItem
