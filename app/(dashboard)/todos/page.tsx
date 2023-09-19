import db from '@/utils/db'
import { Todo } from "@prisma/client"
import TodoList from "@/components/TodoList"

const getData = async () => {
  const todos = await db.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  const todos: Todo[] = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
