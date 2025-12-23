import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import AccountPage from './components/AccountPage'

function App() {

  return (
    <div>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/account' element={<AccountPage/>}/>
     </Routes>
    </div>
  )
}

export default App
