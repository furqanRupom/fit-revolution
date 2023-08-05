import {createContext} from 'react'


export const AuthContext  = createContext <{
    authStatus:Boolean,
    setAuthStatus: (status:Boolean) => void;
}>({
    authStatus:false,
    setAuthStatus:() =>{}
});


export const AuthProvider = AuthContext.Provider;
export default AuthContext;