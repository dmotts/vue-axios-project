import axios from 'axios'
import serverUrl from '../../server-url'

const instance = axios.create({
    baseURL: serverUrl
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance