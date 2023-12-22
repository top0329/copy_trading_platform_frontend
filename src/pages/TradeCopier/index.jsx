import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import TradeCopierTable from '../../components/Tables/TradeCopierTable';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../utils/api';

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

function TradeCopier() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(
        'http://localhost:5000/api/strategy/strategies'
      );
      // const response = await api.get(
      //   'http://localhost:5000/api/subscriber/subscribers'
      // );
      // console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        const subscribers = await api.get(
          `http://localhost:5000/api/subscriber/strategy/${response.data[i].strategyId}`
        );
        for (let j = 0; j < subscribers.data.length; j++) {
          const account = await api.get(
            `http://localhost:5000/api/account/${subscribers.data[j].subscriberId}`
          );
          subscribers.data[j].accountName = `${account.data.name}(${account.data.login})`;
          // console.log('here', subscribers.data[j]);
        }
        // console.log(subscribers.data);
        // console.log(response.data[i].name);
        response.data[i].subscriberData = subscribers.data;
        // console.log(response.data[i]);
      }
      // const data = await response.json();
      // console.log(data)
      setData(response.data);
      // console.log(response.data);
    }

    fetchData();
  }, []);
  return (
    <div className="w-auto text-[#ccc]">
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Link to={'/trade-copier/create-new-trade-copier'}>
          <Button
            variant="contained"
            size="small"
            startIcon={<AddIcon />}
            sx={{ textTransform: 'none', backgroundColor: '#0088CC!important' }}
          >
            Create Copier
          </Button>
        </Link>
        <Button
          variant="contained"
          size="small"
          startIcon={<VisibilityOffIcon />}
          sx={{ textTransform: 'none', backgroundColor: '#0088CC!important' }}
        >
          Columns
        </Button>
      </Stack>
      <div className="mt-2 text-[#ccc] bg-[#2E353E] p-5 rounded">
        <div className="flex justify-end w-full pb-3">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
        {/* {console.log(data.length)} */}
        {data.length > 0 &&
          data.map((strategyData) => {
            return (
              <TradeCopierTable
                key={strategyData}
                data={strategyData.subscriberData}
                groupName={strategyData.name}
              />
            );
          })}
        {/* <TradeCopierTable />
        <TradeCopierTable /> */}
      </div>
    </div>
  );
}

export default TradeCopier;
