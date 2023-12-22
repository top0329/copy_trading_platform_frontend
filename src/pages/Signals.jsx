import * as React from 'react';
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SignalsTable from '../components/Tables/SignalsTable';
import api from '../utils/api';

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

function Signals() {
  const [strategyData, setStrategyData] = React.useState();

  React.useEffect(() => {
    async function fetchData() {
      const response = await api.get(
        'http://localhost:5000/api/strategy/strategies'
      );
      console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        const temp = await api.get(
          `http://localhost:5000/api/account/${response.data[i].accountId}`
        );
        response.data[i].providerName = `${temp.data.name}(${temp.data.login})`;
        response.data[
          i
        ].signal = `${response.data[i].name}(${response.data[i]._id})`;
      }
      setStrategyData(response.data);
    }

    fetchData();
  }, []);
  return (
    <div className="w-auto text-[#ccc]">
      <Button
        variant="contained"
        size="small"
        startIcon={<CreditCardIcon />}
        sx={{ textTransform: 'none', backgroundColor: '#0088CC!important' }}
      >
        Manage Renewals
      </Button>
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
        <SignalsTable data={strategyData} />
      </div>
    </div>
  );
}

export default Signals;
