import React from "react"

const DashboardLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
