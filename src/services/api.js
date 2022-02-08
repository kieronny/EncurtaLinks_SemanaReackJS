//https://api-ssl.bitly.com/v4/shorten
import axios from 'axios'

export const key = 'your_key'

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    Authorization: `Bearer ${key}`
  }
})

export default api
