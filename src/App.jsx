import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from "./views/home/Home";



// Import views using lazy loading
const Home = lazy(() => import('./views/home/Home'));

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><Home /></Suspense>} />
      </Routes>
    </Router>
  )
}

export default App
