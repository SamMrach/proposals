import React,{useContext,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { Mycontext } from '../ContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const MyButton = ({toggle,state}) => {
    //const {open,setOpen}=useContext(Mycontext);
    const handleButtonPress=()=>{
    toggle();
    //alert("yeees");
    }
    
    return <>
    <Button
     variant='contained'
     color='primary'
     onClick={() => {
         handleButtonPress();
     }}
    >
       
        Fill in 
    </Button>
    </>;
}

// #endregion

export default MyButton;