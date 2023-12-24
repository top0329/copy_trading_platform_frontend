import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import IconButton from '@mui/material/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import DashboardTable from '../components/Tables/DashboardTable';
import TradesTable from '../components/Tables/TradesTable';
import HistoryTable from '../components/Tables/HistoryTable';
import InfoModal from '../components/modals/InfoModal';
import api from '../utils/api';
import { useNavigate, useLocation } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  infoButton: {
    '&:hover': {
      backgroundColor: '#1B5E20',
      boxShadow: 'none',
    },
  },
  button: {
    '&:hover': {
      backgroundColor: '#242830',
      boxShadow: 'none',
    },
    '&:active, &:focus ,&selected': {
      backgroundColor: '#0088cc',
      boxShadow: 'none',
    },
  },
}));

function Dashboard() {
  const [activeTab, setActiveTab] = React.useState(1);
  const [exclamationModalShow, setExclamationModalShow] = React.useState(false);
  const [accountData, setAccountData] = React.useState([]);

  React.useEffect(() => {
    api
      .get('/account/all-accounts')
      .then((res) => {
        setAccountData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    let config = sessionStorage.getItem('dashboard');
    if (!config) {
      config = {
        tab: 1,
        accounts: {
          page: 1,
          pagecount: 10,
          sort: '',
          type: '',
        },
        trades: {
          page: 1,
          pagecount: 10,
          sort: '',
          type: '',
        },
        history: {
          page: 1,
          pagecount: 10,
          sort: '',
          type: '',
        },
      };
      sessionStorage.setItem('dashboard', JSON.stringify(config));
    } else {
      config = JSON.parse(config);
      setActiveTab(config.tab);
    }
  }, []);

  const handleTabClick = (id) => {
    setActiveTab(id);
    let config = JSON.parse(sessionStorage.getItem('dashboard'));
    config.tab = id;
    sessionStorage.setItem('dashboard', JSON.stringify(config));
  };

  const classes = useStyles();

  return (
    <div className="w-auto text-[#ccc] pb-[100px]">
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <div className="flex gap-2">
          <IconButton
            size="small"
            color="inherit"
            sx={{ backgroundColor: '#2e7d32', borderRadius: '4px' }}
            className={classes.infoButton}
            onClick={() => setExclamationModalShow(true)}
          >
            <PriorityHighIcon fontSize="small" />
          </IconButton>
          {exclamationModalShow && (
            <InfoModal setExclamationModalShow={setExclamationModalShow} />
          )}
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: activeTab == 1 ? '#0088CC' : '#282d36',
              textTransform: 'none',
            }}
            onClick={() => handleTabClick(1)}
          >
            Accounts
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: activeTab == 2 ? '#0088CC' : '#282d36',
              textTransform: 'none',
            }}
            onClick={() => handleTabClick(2)}
          >
            Trades
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: activeTab == 3 ? '#0088CC' : '#282d36',
              textTransform: 'none',
            }}
            onClick={() => handleTabClick(3)}
          >
            History
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="contained"
            size="small"
            startIcon={<FilterAltIcon />}
            sx={{ textTransform: 'none', backgroundColor: '#0088CC!important' }}
          >
            Filter
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<VisibilityOffIcon />}
            sx={{ textTransform: 'none', backgroundColor: '#0088CC!important' }}
          >
            Columns
          </Button>
        </div>
      </Stack>
      {activeTab === 1 && <DashboardTable />}
      {activeTab === 2 && <TradesTable />}
      {activeTab === 3 && <HistoryTable />}
    </div>
  );
}

export default Dashboard;
