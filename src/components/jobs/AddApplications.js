import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import { headers }  from '../../lib/api'

function AddApplication ({ setJob }) {

  const [application, setApplication] = React.useState({
    name: '',
    contact_email: '',
    created_at: '',
    job: '',
    owner: '',

  })
  const [refresh, setRefresh] = React.useState()

  const { jobId } = useParams()


  if (refresh) {
    setRefresh(false)
  }

  const handleApplicationInput = (e) => {
    setApplication({ ...application, text: e.target.value })
  }
  
  const handleSubmitApplication = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`/api/jobs/${jobId}/applications/`, application, headers())
      setJob(res.data)
      setApplication({ text: '' })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  // CREATE A FORM MATCHING THE BACK END DATA REQUIREMENTS FOR A APPLICATION BEFORE TRYING TO PULL DATA
  
  return (
    <section>
      <div className='show-card'>
        <div>
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <div>
              <input 
                className='input'
                name="username"
                id="username"
                placeholder="username"
                onChange={handleApplicationInput}
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <div>
              <input 
                className='input'
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={handleSubmitApplication}
              />
            </div>
          </div>
          <div>
            <div className='button-div'
              htmlFor="button">
              <button 
                id="button"
                className='button'
                type="submit"
              >Submit Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default AddApplication