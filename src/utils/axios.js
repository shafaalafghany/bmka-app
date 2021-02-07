import axios from 'axios'

const instance  = axios.create({
    baseURL: 'https://salmanhack.sanbersy.com/busaktivis/api/'
})

instance.defaults.timeout = 20000

instance.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer NzI.izPKJb_amykXlvunS7uuHVQGFnHGdOTgxcPVe3s5T7qigc7ZCU2Vwt4UVYrC'
    return config
})

export default instance