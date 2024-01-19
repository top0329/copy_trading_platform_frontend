import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import api from '../../utils/api';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';
import Pagination from '@mui/material/Pagination';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import DeleteSignalModal from '../../components/modals/DeleteSignalModal';
import useToast from '../../hooks/useToast';

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

const headers = [
  { id: 'signal', label: 'Signal' },
  { id: 'account', label: 'provider Name' },
  // { id: 'openTime', label: 'E' },
  // { id: 'symbol', label: 'Symbol' },
  // { id: 'type', label: 'Type' },
  // { id: 'volume', label: 'Lots' },
  { id: 'description', label: 'Description' },
  { id: 'createdAt', label: 'CreatedAt' },
  { id: 'updatedAt', label: 'UpdatedAt' },
];

export default function SignalProvider() {
  const classes = useStyles();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [sort, setSort] = React.useState({
    id: '',
    type: '',
  });
  const [count, setCount] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedSignalData, setSelectedSignalData] = React.useState({});
  const [deleteSignalModalShow, setDeleteSignalModalShow] =
    React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleDeleteSignalButtonClicked = (accountData) => {
    setSelectedSignalData(accountData);
    setDeleteSignalModalShow(true);
  };

  const handleConfigButtonClicked = (id) => {
    navigate(`/signal-provider/edit/${id}`);
  };

  const handleConfigureButtonClicked = () => {
    navigate('/signal-provider/configure-payment-processor');
  }

  const handleDeleteSignalModalButtonClicked = async () => {
    try {
      setIsLoading(true);
      await api.delete(`/strategy/${selectedSignalData.strategyId}`);
      showToast('Signal deleted successfully!', 'success');
      handlePageChange(null, page);
    } catch (err) {
      showToast('Signal deletion failed!', 'error');
      console.log(err);
    } finally {
      setDeleteSignalModalShow(false);
      setIsLoading(false);
    }
  };

  const handleChangeRowsPerPage = (e) => {
    let config = JSON.parse(sessionStorage.getItem('signals'));
    config.pagecount = e.target.value;
    config.page = 1;
    sessionStorage.setItem('signals', JSON.stringify(config));

    setRowsPerPage(e.target.value);
    handlePageChange(null, 1);
  };

  const handlePageChange = async (e, value) => {
    setPage(value);

    try {
      let config = JSON.parse(sessionStorage.getItem('signals'));
      config.page = value;
      sessionStorage.setItem('signals', JSON.stringify(config));

      const { page, pagecount, sort, type } = config;
      console.log(page, pagecount, sort, type);
      const res = await api.get(
        `/strategy/strategies?page=${page}&pagecount=${pagecount}&sort=${sort}&type=${type}`
      );
      setData(res.data.data);
      setCount(res.data.count);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    let config = JSON.parse(sessionStorage.getItem('signals'));

    if (!config) {
      config = {
        page: 1,
        pagecount: 10,
        sort: '',
        type: '',
      };

      sessionStorage.setItem('signals', JSON.stringify(config));
    }

    setPage(config.page);
    setRowsPerPage(config.pagecount);
    setSort({
      id: config.sort,
      type: config.type,
    });

    async function fetchData() {
      const { page, pagecount, sort, type } = config;
      const res = await api.get(
        `/strategy/strategies?page=${page}&pagecount=${pagecount}&sort=${sort}&type=${type}`
      );
      console.log(res.data);
      setData(res.data.data);
      setCount(res.data.count);
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4">
      {deleteSignalModalShow && (
        <DeleteSignalModal
          deleteSignalModalShow={setDeleteSignalModalShow}
          selectedSignalName={selectedSignalData.name}
          handleDeleteSignalModalButtonClicked={
            handleDeleteSignalModalButtonClicked
          }
          isLoading={isLoading}
        />
      )}
      <div className="col-span-3">
        <header className="p-[18px] text-white flex justify-between items-center bg-[#282D36] rounded-t">
          <h2 className="mt-[5px] text-[20px] font-normal">
            Payment Processor
          </h2>
        </header>
        <div className="text-[#ccc] bg-[#2E353E] p-4 rounded-b">
          <p className="mb-3">Processor configured</p>
          <button className="w-auto rounded px-3 py-1.5 text-white text-sm bg-[#0099E6]" onClick={handleConfigureButtonClicked}>
            Configure
          </button>
        </div>
      </div>
      <div className="col-span-9">
        <header className="p-[18px] text-white flex justify-between items-center bg-[#282D36] rounded-t">
          <h2 className="mt-[5px] text-[20px] font-normal">Signal Pages</h2>
          <Link
            to={'/signal-provider/create'}
            className="bg-[#0099e6] h-[33px] rounded text-sm px-2 items-center flex"
          >
            <Icon
              icon="typcn:plus"
              width="16"
              height="16"
              style={{ display: 'inline-block' }}
            />{' '}
            Create Signal Page
          </Link>
        </header>
        <div className="text-[#ccc] bg-[#2E353E] p-5 rounded-b pb-[10px]">
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
                        // borderColor: 'white!important',
                        // '&: active': {
                        //   border: '1px solid black',
                        // },
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
              // marginBottom: 10,
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
                // maxHeight: 440,
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
                    {headers.map(({ label, id }) => (
                      <TableCell
                        key={id}
                        align="center"
                        // style={{ minWidth: column.minWidth }}
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
                        width: '0',
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
                      data.map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.id}
                            // sx={{
                            //   '&:last-child td, &:last-child th': {
                            //     border: 1,
                            //     borderColor: '#282D36',
                            //   },
                            // }}
                          >
                            {headers.map(({ id }) => {
                              let value = row[id];
                              if (id === 'account') {
                                value = `${value[0].name}(${value[0].login})`;
                                // } else if (id === 'openTime') {
                                //   value = value.substring(0, 19);
                              } else if (id === 'signal') {
                                value = `${row.name}(${row.strategyId})`;
                              }
                              if (id === 'createdAt' || id === 'updatedAt') {
                                value =
                                  value.substr(0, 10) +
                                  ' ' +
                                  value.substr(11, 8);
                              }
                              return (
                                <TableCell
                                  key={id}
                                  align="left"
                                  sx={{
                                    padding: '5px',
                                    paddingLeft: 2,
                                  }}
                                >
                                  <div className="truncate">{value}</div>
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
                                {/* <IconButton
                        size="small"
                        color="inherit"
                        sx={{
                          backgroundColor: '#2e7d32',
                          borderRadius: '4px',
                          fontSize: 24,
                          paddingX: '6px',
                        }}
                        className={classes.infoButton}
                      >
                        <Icon icon="mdi:play" color="white" />
                      </IconButton> */}
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
                                    handleConfigButtonClicked(row.strategyId)
                                  }
                                >
                                  <Icon icon="fa:cogs" color="white" />
                                </IconButton>
                                {/* <IconButton
                        size="small"
                        color="inherit"
                        sx={{
                          backgroundColor: '#0099E6',
                          borderRadius: '4px',
                          fontSize: 17,
                          fontWeight: 800,
                          paddingX: '9px',
                        }}
                        className={classes.infoButton}
                      >
                        <Icon icon="tabler:list" color="white" />
                      </IconButton> */}
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
                                    handleDeleteSignalButtonClicked({
                                      name: row.name,
                                      accountId: row.accountId,
                                      strategyId: row.strategyId,
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
                // className="text-white"
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
    </div>
  );
}
