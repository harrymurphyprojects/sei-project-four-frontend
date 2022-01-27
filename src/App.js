// import React from 'react'
// import axios from 'axios'

// function App() {
//   const [job, setJob] = React.useState([])
//   React.useEffect(() => {
//     const getData = async () => {
//       const res = await axios.get('/api/jobs')
//       setJob(res.data)
//     }
//     getData()
//   }, [])

//   return (
//     <div>
//       {job.map(job => (
//         <div key={job.id}>
//           {job.position}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import JobIndex from './components/jobs/JobIndex'
import JobShow from './components/jobs/JobShow'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/jobs" element={<JobIndex />} />
        <Route path="/jobs/:jobId" element={<JobShow />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App