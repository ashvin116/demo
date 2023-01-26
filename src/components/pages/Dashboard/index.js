import React, {  useState } from 'react' 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Dialog, DialogActions, DialogContent, DialogTitle, } from '@mui/material';

function Dashboard() {

  const [logoutmodal,setLogoutModal]=useState(false)
  
  

  const handelLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  const handleClickLogout = () => {
    setLogoutModal(true);
  };

  const handleCloseLogout = () => {
    setLogoutModal(false);
  };


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Button
              variant='outlined'
              color="inherit"
              onClick={handleClickLogout}
            >Log Out</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Typography sx={{textAlign:'center'}} variant='h6'>
       welcome to dashboard
      </Typography>

      <Dialog
          open={logoutmodal}
          keepMounted
          onClose={handleCloseLogout}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-title">
          {"are you sure you want to logout ?"}
        </DialogTitle>
        <DialogContent>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogout}>cancel</Button>
          <Button style={{color:'red'}} onClick={handelLogout} autoFocus>
            Logout
          </Button>
        </DialogActions>
      
        </Dialog>

    </>
  )
}

export default Dashboard