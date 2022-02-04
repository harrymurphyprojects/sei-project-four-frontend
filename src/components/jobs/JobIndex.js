import React from 'react'
import { getAllJobs } from '../../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'
import JobCard from '../jobs/JobCard'

function JobIndex() {
  const [jobs, setJobs] = React.useState([])
  const [isError] = React.useState(false)
  const isLoading = !jobs && !isError

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
    <div className='home-page'>
      {isError && <Error />}
      {isLoading && <Loading />}
      {jobs &&
          jobs.map(job => (
            <JobCard 
              key={job.id}
              position={job.position}
              company={job.company}
              location={job.location}
              salary={job.salary}
              date_posted={job.date_posted}
              jobId={job.id}
            />
          ))}
    </div>
  )
}

export default JobIndex