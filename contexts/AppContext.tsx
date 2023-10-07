import React, {createContext, useState} from 'react'
import {Text} from 'react-native'

export const AppContext = createContext({})

function AppProvider({children}){
    return (
        <AppContext.Provider value={{nome: 'Sla'}}>
            <Text>{children}</Text>
        </AppContext.Provider>
    )
}

export default AppProvider