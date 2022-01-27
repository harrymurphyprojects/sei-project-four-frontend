import React from 'react'
import { getAllJobs } from '../../lib/api'


function JobIndex() {
  const [jobs, setJobs] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllJobs()
        setJobs(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <div> Hello Testing
      <div className='mapping'>
        {jobs.map(job => (
          <div key={job.id}>
            {job.position}
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobIndex