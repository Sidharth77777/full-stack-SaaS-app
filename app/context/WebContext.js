"use client"

import { createContext, useContext } from "react";

const WebContext = createContext(null);

export const WebProvider = ({ children }) => {

    return (
        <WebContext.Provider value={""}>
            {children}
        </WebContext.Provider>
    )
}

export const useWebContext = () => {
    return useContext(WebContext);
}