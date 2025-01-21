import { Button } from '@mui/material';
import React, { useState } from 'react'


const Countvalue = () => {
    const [count,setCount]=useState(0);
    const changeCount=()=>{
        setCount(count+1)
    }
    const decCount=()=>{
        setCount(count-1)
    }
    const resetCount=()=>{
        setCount(0)
    }
  return (
    <>
    <Button variant="contained" onClick={changeCount}>Count</Button><br /><br />
    <Button variant="contained" onClick={decCount}>Decrement</Button><br /><br />
        <Button variant="contained" onClick={resetCount}>Reset</Button><br /><br />
        <small>Button is pressed {count} Times</small><br /><br />
    </>
  )
}

export default Countvalue