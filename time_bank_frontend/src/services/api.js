import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.43.115:1337',
})

export const apiDATE = axios.create({
  baseURL: 'http://worldtimeapi.org/api/timezone/America/Sao_Paulo',
})

// export default api;
