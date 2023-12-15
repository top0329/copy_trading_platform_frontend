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

  React.useEffect(() => {

  }, [])

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const classes = useStyles();

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
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            sx={{ backgroundColor: '#282d36', textTransform: 'none' }}
            onClick={() => handleTabClick(1)}
          >
            Accounts
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            sx={{ backgroundColor: '#282d36', textTransform: 'none' }}
            onClick={() => handleTabClick(2)}
          >
            Trades
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            sx={{ backgroundColor: '#282d36', textTransform: 'none' }}
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
            sx={{ textTransform: 'none' }}
          >
            Filter
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<VisibilityOffIcon />}
            sx={{ textTransform: 'none' }}
          >
            Columns
          </Button>
        </div>
      </Stack>
      {activeTab === 1 && (
        <div className="tab_panel">
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
            <DashboardTable />
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className="tab_panel">
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
            <TradesTable />
          </div>
        </div>
      )}
      {activeTab === 3 && (
        <div className="tab_panel">
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
            <HistoryTable />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
