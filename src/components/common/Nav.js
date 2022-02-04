import { Link } from 'react-router-dom'
import React from 'react'

function Nav() {
  const [keyword, setKeyword] = React.useState('')
  const handleSearch = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <>
      <nav>
        <div className='primary-nav'>
          <div>
            <Link to="/"><img 
              src='https://i.imgur.com/n5pqkHS.png'
              alt='logo'
              id='logo'
            /></Link>
          </div>
          <Link to="/jobs" className='nav'>
            Find Jobs
          </Link>
          <div className='nav'>
            Company Reviews
          </div>
          <div className='nav'>
            Explore Salaries
          </div>
          <div className='nav'>
              Upload CV
          </div>
          <Link to="/login">Sign in</Link>
          <div className='nav'>
              Employers/Post Job
          </div>
        </div>
      </nav>
      <div className='search-box'>
        What
        <input 
          placeholder='Job Title or Company' 
          type='text'
          id='input-search'
          onChange={handleSearch}
          value={keyword}
        />
      </div>
      <div className='search-box-right'>
        Where 
        <input 
          placeholder='Location, Postcode' 
          type='text'
          id='input-search'
          onChange={handleSearch}
          value={keyword}
        />
      </div>
      <button className='search-button'>
        Find Jobs
      </button>
    </>
  )
}

export default Nav