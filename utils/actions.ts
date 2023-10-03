'use server'
import db from './db'
import { Todo } from "@prisma/client"
import { revalidatePath } from "next/cache"

export const createTodo = async (formData: FormData) => {
  const content = formData.get('content')
  if (!content) return

  const newTodo = await db.todo.create({
    data: {
      content: content.toString()
    }
  })

  // update todos page. this wasn't needed? maybe automatically happens in latest Next.js?
  // revalidatePath('/todos')
}
