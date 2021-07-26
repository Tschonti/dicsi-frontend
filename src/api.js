import axios from 'axios'
//import key from './config'

export const dbGET = axios.create({
    baseURL: 'https://dicsi-api.herokuapp.com/',
    //headers: { 'key': key }
})

export const dbNotGET = axios.create({
    baseURL: 'https://dicsi-api.herokuapp.com/'
})