import React from 'react'

import { dbGET } from '../api'

const App = () => {
    dbGET.get('/songs')
    .then(response => {
        console.log(response)
    })
    return <div>App</div>
}

export default App