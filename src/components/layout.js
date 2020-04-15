import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Link from "gatsby-link"
import './drawer.css'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 0,
      flexShrink: 0,
      flex:"none"
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      width:"100%",
      marginLeft: drawerWidth,
      backgroundColor:'#C6D7DE'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
   
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Layout(props) {
  const { container,children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

 
  
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} style={{display:'flex',backgroundColor:"#F6F6F6",paddingLeft:"20px"}}  >
      
      
     
      </div>
     
   
      <Divider/>
      <List>
       
        
            <Link to='/' style={{textDecoration:'none',color:"gray"}}>
          <ListItem button key={'About'} >
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'About'} />
            
          </ListItem>
          </Link>
            
            
            <Link to='/blog' style={{textDecoration:'none',color:"gray"}}>
            <ListItem button key={"blog"}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={'blog'} />
              
            </ListItem>
            </Link>

            <Link to='/contact' style={{textDecoration:'none',color:"gray"}}>
            <ListItem button key={"contact"}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={'contact'} />
              
            </ListItem>
            </Link>
        
      </List>
     
      <Divider />
     
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        
       
          {/* <Typography variant="h6" noWrap>
           
          Responsive drawer */}
          <Link to="/" style={{textDecoration:'none',color:"white",fontSize:"25px"}}> <Typography variant="h6" noWrap>Portfolio</Typography></Link>
       
       
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
           
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            // onClose={handleDesktopDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
          
            {drawer}
          </Drawer>
        </Hidden>
        {/* <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden> */}
      </nav>
     
      <main className={classes.content}>
        <div className={classes.toolbar} />
       
       {children}
      </main>

    </div>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default Layout;
