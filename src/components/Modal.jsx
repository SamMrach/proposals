import React,{useContext,useEffect} from 'react';
import { useState } from 'react';
import { Drawer,makeStyles} from '@material-ui/core';
import { Grid } from '@mui/material';
import { Mycontext } from '../ContextProvider';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDash,faBan,faTrash ,faCoffee} from '@fortawesome/free-solid-svg-icons'
import {toggle} from "../actions";
import {ourStore} from '../reducer';

const useStyles=makeStyles(theme=>({
  container:{
    width:'80%',
   display:'flex',
   flexDirection:'column'
  },
  header:{
    width:'100%',
    display:'flex',
  }
}))
const Modal = ({toggle,state}) => {
  //  let initialstate=ourStore.getState().show;
  //   const[open,setOpen]=useState(initialstate);
  //   //const {open,setOpen}=useContext(Mycontext);
  //   ourStore.subscribe(()=>{
  //     setOpen(ourStore.getState().show)
  //   })
    const styles=useStyles();
    const toggleDrawer=()=>{
      toggle();
    }
    return <>

     <Drawer
        anchor="right"
        open={state.show}
        onClose={toggleDrawer}
        PaperProps={{ style: { width: '25%' } }}
     >
      <div className={styles.container}>
        <div className={styles.header} >
         <h3>Proposal Templates</h3>
         <Button onClick={toggleDrawer} style={{width:"24px",height:"24px"}} >
         <FontAwesomeIcon icon={faBan}  />
         
          </Button> 
        </div>
      </div>
      
     
     </Drawer>
    </>
    ;
}

export default Modal;