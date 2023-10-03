import { createTodo } from "@/utils/actions"

const NewTodoForm = () => {
  return (
    <div>
      <form action={createTodo}>
        <input type="text" name="content" className="border border-black/25"/>
        <button type="submit">Create Todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm
