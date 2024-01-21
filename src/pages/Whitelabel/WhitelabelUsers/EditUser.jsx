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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';
import Pagination from '@mui/material/Pagination';
import { Link, useNavigate, useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';

import api from '../../../utils/api';
import DeleteSignalModal from '../../../components/modals/DeleteSignalModal';
import useToast from '../../../hooks/useToast';

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
  { id: 'description', label: 'Description' },
  { id: 'createdAt', label: 'CreatedAt' },
  { id: 'updatedAt', label: 'UpdatedAt' },
  { id: 'live', label: 'Live' },
  { id: 'terms', label: 'Terms' },
];

export default function EditUser() {
  const classes = useStyles();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    console.log(id)
    async function fetchData() {
      const res = await api.get(`/users/detail/${id}`);
      if (res.data.status === "OK") {
        console.log(res.data)
        setData(res.data.data);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className='mb-28'>
      <div className="pb-3">
        <Link
          to={`/whitelabel/users`}
          className="flex flex-row items-center font-extrabold"
        >
          <ReplyRoundedIcon
            fontSize="medium"
            sx={{ color: 'white', fontWeight: 'bold' }}
          />
          <h1 className="text-white text-lg pl-2"> Whitelabel Users</h1>
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-3">
          <header className="p-[18px] text-white flex justify-between items-center bg-[#282D36] rounded-t">
            <h2 className="mt-[5px] text-[20px] font-normal">User Details</h2>
          </header>
          <div className="text-[#ccc] bg-[#2E353E] p-4 rounded-b">
            <p className="mb-2 text-sm">Profile Name</p>
            <h1 className="text-xl">{data.fullName}</h1>
            <p className="my-2 text-sm">Registered</p>
            <h1 className="text-xl">{data.createdAt && data.createdAt.substring(0, 10)}</h1>
            <div className="flex justify-between items-center">
              <div>
                <p className="my-2 text-sm">Max Accounts</p>
                <h1 className="text-xl">{data.maxAccount}</h1>
              </div>
              <IconButton
                size="small"
                color="inherit"
                sx={{
                  backgroundColor: '#0099E6',
                  borderRadius: '4px',
                  fontSize: 13,
                  paddingX: '11px',
                  paddingY: '11px',
                }}
                className={classes.infoButton}
              // onClick={() => handleConfigButtonClicked(row._id)}
              >
                <Icon icon="fa:cogs" color="white" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-span-9 flex flex-col gap-5">
          <div>
            <header className="p-[18px] text-white flex justify-between items-center bg-[#282D36] rounded-t">
              <h2 className="mt-[5px] text-[20px] font-normal">Signals</h2>
            </header>
            <div className="text-[#ccc] bg-[#2E353E] p-5 rounded-b pb-[10px]">
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
                {/* <TableContainer
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
                              >
                                {headers.map(({ id }) => {
                                  let value = row[id];
                                  if (id === 'account') {
                                    value = `${value[0].name}(${value[0].login})`;
                                  } else if (id === 'signal') {
                                    value = `${row.name}(${row.strategyId})`;
                                  }
                                  if (
                                    id === 'createdAt' ||
                                    id === 'updatedAt'
                                  ) {
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
                                      {id === 'live' ? (
                                        <Icon
                                          icon={
                                            row[id]
                                              ? 'mdi:check-bold'
                                              : 'mdi:close-bold'
                                          }
                                          width={22}
                                          className="font-bold"
                                          color={row[id] ? 'green' : '#D64742'}
                                        />
                                      ) : (
                                        <div className="truncate">{value}</div>
                                      )}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })
                      }
                    </TableBody>
                  </Table>
                </TableContainer> */}

                <Typography color='white' mb={1}>No signals have been added.</Typography>
              </Paper>
            </div>
          </div>
          <div>
            <header className="p-[18px] text-white flex justify-between items-center bg-[#282D36] rounded-t">
              <h2 className="mt-[5px] text-[20px] font-normal">Accounts</h2>
            </header>
            <div className="text-[#ccc] bg-[#2E353E] p-5 rounded-b pb-[10px]">
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
                {/* <TableContainer
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
                              >
                                {headers.map(({ id }) => {
                                  let value = row[id];
                                  if (id === 'account') {
                                    value = `${value[0].name}(${value[0].login})`;
                                  } else if (id === 'signal') {
                                    value = `${row.name}(${row.strategyId})`;
                                  }
                                  if (
                                    id === 'createdAt' ||
                                    id === 'updatedAt'
                                  ) {
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
                                      {id === 'live' ? (
                                        <Icon
                                          icon={
                                            row[id]
                                              ? 'mdi:check-bold'
                                              : 'mdi:close-bold'
                                          }
                                          width={22}
                                          className="font-bold"
                                          color={row[id] ? 'green' : '#D64742'}
                                        />
                                      ) : (
                                        <div className="truncate">{value}</div>
                                      )}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })
                      }
                    </TableBody>
                  </Table>
                </TableContainer> */}

                <Typography color='white' mb={1}>No accounts have been added.</Typography>
              </Paper>
            </div>
          </div>
          <div>
            <header className="p-[18px] text-white flex justify-between items-center bg-[#282D36] rounded-t">
              <h2 className="mt-[5px] text-[20px] font-normal">Copiers</h2>
            </header>
            <div className="text-[#ccc] bg-[#2E353E] p-5 rounded-b pb-[10px]">
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
                {/* <TableContainer
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
                              >
                                {headers.map(({ id }) => {
                                  let value = row[id];
                                  if (id === 'account') {
                                    value = `${value[0].name}(${value[0].login})`;
                                  } else if (id === 'signal') {
                                    value = `${row.name}(${row.strategyId})`;
                                  }
                                  if (
                                    id === 'createdAt' ||
                                    id === 'updatedAt'
                                  ) {
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
                                      {id === 'live' ? (
                                        <Icon
                                          icon={
                                            row[id]
                                              ? 'mdi:check-bold'
                                              : 'mdi:close-bold'
                                          }
                                          width={22}
                                          className="font-bold"
                                          color={row[id] ? 'green' : '#D64742'}
                                        />
                                      ) : (
                                        <div className="truncate">{value}</div>
                                      )}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })
                      }
                    </TableBody>
                  </Table>
                </TableContainer> */}

                <Typography color='white' mb={1}>No copiers have been added.</Typography>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
