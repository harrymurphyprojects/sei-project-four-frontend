import { Link } from 'react-router-dom'

function JobCard({ 
  position,
  company, 
  location, 
  salary, 
  jobId,
}) {

  return (
    <div className='card'>
      <Link to={`/jobs/${jobId}`}>
        <p className='card-header'>{position}</p>
        <p className='card-body'>{company}<br />{location}</p>
        <p className='card-salary'>£{salary}</p>
      </Link>
    </div>
  )
}

export default JobCard