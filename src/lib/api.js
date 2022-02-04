import axios from 'axios'
import { getToken } from '../lib/auth'

export function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

const baseUrl = 'http://localhost:3000'

export function getAllJobs() {
  return axios.get(`${baseUrl}/api/jobs/`)
}

export function getSingleJob(jobId) {
  return axios.get(`${baseUrl}/api/jobs/${jobId}`)
}

// export function createJob(formData) {
//   return axios.post('/api/jobs/', formData, headers())
// }

// export function deleteJob(jobId) {
//   return axios.delete(`/api/jobs/${jobId}`, headers())
// }

export function register(formData) {
  return axios.post(`${baseUrl}/register/`, formData)
}

export function login(formData) {
  return axios.post(`${baseUrl}/login/`, formData) 
}