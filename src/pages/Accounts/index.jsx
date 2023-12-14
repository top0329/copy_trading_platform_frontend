import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import IconButton from '@mui/material/IconButton';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { makeStyles } from '@material-ui/core/styles';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

import AccountsTable from '../../components/AccountsTable';
import { useEffect, useState } from 'react';

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

function Accounts() {
  const classes = useStyles();
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/api/account/all-accounts');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, [])

  return (
    <div className="w-auto text-[#ccc]">
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
          >
            <PriorityHighIcon fontSize="small" />
          </IconButton>
          <Link to="/accounts/add-account">
            <Button
              variant="contained"
              size="small"
              startIcon={<AddIcon />}
              sx={{ textTransform: 'none' }}
            >
              Add Account
            </Button>
          </Link>
        </div>
        {/* <div className="flex gap-2"> */}
        {/* <Button
            variant="contained"
            size="small"
            startIcon={<FilterAltIcon />}
            sx={{ textTransform: 'none' }}
          >
            Filter
          </Button> */}
        <Button
          variant="contained"
          size="small"
          startIcon={<AccountBalanceIcon />}
          sx={{ textTransform: 'none' }}
        >
          Account Hosting
        </Button>
        {/* </div> */}
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
        <AccountsTable data={data} />
      </div>
    </div>
  );
}

export default Accounts;
