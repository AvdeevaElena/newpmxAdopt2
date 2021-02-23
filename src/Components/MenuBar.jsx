import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {ListSubheader} from "@material-ui/core";
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import {Link} from 'react-router-dom'
//import TestTable  from "./Components/testTable";
import {UserOutlined, NotificationOutlined} from '@ant-design/icons';

import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
 

  const [open, setOpen] = React.useState(true);
  const [openList, setOpenList] = React.useState(true);
  const [openUniversal, setOpenUniversal] = React.useState(true);
  const [openBank, setOpenBank] = React.useState(true);


   const handleClick = () => {
       setOpen(!open);
   }



   const handleClickList = () => {
    setOpenList(!openList);
}


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{textAlign: 'center', background:"#3092e3" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{textAlign: 'center' }}>
            Первый московский хоспис 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List component="nav"
              aria-label="nested-list-suheader"
              subheader= {
            <ListSubheader component ='div' id="nested-list-subheader">
            </ListSubheader>
        }
        style = {{display: "block"}}
        className = {classes.root}
        >
            <ListItem button onClick={handleClickList}>
                <ListItemIcon>
                      <UserOutlined/>
                </ListItemIcon>
                <ListItemText primary="Пациенты" />
                {openList ? <ExpandLess/> : <ExpandMore/> }
            </ListItem>
            <Collapse in={openList} timeout="auto" unmountOnExit>
            
            <List component="div" disablePadding>

            <ListItem button className={classes.nested}>
                        <Link to="/Iphone">
                        <ListItemText primary="Iphone adopt"/>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Link to="/FirstPageAllNew">
                        <ListItemText primary="FirstPageAllNew !!!!!"/>
                        </Link>
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={handleClickList}>
                <ListItemIcon>
                      <NotificationOutlined/>
                </ListItemIcon>
                <ListItemText primary="Новости" />
                {openList ? <ExpandLess/> : <ExpandMore/> }
            </ListItem>
            <Collapse in={openList} timeout="auto" unmountOnExit>
            <Button component={Link} to="/Kartochka"> кНОПОЧКА Kartochka 1</Button>
            <Button component={Link} to="/Iphone"> кНОПОЧКА 2</Button>
            </Collapse>
        </List>
        <Button component={Link} to="/Iphone"> кНОПОЧКА iph </Button>
        <Button component={Link} to="/DemoNews2"> DemoNews2</Button>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
        </Typography>
  
      </main>
    </div>
  );
}
