import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import TableHead from '@mui/material/TableHead';
import { styled, alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import api from '../../utils/api';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';
import Pagination from '@mui/material/Pagination';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import IconButton from '@mui/material/IconButton';

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
  { id: 'name', label: 'SubscriberName' },
  { id: 'subscriber', label: 'SubscriberAccount' },
  // { id: 'openTime', label: 'E' },
  // { id: 'symbol', label: 'Symbol' },
  // { id: 'type', label: 'Type' },
  // { id: 'volume', label: 'Lots' },
  // { id: 'description', label: 'Description' },
  { id: 'createdAt', label: 'CreatedAt' },
  { id: 'updatedAt', label: 'UpdatedAt' },
];

export default function TradesTable() {
  const [sort, setSort] = React.useState({
    id: '',
    type: '',
  });

  const classes = useStyles();

  const [count, setCount] = React.useState();
  const [id, setId] = React.useState(null);

  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [expanded, setExpanded] = React.useState(false);

  /**
   * define sub data
   */
  const [subPage, setSubPage] = React.useState(1);
  const [subCount, setSubCount] = React.useState();
  const [subData, setSubData] = React.useState([]);

  const handleChange = (panel, id) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setId(id);
  };

  const handleChangeRowsPerPage = (e) => {
    let config = JSON.parse(sessionStorage.getItem('tradeCopier'));
    config.pagecount = e.target.value;
    config.page = 1;
    sessionStorage.setItem('tradeCopier', JSON.stringify(config));

    setRowsPerPage(e.target.value);
    handlePageChange(null, 1);
  };

  const handlePageChange = async (e, value) => {
    setPage(value);

    try {
      let config = JSON.parse(sessionStorage.getItem('tradeCopier'));
      config.page = value;
      sessionStorage.setItem('tradeCopier', JSON.stringify(config));

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

  const handleSubPageChange = async (e, value) => {
    setSubPage(value);

    try {
      const res = await api.get(
        `/strategy/strategies-subscribers/${id}?page=${subPage}&pagecount=${10}&sort=${''}&type=${''}`
      );
      setSubData(res.data.data);
      setSubCount(res.data.count);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    let config = JSON.parse(sessionStorage.getItem('tradeCopier'));

    if (!config) {
      config = {
        page: 1,
        pagecount: 10,
        sort: '',
        type: '',
      };

      sessionStorage.setItem('tradeCopier', JSON.stringify(config));
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
      setExpanded(res.data.data[0]._id);
      setId(res.data.data[0].strategyId);
      setData(res.data.data);
      setCount(res.data.count);
    }

    fetchData();
  }, []);

  React.useEffect(() => {
    // if (!id) return;
    console.log(id);

    async function fetchData() {
      const res = await api.get(
        `/strategy/strategies-subscribers/${id}?page=${subPage}&pagecount=${10}&sort=${''}&type=${''}`
      );

      console.log(res.data);
      setSubData(res.data.data);
      setSubCount(res.data.count);
    }

    fetchData();
  }, [id]);

  const _renderTable = () => (
    <div>
      <TableContainer
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
        <Table>
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
                // style={{ minWidth: column.minWidth }}
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
            {subData.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row._id}
                  // sx={{
                  //   '&:last-child td, &:last-child th': {
                  //     border: 1,
                  //     borderColor: '#282D36',
                  //   },
                  // }}
                >
                  {headers.map(({ id }) => {
                    let value = row[id];
                    // if (id === 'copyFactoryRoles') {
                    //   console.log(row[id]);
                    //   value = '';
                    //   row[id].forEach((item) => {
                    //     value += item + ', ';
                    //   });
                    //   value = value.substr(0, value.length - 2);
                    // }
                    if (id === 'subscriber') {
                      // console.log(value);
                      value = `${value[0].name} (${value[0].login})`;
                    } else if (id === 'createdAt' || id === 'updatedAt') {
                      value = value.substr(0, 10) + ' ' + value.substr(11, 8);
                    }

                    return (
                      <TableCell
                        key={id + row._id}
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
                      width: 100,
                      padding: '5px',
                    }}
                  >
                    <div className="flex gap-1">
                      <IconButton
                        size="small"
                        color="inherit"
                        sx={{
                          backgroundColor: '#2e7d32',
                          borderRadius: '4px',
                          fontSize: 13,
                          paddingX: '11px',
                        }}
                        className={classes.infoButton}
                      >
                        <Icon icon="fa:plug" color="white" />
                      </IconButton>
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
                      >
                        <Icon icon="fa:cogs" color="white" />
                      </IconButton>
                      <IconButton
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
                      >
                        <Icon icon="ion:trash-sharp" color="white" />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        // className="text-white"
        sx={{
          paddingTop: '5px',
          float: 'right',
        }}
        count={
          subCount % 10 === 0 ? subCount / 10 : Math.floor(subCount / 10) + 1
        }
        page={subPage}
        onChange={handleSubPageChange}
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
      />
    </div>
  );

  return (
    <div>
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
          {data &&
            data.map((row) => (
              <Accordion
                key={row._id}
                expanded={expanded === row._id}
                onChange={handleChange(row._id, row.strategyId)}
                sx={{ backgroundColor: '#282D36' }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#ccc' }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {row.name} ({row.strategyId})
                  </Typography>
                  <Typography sx={{ color: '#ccc' }}>
                    {row.description}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>{_renderTable()}</AccordionDetails>
              </Accordion>
            ))}

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
  );
}
