import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home';
import NonePage from './components/none';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NonePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App