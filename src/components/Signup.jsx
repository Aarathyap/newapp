import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    const[form,setForm]=useState({
        myname:'',
        email:'',
        password:'',
        conpassword:'',
        phone:'',
        address:''
    })
    const capValue=()=>{
        // console.log(form);
        axios.post('https://dummyjson.com/users/add',form).then((res)=>{
          console.log(res)
        })
    }
  return (
    <>
    <Box style={{textAlign:'center'}}
      component="form"
      sx={{ '& .MuiTextField-root': { m: 3, width: '25ch' } }}
      noValidate
      autoComplete="off"
    
    >
        
      <div>
        <h1>STUDENT REGISTRATION FORM</h1>
        <TextField
          required
          id="outlined-required"
          label="Name"
          value={form.myname}
          onChange={(e)=>{
            setForm({...form,myname:e.target.value})
          }}
        />
       
        <TextField
          id="outlined-disabled"
          label="Email"
          value={form.email}
          onChange={(e)=>{
            setForm({...form,email:e.target.value})
          }}
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Phone Number"
          value={form.phone}
          onChange={(e)=>{
            setForm({...form,phone:e.target.value})
          }}
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          value={form.password}
          onChange={(e)=>{
            setForm({...form,password:e.target.value})
          }}
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          value={form.conpassword}
          onChange={(e)=>{
            setForm({...form,conpassword:e.target.value})
          }}
        />
    
        <TextField
          id="outlined-password-input"
          label="Adress"
          value={form.address}
          onChange={(e)=>{
            setForm({...form,address:e.target.value})
          }} 
        />
    
        </div>
        <Button variant="contained" onClick={capValue} style={{backgroundColor:'green'}}>Register</Button><br />
       
    </Box>
    </>
  )
}

export default Signup