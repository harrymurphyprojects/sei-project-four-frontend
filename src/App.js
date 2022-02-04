import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Nav'
import JobIndex from './components/jobs/JobIndex'
import JobShow from './components/jobs/JobShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path = '/register' element = {<Register />} />
        <Route path = '/login' element = {<Login />} />
        <Route path="/jobs" element={<JobIndex />} />
        <Route path="/jobs/:jobId" element={<JobShow />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App