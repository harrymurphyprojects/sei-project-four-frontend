import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleJob } from '../../lib/api'
import AddApplications from './AddApplications'  


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
      <div className='show-card'>
        <h2 className='card-header'>Job Show Page</h2> <br />
        <div className='card-header'>{job.position}</div><br />
        <div className='card-body'>{job.company}<br />
          {job.company_image}<br />
          {job.location}<br />
          £{job.salary}<br />
          {job.reference_number}<br />
          {job.description}<br />
          {job.date_posted}<br />
        </div>
      </div>
      <div className='applications'>
        <h3>Apply Now!</h3>
        <AddApplications 
          name = {name}
          contact_email = {setJob}
        />
      </div>
    </>
  )
}

export default JobShow