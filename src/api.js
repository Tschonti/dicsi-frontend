import axios from 'axios'
import nokedli from './config'

export const dbGET = axios.create({
    baseURL: 'https://dicsi-db.herokuapp.com',
    headers: { 'key': nokedli }
})

export const dbNotGET = axios.create({
    baseURL: 'https://dicsi-db.herokuapp.com'
})