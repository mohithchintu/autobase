import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import GlobalLayout from './layouts/Global'
import Dashboard_component from './pages/Dashboard'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/dashboard' element={<Dashboard_component />} />
        </Routes>
      </GlobalLayout>
    </BrowserRouter>
  )
}

export default App