import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

const GlobalData = createContext();

const GlobalContextProvider=({children})=> {
    const [token,setToken] = useState(null);
    const [userInfo,setUserInfo] = useState({});

    const LoginByPassword = ( )=>{

    }
    const LoginByTouchID =()=>{

    }
    const Logout = () =>{

    }
    const checkSenSorAvailable =()=>{

    }
    const hasEnrollerFingerprint =()=>{

    }
    const setEnableLoginByFingerprint =()=>{

    }

    return (
        <GlobalData.Provider
            value={{
                token,
                userInfo,
                LoginByPassword,
                LoginByTouchID,
                Logout,
                checkSenSorAvailable,
                hasEnrollerFingerprint,
                setEnableLoginByFingerprint
            }}
        >
            {children}
        </GlobalData.Provider>
    )
}

export {GlobalData, GlobalContextProvider}