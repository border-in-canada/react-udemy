import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    logn: () => {}
});

export default authContext;