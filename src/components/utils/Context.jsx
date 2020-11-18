import { createContext } from 'react'

const Context = createContext({
    users: {
        email: 'admin@gmail.com',
        password: 'admin',
    },
})

export default Context
