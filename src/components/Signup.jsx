import { Box, Button,  TextField, Typography} from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <Box sx={{ flexGrow: 1 }}style={{ marginTop:'10%',marginLeft:'20%',width:'50%'}}>
      <Grid container spacing={2}>
        <Grid size={6}>
      <TextField fullWidth variant='outlined' label='Name' id='base-outlined'></TextField>
        </Grid>
        <Grid size={6}>
        <TextField fullWidth variant='outlined' label='Email' id='base-outlined'></TextField>
           </Grid>
           <Grid size={12}>
        <TextField fullWidth 
          id="outlined-multiline-flexible"
          label="Address"
          multiline
          rows={4}
          />
        </Grid>
        <Grid size={6}>
        <TextField fullWidth variant='outlined' label='Password' id='base-outlined'></TextField>
        </Grid>
     
        <Grid size={6}>
        <TextField fullWidth variant='outlined' label='Phone Number' id='base-outlined'></TextField>

        </Grid>
        <Grid size={12}>
        <Button variant='contained'>SignUp</Button>
        </Grid>
        <Grid size={12}>
        <Typography  style={{ color:"darkblue" }}>
        <Link to={'/'}style={{ color:'darkblue' }}>Registered User?Please click here.</Link></Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Signup