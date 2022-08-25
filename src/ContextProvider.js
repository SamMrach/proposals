import React,{useState} from 'react';
//import Mycontext from './Mycontext';
import MyButton from './components/MyButton';
import Modal from './components/Modal';
export const Mycontext=React.createContext('default');
const ContextProvider = ({children}) => {
    const [open,setOpen]=useState(false);
    return <>
    <Mycontext.Provider value={{open,setOpen}} >
    {children}
    </Mycontext.Provider>
    </>;
}


export default ContextProvider;