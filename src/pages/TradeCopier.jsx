import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import TradeCopierTable from '../components/TradeCopierTable';

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
  return (
    <div className="w-auto text-[#ccc]">
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Button
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
          sx={{ textTransform: 'none' }}
        >
          Create Copier
        </Button>
        <Button
          variant="contained"
          size="small"
          startIcon={<VisibilityOffIcon />}
          sx={{ textTransform: 'none' }}
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
        <div className="bg-[#282D36] h-[45px] text-[20px] font-bold p-[5px] flex justify-between items-center">
          <h1 className="pl-[5px] mt-[5px]">TradersNetworkClub</h1>
          <Button
            variant="contained"
            size="small"
            startIcon={<AddIcon />}
            sx={{ textTransform: 'none', height: '30px', mr: '5px' }}
          >
            Group Copier
          </Button>
        </div>
        <TradeCopierTable />
      </div>
    </div>
  );
}

export default TradeCopier;
