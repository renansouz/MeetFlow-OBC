import {createContext, useState } from "react";
 

export type headerAppearenceType = 'default'|'mobile'

type headerStateContext = {
    menuAppearence: headerAppearenceType
    setmenuAppearence: (value:headerAppearenceType) => void
}

const defaultValue: headerStateContext = {
    menuAppearence:'default',
    setmenuAppearence: () => null
}

export const headerContext = createContext(defaultValue);

type headerProviderProps = {
    children:React.ReactNode
}

export const headerProvider = ({children} : headerProviderProps) => {

    const[menuAppearence,setMenuAppearence] = useState(value);

    const value = {
        menuAppearence,
        setMenuAppearence: (appearence:headerAppearenceType) => null
    }


    return(
        <headerContext.Provider value={value}>
            {children}
        </headerContext.Provider>
    )

}