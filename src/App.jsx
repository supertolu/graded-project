import { BrowserRouter,Routes, Route,} from 'react-router'
import HomePage from './pages/Home'
import UserInfoPage from './pages/UserInfoPage'
import UserListPage from './pages/UserListPage'
import NavBar from './components/NavBar'


import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>

  

  {/*
      Creating 3 routes for the app 
      * a- Home Page
      *b-User Info Page -/userinfo
      *c-user List Page - /userList
      */}

      <Route path="/"  element={<HomePage />} />
      <Route path="/userinfo" element={<UserInfoPage />} />
      <Route path="/userList" element={<UserListPage />} />


    </Routes>
    </BrowserRouter>

  )
}

export default App
