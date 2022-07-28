import { createContext, useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        if(user) {

            //Recebe o JWT

            setCookie(null, 'user-token', 'token', {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })

            setUser(undefined)
        }
    })

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            { children }
        </AuthContext.Provider>
    )
}

//const cookies = parseCookies()