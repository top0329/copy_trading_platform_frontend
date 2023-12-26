import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';

const AccountDetails = () => {
  const [tab, setTab] = React.useState(1);

  return (
    <div>
      <ul className="flex text-sm font-medium text-center  dark:text-gray-400">
        <li className="mr-[2px]">
          <a
            href="#"
            aria-current="page"
            className={`inline-block px-[15px] py-[10px] text-white bg-[#282D36]  rounded-t border-t-[3px] box-border hover:border-white ${
              tab === 1 ? 'border-white bg-[#2E353E]' : 'border-[#282D36]'
            }`}
          >
            Profile
          </a>
        </li>
        <li className="mr-[2px]">
          <a
            href="#"
            className={`inline-block px-[15px] py-[10px] text-white bg-[#282D36]  rounded-t border-t-[3px] box-border hover:border-white ${
              tab === 2 ? 'border-white bg-[#2E353E]' : 'border-[#282D36]'
            }`}
          >
            Dashboard
          </a>
        </li>
      </ul>
      <div className="bg-[#2E353E]">asdfasdf</div>
    </div>
  );
};

export default AccountDetails;
