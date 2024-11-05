import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils'
import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
          BlogApp
        </Typography>
       <Link to={'/blog'}style={{ color:'white' }}><Button color="inherit">Home</Button></Link> 
       <Link to={'/addblogs'}style={{ color:'white' }}><Button color="inherit">AddBlogs</Button></Link> 
       <Link to={'/'}style={{ color:'white' }}><Button color="inherit">LogOut</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar