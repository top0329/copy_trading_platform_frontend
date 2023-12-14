import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const columns = [
  { id: 'sendToName', label: 'Send To Name', minWidth: 105 },
  { id: 'sendToNumber', label: 'Send To Number', minWidth: 120 },
  {
    id: 'riskType',
    label: 'Risk Type',
    minWidth: 114,
    // align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'direction',
    label: 'Direction',
    minWidth: 60,
    // align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'options',
    label: '',
    minWidth: 145,
    maxWidth: 145,
    align: 'center',
    // format: (value) => value.toFixed(2),
  },
  // {
  //   id: 'equityPercentage',
  //   label: 'Equity %',
  //   minWidth: 55,
  //   align: 'center',
  //   // format: (value) => value.toFixed(2),
  // },
  // {
  //   id: 'openTrades',
  //   label: 'Open Trades (Lots)',
  //   minWidth: 133,
  //   align: 'center',
  //   // format: (value) => value.toFixed(2),
  // },
  // {
  //   id: 'pending',
  //   label: 'Pending',
  //   minWidth: 51,
  //   align: 'center',
  //   // format: (value) => value.toFixed(2),
  // },
  // {
  //   id: 'day',
  //   label: 'Day',
  //   minWidth: 24,
  //   align: 'center',
  //   // format: (value) => value.toFixed(2),
  // },
  // {
  //   id: 'week',
  //   label: 'Week',
  //   minWidth: 35,
  //   align: 'center',
  //   // format: (value) => value.toFixed(2),
  // },
  // {
  //   id: 'month',
  //   label: 'Month',
  //   minWidth: 42,
  //   align: 'center',
  //   // format: (value) => value.toFixed(2),
  // },
  // {
  //   id: 'total',
  //   label: 'Total',
  //   minWidth: 32,
  //   align: 'center',
  //   // format: (value) => value.toFixed(2),
  // },
  // {
  //   id: 'graph',
  //   label: '',
  //   minWidth: 16,
  //   align: 'center',
  //   // format: (value) => value.toFixed(2),
  // },
];

function createData(
  sendToName,
  sendToNumber,
  riskType,
  direction,
  options,
) {
  return {
    sendToName,
    sendToNumber,
    riskType,
    direction,
    options,
  };
}

const rows = [
  createData(
    'Demo Account',
    3013421,
    'Fixed lot @ 0.10',
    '➡',
    '',
  ),
  // createData('Italy', 'IT', 60483973, 301340),
  // createData('United States', 'US', 327167434, 9833520),
  // createData('Canada', 'CA', 37602103, 9984670),
  // createData('Australia', 'AU', 25475400, 7692024),
  // createData('Germany', 'DE', 83019200, 357578),
  // createData('Ireland', 'IE', 4857000, 70273),
  // createData('Mexico', 'MX', 126577691, 1972550),
  // createData('Japan', 'JP', 126317000, 377973),
  // createData('France', 'FR', 67022000, 640679),
  // createData('United Kingdom', 'GB', 67545757, 242495),
  // createData('Russia', 'RU', 146793744, 17098246),
  // createData('Nigeria', 'NG', 200962417, 923768),
  // createData('Brazil', 'BR', 210147125, 8515767),
];

export default function TradeCopierTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
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
          maxHeight: 440,
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
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{ padding: '5px' }}
                >
                  {column.label}
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    // sx={{
                    //   '&:last-child td, &:last-child th': {
                    //     border: 1,
                    //     borderColor: '#282D36',
                    //   },
                    // }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{ padding: '5px' }}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="records per page"
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        color=""
        sx={{
          marginTop: '10px',
          '& .MuiTablePagination-displayedRows': {
            color: '#ccc',
            // bgcolor: '#282D36',
          },
          '& .MuiTablePagination-selectLabel': {
            color: '#ccc',
            // bgcolor: '#282D36',
          },
          '& .MuiTablePagination-select': {
            color: '#ccc',
            bgcolor: '#282D36',
            borderRadius: '4px',
            height: '25px',
            width: '20px',
            paddingRight: '28px',
            paddingTop: '10px',
          },
          '& .MuiTablePagination-actions': {
            color: '#ccc',
            bgcolor: '#282D36',
            borderRadius: '4px',
          },
        }}
      />
    </Paper>
  );
}
