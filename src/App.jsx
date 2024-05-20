import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





// Import views using lazy loading
const Welcome = lazy(() => import('./views/auths/Welcome'));
const ForgotPassword = lazy(() => import('./views/auths/ForgotPassword'));
const Register = lazy(() => import('./views/auths/Register'));
const Login = lazy(() => import('./views/auths/Login')); 
const LandingPage = lazy(() => import('./views/navigations/LandingPage')); 
const Settings = lazy(() => import('./views/profile/Settings/Settings'));
const ProfileSettings = lazy(() => import('./views/profile/profileSettings/ProfileSettings'));
const ProfileResets = lazy(() => import('./views/profile/profileSettings/ProfileResets'));
const PrivateAvatar = lazy(() => import('./views/privateavatar/PrivateAvatar'));

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><Welcome /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><Register /></Suspense>} />
        <Route path='/login' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><Login /></Suspense>} />
        <Route path='/forgot-password' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><ForgotPassword /></Suspense>} />
        <Route path='/home' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><LandingPage /></Suspense>} />
        <Route path='/settings' element={<Suspense fallback={<div className="flex items-center justify-center h-[100nivh]">Loading...</div>}><Settings /></Suspense>} />
        <Route path='/profile-settings' element={<Suspense fallback={<div className="flex items-center justify-center h-[100nivh]">Loading...</div>}><ProfileSettings /></Suspense>} />
        <Route path='/edit-profile' element={<Suspense fallback={<div className="flex items-center justify-center h-[100nivh]">Loading...</div>}><ProfileResets /></Suspense>} />
        <Route path='/private-avatar' element={<Suspense fallback={<div className="flex items-center justify-center h-[100nivh]">Loading...</div>}><PrivateAvatar /></Suspense>} />
      </Routes>
    </Router>
  )
}

export default App
