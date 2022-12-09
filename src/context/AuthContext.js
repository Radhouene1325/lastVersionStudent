import React, { createContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { cache, show } from '../features/authentification/authSlice';

import AuthService from "../services/AuthService";


export const AuthContext = createContext();

//Without this AuthProvider component, whenever I refresh, it'll directly go to PrivateRoute and Navbar with isAuth == false

export default function AuthProvider({ children }) {
    const dispatch = useDispatch()
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        AuthService.isAuthenticated().then((jsonData) => {
            console.log("...isAuthenticated() function...", jsonData)
            setIsAuth(jsonData.isAuthenticated);
           
            setUser(jsonData.user);
            setIsLoaded(true)

        })
    }, [])
    console.log(isAuth)
    console.log(user)

    

/******************************* */
    useEffect(() => {
     
        switch (isAuth===false||isAuth===true) {
            case isAuth === true:
                dispatch(cache())
                break;
            case isAuth === false:
                dispatch(show())
                break;

            default:
        }
    }, [isAuth,dispatch])
    /************************ */

    return (
        <React.Fragment>
            {
                isLoaded ?
                    (<AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
                        {children}
                    </AuthContext.Provider>) :
                    (<div className="text-center">Loading...</div>)
            }
        </React.Fragment>
    )
}