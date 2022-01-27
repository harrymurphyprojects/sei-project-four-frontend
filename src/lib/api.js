import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export function getAllJobs() {
  return axios.get(`${baseUrl}/api/jobs`)
}

export function getSingleJob(id) {
  return axios.get(`${baseUrl}/api/jobs/${id}`)
}
