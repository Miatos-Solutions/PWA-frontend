import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




// Import views using lazy loading
const Welcome = lazy(() => import('./views/auths/Welcome'));
const ForgotPassword = lazy(() => import('./views/auths/ForgotPassword'));
const Register = lazy(() => import('./views/auths/Register'));
const Login = lazy(() => import('./views/auths/Login')); 
const LandingPage = lazy(() => import('./views/navigations/LandingPage')); 

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><Welcome /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><Register /></Suspense>} />
        <Route path='/login' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><Login /></Suspense>} />
        <Route path='/forgot-password' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><ForgotPassword /></Suspense>} />
        <Route path='/home' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><LandingPage /></Suspense>} />
      </Routes>
    </Router>
  )
}

export default App
