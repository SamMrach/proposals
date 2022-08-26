import React,{useState} from 'react';
import {InputField} from "./InputField";
import { makeStyles} from '@material-ui/core';
const useStyles=makeStyles(theme=>({
    container:{
      width:'250px',
      height:'300px',
     display:'flex',
     flexDirection:'column'
    },
    header:{
      width:'100%',
      display:'flex',
    }
  }))
const Popup=()=>{
    const styles=useStyles();
    const [name,setName]=useState("");
    const [city,setCity]=useState("");
    const [age,setAge]=useState(0);
    const changeName=(e)=>{
        setName(e.target.value)
    }
    return (
    <div className={styles.container}>
        <InputField value={name} hanldeChange={changeName} /> 
        {/* <Input value={city} handleChange={(e)=>setCity(e.target.value)}/>
        <Input value={age} handleChange={(e)=>setAge(e.target.value)}/> */}
    </div>)
}
export default Popup;