import React, { useReducer, createContext } from 'react';
import defaultContext from "./defaultContext";

const AppContext = createContext({});

let reducer = (state: any, action: any): any => {
    switch (action.type) {
        case "reset":
            return defaultContext;
        case "setLocale":
            return { ...state, locale: action.locale };
    }
};

const AppContextProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(reducer, defaultContext);
    const value = { state, dispatch };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };