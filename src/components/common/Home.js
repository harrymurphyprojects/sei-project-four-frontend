import { useLocation } from 'react-router-dom'
import React from 'react'
import { getAllJobs } from '../../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'
import JobCard from '../jobs/JobCard'
// import JobShow from '../jobs/JobShow'


function Home() {
  const [jobs, setJobs] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !jobs && !isError
  useLocation()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllJobs()
        setJobs(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  return (
    <section className="home-page">
      <div>
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
      {/* <div className='show-card'>
        <JobShow/>
      </div> */}
    </section>
  )
}

export default Home