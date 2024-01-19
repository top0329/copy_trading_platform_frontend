import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HelpIcon from '@mui/icons-material/Help';
import ListSubheader from '@mui/material/ListSubheader';
import MainListItems from '../components/MainListItems';
import useAuth from '../hooks/useAuth';
// import Orders from './Orders';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import coreRoutes from '../routes/CoreRoutes';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#171717',
  color: '#CCC',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#171717',
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundColor: '#171717',
    color: '#ccc',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({});

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openManual, setOpenManual] = React.useState(false);
  const { isAuthenticated } = useAuth();

  const toggleDrawer = () => {
    setOpen(!open);
    setOpenManual(!openManual);
  };

  if (isAuthenticated) {
    return (
      <div className="bg-boxdark-2 text-bodydark h-screen">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex h-fit overflow-hidden w-full">
          <div className="relative flex-1">
            <ThemeProvider theme={defaultTheme}>
              <Box
                sx={{
                  display: 'flex',
                  overflowY: 'scroll',
                }}
              >
                {/* <CssBaseline /> */}
                <AppBar position="absolute" open={open}>
                  <Toolbar
                    sx={{
                      pr: '24px', // keep right padding when drawer closed
                    }}
                  >
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      onClick={toggleDrawer}
                      sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography
                      component="h1"
                      variant="h6"
                      color="inherit"
                      noWrap
                      sx={{ flexGrow: 1 }}
                    >
                      {coreRoutes.children[0].title}
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<HelpIcon />}
                      color="success"
                      size="small"
                      sx={{ textTransform: 'none' }}
                    >
                      Help
                    </Button>
                  </Toolbar>
                </AppBar>
                <Drawer
                  variant="permanent"
                  open={open}
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => {
                    if (!openManual) setOpen(false);
                  }}
                  sx={{
                    backgroundColor: '#1D2127',
                    position: 'sticky',
                    top: '0px',
                  }}
                >
                  <Toolbar
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      px: [1],
                    }}
                  >
                    <ListSubheader
                      component="div"
                      sx={{ color: '#ccc', backgroundColor: '#171717' }}
                    >
                      Navigation
                    </ListSubheader>
                    <IconButton
                      color="inherit"
                      onClick={toggleDrawer}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <ChevronLeftIcon />
                    </IconButton>
                  </Toolbar>
                  <MainListItems open={open} />
                </Drawer>
                <Box
                  component="main"
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    overflowY: 'scroll',
                    height: '100vh',
                    // maxWidth: '100%',
                    // overflow: 'unset',
                    width: 'calc(100vw - 240px)',
                  }}
                >
                  <Toolbar />
                  <div className="m-10">
                    {/* <Container sx={{ mx: '10px', my:'20px' }}> */}
                    <Outlet />
                    {/* </Container> */}
                  </div>
                </Box>
              </Box>
            </ThemeProvider>
          </div>
        </div>
      </div>
    );
  } else {
    <></>;
  }
};

export default DefaultLayout;
