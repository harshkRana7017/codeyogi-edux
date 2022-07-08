import { Link, Route, Routes } from "react-router-dom"
import TodoPage from "./components/TodoPage"
import UsersPage from "./components/UsersPage"



function App() {

  
  return (
    <div>
      <div className="flex space-x-2">
        <Link to="/">Todos</Link>
        <Link to="/users"> Users</Link>

      </div>

    <Routes>
      <Route index element={<TodoPage/>}/>
      <Route path="/users" element={<UsersPage/>}/>
    </Routes>
    </div>
    
  )
}

export default App
