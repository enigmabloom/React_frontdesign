import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{ margin:'15%' }}>
        <Typography variant='h3' style={{ color:"darkblue" }}>BlogApp Login</Typography><br></br>
        <TextField id="outlined-basic" label="Email" variant="outlined"/>
        <br></br> <br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined"/>
        <br></br> <br></br>
        <Button variant="contained">LogIn</Button>
        <br/><br/>
        <Typography  style={{ color:"darkblue" }}>
            <Link to={'/signup'}style={{ color:'darkblue' }}>New User?Please click here.</Link></Typography>
    </div>
  )
}

export default Login