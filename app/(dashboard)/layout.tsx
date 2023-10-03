import React from "react"
import NewTodoForm from "@/components/NewTodoForm"

const DashboardLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <NewTodoForm/>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
