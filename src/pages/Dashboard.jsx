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

const initialHeaders = {
  "1": [
    // { id: 'accountStatus', label: '', minWidth: 15, align: 'center' },
    { id: 'account', label: 'Account', minWidth: 138, checked: true },
    {
      id: 'platform',
      label: 'MT',
      checked: true
    },
    {
      id: 'balance',
      label: 'Balance',
      checked: true
    },
    {
      id: 'equity',
      label: 'Equity',
      checked: true
    },
    {
      id: 'equityPercentage',
      label: 'Equity %',
      checked: true
    },
    {
      id: 'openTrades',
      label: 'Open Trades (Lots)',
      checked: true
    },
    {
      id: 'day',
      label: 'Day',
      checked: true
    },
    {
      id: 'week',
      label: 'Week',
      checked: true
    },
    {
      id: 'month',
      label: 'Month',
      checked: true
    },
    {
      id: 'total',
      label: 'Total',
      checked: true
    },
    {
      id: 'actions',
      label: 'Actions',
      checked: true
    },
  ],
  "2": [
    { id: 'positionId', label: 'ID', checked: true },
    { id: 'account', label: 'Account', checked: true },
    { id: 'openTime', label: 'Open Time', checked: true },
    { id: 'symbol', label: 'Symbol', checked: true },
    { id: 'type', label: 'Type', checked: true },
    { id: 'volume', label: 'Lots', checked: true },
    { id: 'openPrice', label: 'OpenPrice', checked: true },
    { id: 'profit', label: 'Profit', checked: true },
    { id: 'durationInMinutes', label: 'DurationInMinutes', checked: true },
    { id: 'gain', label: 'Gain', checked: true },
    { id: 'marketValue', label: 'MarketValue', checked: true },
    { id: 'success', label: 'Success', checked: true },
    // { id: 'riskInBalancePercent', label: 'RiskInBalancePercent' },
    // { id: 'riskInPips', label: 'RiskInPips' },
    // { id: 'type', label: '' },
  ],
  "3": [
    { id: 'positionId', label: 'ID', checked: true },
    { id: 'account', label: 'Account', checked: true },
    { id: 'openTime', label: 'Open Time', checked: true },
    { id: 'symbol', label: 'Symbol', checked: true },
    { id: 'type', label: 'Type', checked: true },
    { id: 'volume', label: 'Lots', checked: true },
    { id: 'openPrice', label: 'Open Price', checked: true },
    { id: 'closeTime', label: 'Close Time', checked: true },
    { id: 'closePrice', label: 'Close Price', checked: true },
    { id: 'durationInMinutes', label: 'DurationInMinutes', checked: true },
    { id: 'gain', label: 'Gain', checked: true },
    { id: 'marketValue', label: 'MarketValue', checked: true },
    { id: 'pips', label: 'Pips', checked: true },
    { id: 'success', label: 'Success', checked: true },
    { id: 'profit', label: 'Profit', checked: true },
    // { id: 'riskInBalancePercent', label: 'RiskInBalancePercent' },
    // { id: 'riskInPips', label: 'RiskInPips' },
    // { id: 'type', label: '' },
  ]
}

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
  
  const [headers, setHeaders] = React.useState(initialHeaders);
  const [activeTab, setActiveTab] = React.useState("1");
  // const [exclamationModalShow, setExclamationModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const { ids } = useSelector((state) => state.utils);

  const _intervalRef3 = React.useRef(null);
  const _intervalRef300 = React.useRef(null);

  const [showFilterModal, setShowFilterModal] = React.useState(false);
  const [showFilterItems, setShowFilterItems] = React.useState(true);

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

  /**
   * when visible items is changed...
   * @param {*} e
   */
  const handleVisibleChange = (e) => {
    const { name, checked } = e.target;
    const index = activeTab;
    setHeaders(prev => ({
      ...prev,
      [index]: prev[index].map(item => item.id === name ? {...item, checked} : item )
    }));
  }
  /**
   * when click viewl all button
   */
  const handleViewAll = (e) => {
    const index = activeTab;
    setHeaders(prev => ({
      ...prev,
      [index]: prev[index].map(item => ({ ...item, checked: e.target.checked }))
    }))
  }

  const resetColumns = () => {
    const index = activeTab;
    setHeaders(prev => ({
      ...prev,
      [index]: prev[index].map(item => ({ ...item, checked: true }))
    }))
  }

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
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: activeTab == "1" ? '#0088CC' : '#282d36',
              textTransform: 'none',
            }}
            onClick={() => handleTabClick("1")}
          >
            Accounts
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: activeTab == "2" ? '#0088CC' : '#282d36',
              textTransform: 'none',
            }}
            onClick={() => handleTabClick("2")}
          >
            Trades
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: activeTab == "3" ? '#0088CC' : '#282d36',
              textTransform: 'none',
            }}
            onClick={() => handleTabClick("3")}
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
          <div className='relative'>
            <Button
              variant="contained"
              size="small"
              onClick={() => setShowFilterModal(prev => !prev)}
              startIcon={<VisibilityOffIcon />}
              sx={{ textTransform: 'none', backgroundColor: '#0088CC!important', position: 'relative' }}
            >
              Columns
            </Button>
            <div className={`text-center absolute z-50 top-full mt-2 p-2 w-[220px] bg-[#2E353E] right-[-20px] ${!showFilterModal && 'hidden'}`}>
              <div className='fixed opacity-0 top-0 left-0 right-0 bottom-0' onClick={() => setShowFilterModal(false)}></div>
              Toggle visible columns
              <div className='relative'>
                <button onClick={() => setShowFilterItems(prev => !prev)} className='w-full p-2 mt-1 rounded text-[0.95rem] bg-[#232830] hover:bg-[#272c35]'>All selected({ headers[activeTab].length })</button>
                <div className={`absolute w-full bg-[#2b313b] ${ !showFilterItems && 'hidden' }`}>
                  <div className={`flex pl-6  hover:bg-[#232830] gap-1 cursor-pointer ${ headers[activeTab].reduce((count, {checked}) => count + checked, 0) === headers[activeTab].length && 'bg-[#0099E6]' }`}><input type="checkbox" checked={headers[activeTab].reduce((count, {checked}) => count + checked, 0) === headers[activeTab].length} onClick={handleViewAll} /><div className='text-[0.9rem] p-1 cursor-pointer font-bold'>View all</div></div>
                  {
                    headers[activeTab].map(item => 
                      <div className={`flex pl-6  hover:bg-[#232830] gap-1 cursor-pointer ${item.checked && 'bg-[#0099E6]'}`}><input name={item.id} onChange={handleVisibleChange} checked={item.checked} type="checkbox" /><div className='text-[0.9rem] p-1 cursor-pointer'>{item.label}</div></div>
                    )
                  }
                </div>
                <button onClick={resetColumns} className='w-full p-2 mt-1 rounded text-white text-[0.95rem] bg-[#0088CC] hover:bg-[#454c5a]'>Reset Columns</button>
              </div>
            </div>
          </div>
        </div>
      </Stack>
      {activeTab === "1" && <DashboardTable headers={headers["1"]}/>}
      {activeTab === "2" && <TradesTable headers={headers["2"]}/>}
      {activeTab === "3" && <HistoryTable headers={headers["3"]}/>}
    </div>
  );
}

export default Dashboard;
