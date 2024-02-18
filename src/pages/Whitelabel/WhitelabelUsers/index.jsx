import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { makeStyles } from '@material-ui/core/styles';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import IconButton from '@mui/material/IconButton';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import DeleteUserModal from '../../../components/modals/DeleteUserModal';

import useToast from '../../../hooks/useToast';
import api from '../../../utils/api';

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

const headers = [
  { id: 'email', label: 'Email' },
  { id: 'fullName', label: 'Full Name' },
  { id: '_id', label: 'ID' },
  { id: 'strategies', label: 'Signals' },
  { id: 'subscribers', label: 'Copiers' },
  { id: 'accounts', label: 'Accounts' },
  { id: 'maxAccount', label: 'Max Accounts' },
  { id: 'isPending', label: 'Status' },
  { id: 'providerAccountLimit', label: 'Limit' },
];

export default function WhitelabelUsers() {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [sort, setSort] = React.useState({
    id: '',
    type: '',
  });
  const [count, setCount] = React.useState(0);
  const [page, setPage] = React.useState(1);
  // const [exclamationModalShow, setExclamationModalShow] = React.useState(false);
  const [DeleteUserModalShow, setDeleteUserModalShow] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedAccountData, setSelectedAccountData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    let config = JSON.parse(sessionStorage.getItem('users'));

    if (!config) {
      config = {
        page: 1,
        pagecount: 10,
        sort: '',
        type: '',
      };

      sessionStorage.setItem('users', JSON.stringify(config));
    }

    setPage(config.page);
    setRowsPerPage(config.pagecount);
    setSort({
      id: config.sort,
      type: config.type,
    });

    async function fetchData() {
      try {
        const { page, pagecount, sort, type } = config;
        console.log(page, pagecount, sort, type);
        const res = await api.get(
          `/users/all?page=${page}&pagecount=${pagecount}&sort=${sort}&type=${type}`
        );
        setData(res.data.data);
        setCount(res.data.count);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const handleChangeRowsPerPage = (e) => {
    let config = JSON.parse(sessionStorage.getItem('users'));
    config.pagecount = e.target.value;
    config.page = 1;
    sessionStorage.setItem('users', JSON.stringify(config));

    setRowsPerPage(e.target.value);
    handlePageChange(null, 1);
  };

  const classes = useStyles();

  const handlePageChange = async (e, value) => {
    setPage(value);

    try {
      let config = JSON.parse(sessionStorage.getItem('users'));
      config.page = value;
      sessionStorage.setItem('users', JSON.stringify(config));

      const { page, pagecount, sort, type } = config;
      console.log(page, pagecount, sort, type);
      const res = await api.get(
        `/users/all?page=${page}&pagecount=${pagecount}&sort=${sort}&type=${type}`
      );

      setData(res.data.data);
      setCount(res.data.count);
    } catch (e) {
      console.log(e);
    }
  };

  const handleConfigButtonClicked = (id) => {
    navigate(`/whitelabel/users/edit/${id}`);
  };

  const handleDeleteAccountButtonClicked = (accountData) => {
    setSelectedAccountData(accountData);
    console.log(selectedAccountData);
    setDeleteUserModalShow(true);
  };

  const handleDeleteUserModalButtonClicked = async () => {
    try {
      setIsLoading(true);

      await api.delete(`users/${selectedAccountData._id}`);
      handlePageChange(null, page);
      showToast('Account deleted successfully!', 'success');
    } catch (err) {
      showToast('Account deletion failed!', 'error');
      console.log(err);
    } finally {
      setDeleteUserModalShow(false);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {DeleteUserModalShow && (
        <DeleteUserModal
          DeleteUserModalShow={setDeleteUserModalShow}
          selectedUserName={selectedAccountData.fullName}
          handleDeleteUserModalButtonClicked={
            handleDeleteUserModalButtonClicked
          }
          isLoading={isLoading}
        />
      )}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <div className="flex gap-2">
          <Link to="/whitelabel/users/add-user">
            <Button
              variant="contained"
              size="small"
              startIcon={<AddIcon />}
              sx={{
                textTransform: 'none',
                backgroundColor: '#0088CC!important',
              }}
            >
              Add User
            </Button>
          </Link>
        </div>
      </Stack>
      <div className="mt-2 text-[#ccc] bg-[#2E353E] p-5 rounded pb-[10px]">
        <div className="flex justify-between w-full pb-3">
          <div className="flex items-center gap-2">
            <FormControl size="small">
              <Select
                displayEmpty
                value={rowsPerPage}
                onChange={handleChangeRowsPerPage}
                input={
                  <OutlinedInput
                    sx={{
                      width: '80px',
                      color: 'white',
                    }}
                  />
                }
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
            <Typography>records per page</Typography>
          </div>
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
        <Paper
          sx={{
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#2E353E',
            boxShadow: 'none',
            '& .MuiPaper-root': {
              color: '#ccc',
              backgroundColor: '#2E353E',
              boxShadow: 'none',
            },
          }}
        >
          <TableContainer
            sx={{
              '.MuiTable-root': {
                borderColor: '#282D36',
                borderWidth: '1px',
              },
            }}
          >
            <Table
              stickyHeader
              aria-label="sticky table"
              sx={{
                '& .MuiTableCell-root': {
                  color: '#ccc',
                  backgroundColor: '#2E353E',
                  border: '#282D36',
                },
              }}
            >
              <TableHead>
                <TableRow
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 1,
                      borderColor: '#282D36',
                    },
                  }}
                >
                  {headers.map(({ label, id }, index) => (
                    <TableCell
                      key={`users_header_${index}`}
                      align="center"
                      sx={{
                        padding: '5px',
                      }}
                    >
                      <div className="flex items-center justify-between p-[3px]">
                        {label}
                        <div className="flex flex-col width={11} cursor-pointer">
                          <Icon
                            icon="teenyicons:up-solid"
                            color="#ccc"
                            className="mb-[-4px]"
                            width={11}
                          />
                          <Icon
                            icon="teenyicons:down-solid"
                            width={11}
                            color="#ccc"
                          />
                        </div>
                      </div>
                    </TableCell>
                  ))}
                  <TableCell
                    key={'option'}
                    align="center"
                    sx={{
                      padding: '5px',
                    }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 1,
                    borderColor: '#282D36',
                  },
                }}
              >
                {
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  data &&
                    data.length > 0 &&
                    data.map((row, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={`users_table_data_${index}`}
                        >
                          {headers.map(({ id }) => {
                            let value = row[id];
                            if (id === 'isPending') {
                              // console.log(row[id]);
                              value = value === true ? 'Pending' : 'None';
                            }
                            return (
                              <TableCell
                                key={id + row.id}
                                align="left"
                                sx={{
                                  padding: '5px',
                                  paddingLeft: 2,
                                }}
                              >
                                {value === 'Pending' ? (
                                  <div className="text-[#5ad462] font-bold">
                                    {value}
                                  </div>
                                ) : (
                                  <div className="truncate">{value}</div>
                                )}
                              </TableCell>
                            );
                          })}
                          <TableCell
                            key={row.id + 'option'}
                            align="left"
                            sx={{
                              width: '0',
                              padding: '5px',
                            }}
                          >
                            <div className="flex gap-1">
                              <IconButton
                                size="small"
                                color="inherit"
                                sx={{
                                  backgroundColor: '#0099E6',
                                  borderRadius: '4px',
                                  fontSize: 13,
                                  paddingX: '11px',
                                }}
                                className={classes.infoButton}
                                onClick={() =>
                                  handleConfigButtonClicked(row._id)
                                }
                              >
                                <Icon icon="fa:cogs" color="white" />
                              </IconButton>
                              <IconButton
                                size="small"
                                color="inherit"
                                sx={{
                                  backgroundColor: '#D64742',
                                  borderRadius: '4px',
                                  fontSize: 13,
                                  padding: '10px 11px!important',
                                }}
                                className={classes.infoButton}
                                onClick={() =>
                                  handleDeleteAccountButtonClicked({
                                    fullName: row.fullName,
                                    _id: row._id,
                                  })
                                }
                              >
                                <Icon icon="ion:trash-sharp" color="white" />
                              </IconButton>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })
                }
              </TableBody>
            </Table>
          </TableContainer>

          <div className="flex justify-between items-center">
            <Typography sx={{ color: '#ccc', fontSize: 13 }}>
              Showing {rowsPerPage * (page - 1) + 1} to{' '}
              {rowsPerPage * page > count ? count : rowsPerPage * page} of{' '}
              {count} entries
            </Typography>
            <Pagination
              sx={{
                paddingY: 2,
              }}
              count={
                count % rowsPerPage === 0
                  ? count / rowsPerPage
                  : Math.floor(count / rowsPerPage) + 1
              }
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              showFirstButton
              showLastButton
            />
          </div>
        </Paper>
      </div>
    </div>
  );
}
