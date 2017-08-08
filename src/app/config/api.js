import axios from 'axios'
import {API_BASE_URL} from '../constants/api'

/**
 * Api communication instance
 */
export default axios.create({
  baseURL: API_BASE_URL,
  timeout: 3600000
});