import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleJob } from '../../lib/api'


function JobShow() {
  const { jobId } = useParams()
  const [job, setJob] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleJob(jobId)
        setJob(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [jobId])

  console.log(job)
  return (
    <>
      <h1>
      Hello Single Job {job.position}
      </h1>
    </>
  )
}

export default JobShow