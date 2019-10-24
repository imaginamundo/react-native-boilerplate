import React, { useState } from 'react';

const GlobalContext = React.createContext([
    {}, () => {}
]);

const GlobalContextProvider = ({ children }) => {
    const [ state, setState ] = useState({});
    return (
        <GlobalContext.Provider value={[ state, setState ]}>
            { children }
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalContextProvider };