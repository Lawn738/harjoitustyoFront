import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import ListIcon from '@material-ui/icons/List';
import TheatersIcon from '@material-ui/icons/Theaters';
import HelpIcon from '@material-ui/icons/Help';
import Homepage from '../components/Homepage'
import About from '../components/About'
import Tickets from '../components/Tickets'
import TicketForm from '../components/TicketForm'

function DrawerMUI () {

const [open, SetOpen] = useState(false);

const handleOpen = () => { SetOpen(true); }
const handleClose = () => { SetOpen(false); }

const [value, setValue] = useState(1);
const ChangeToHome = (event, val) => { setValue(0); }
const ChangeToTickets = (event, val) => { setValue(1); }
const ChangeToForm = (event, val) => { setValue(2); }
const ChangeToAbout = (event, val) => { setValue(3); }

  return(
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton onClick={handleOpen} color='inherit'><MenuIcon /></IconButton>
            <Typography variant='h5' color='inherit'>LeffalippuApp</Typography>
          </Toolbar>
        </AppBar>


        <Drawer anchor='left' open={open} onClick={handleClose}>
        <List component='nav'>

          <ListItem button value={value} onClick={ ChangeToHome } >
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>

          <ListItem button value={value} onClick={ ChangeToTickets } >
            <ListItemIcon><ListIcon /></ListItemIcon>
            <ListItemText>Browse Tickets</ListItemText>
          </ListItem>

          <ListItem button value={value} onClick={ ChangeToForm } >
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText>Add Tickets</ListItemText>
          </ListItem>

          <ListItem button value={value} onClick={ ChangeToAbout } >
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItem>

        </List>
        </Drawer>

        { value === 0 && <Homepage /> }
  			{ value === 1 && <Tickets /> }
  			{ value === 2 && <TicketForm /> }
  			{ value === 3 && <About /> }

      </div>
    );
}

export default DrawerMUI;
