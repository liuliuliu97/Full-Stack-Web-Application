import react from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterandLogout() {
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* protected: you cannot access the home page without logging in (hava access token and it is valid) */}
        <Route path="/" element={<ProtectedRoute> <Home /></ProtectedRoute> } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterandLogout />} />
        {/* anything else: go to 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
