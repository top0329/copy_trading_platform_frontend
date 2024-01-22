import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import IconButton from '@mui/material/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import DashboardTable from '../components/Tables/DashboardTable';
import TradesTable from '../components/Tables/TradesTable';
import HistoryTable from '../components/Tables/HistoryTable';
import InfoModal from '../components/modals/InfoModal';
import api from '../utils/api';

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
  const classes = useStyles();
  
  const [activeTab, setActiveTab] = React.useState(1);
  // const [exclamationModalShow, setExclamationModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const { ids } = useSelector((state) => state.utils);

  const _intervalRef3 = React.useRef(null);
  const _intervalRef300 = React.useRef(null);

  React.useEffect(() => {
    _intervalRef3.current = setInterval(async () => {
      try {
        let temp = [...ids];
        if (temp.length === 0) {
          clearInterval(_intervalRef3.current);
        }
        console.log('untils======>', temp);
        for (let i = 0; i < temp.length; i++) {
          api
            .put(`/account/update-account-information/${temp[i]}`)
            .then((res) => {
              console.log('success====>');

              dispatch({
                type: 'DELETE_ID',
                payload: temp[i],
              });
            })
            .catch((err) => {
              console.log('failed ===>');
            });
        }
      } catch (err) {
        console.log(err);
      }
    }, 3000);

    // setIntervalId(_id);

    return () => {
      clearInterval(_intervalRef3.current);
      // console.log('clear interval ' + intervalId);
    };
  }, [ids]);

  React.useEffect(() => {
    _intervalRef300.current = setInterval(() => {
      async function fetcher() {
        try {
          await api.put(`/account/update-all-accounts-information`);
          console.log('updated success');
        } catch (err) {
          console.log(err);
        }
      }
      fetcher();
    }, 1000 * 60 * 5);

    return () => {
      clearInterval(_intervalRef300);
    };
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
          {/* <IconButton
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
          )} */}
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
