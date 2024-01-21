import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';
import Pagination from '@mui/material/Pagination';
import IconButton from '@mui/material/IconButton';

function EditUser() {
  return (
    <div>
      {deleteTradeCopierModalShow && (
        <DeleteTradeCopierModal
          deleteTradeCopierModalShow={setDeleteTradeCopierModalShow}
          selectedTradeCopierData={selectedTradeCopierData}
          handleDeleteAccountModalButtonClicked={
            handleDeleteAccountModalButtonClicked
          }
          isLoading={isLoading}
        />
      )}
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
              console.log(row.subscriber[0].name);
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                  {headers.map(({ id }) => {
                    let value = row[id];
                    if (id === 'subscriber') {
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
                        onClick={() =>
                          handleConfigButtonClicked(
                            row.subscriberId,
                            strategyId
                          )
                        }
                        className={classes.infoButton}
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
                          handleDeleteTradeCopierButtonClicked({
                            strategyName: strategyName,
                            subscriberId: row.subscriberId,
                            subscriberAccountName: row.subscriber[0].name,
                          })
                        }
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
}

export default EditUser