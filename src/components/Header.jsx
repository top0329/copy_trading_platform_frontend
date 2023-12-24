import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Logo from '../assets/img/logo.jpeg';
import useAuth from '../hooks/useAuth';

function Header() {
  const { isAuthenticated, user, signOut } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-row items-center justify-between h-[70px] text-[#EEE] p-[15px] bg-[#1D2127]">
      <img className="h-10 w-10" src={Logo} alt="" />
      <div className="flex flex-row gap-x-2">
        {!isAuthenticated ? (
          <>
            <Link
              to={'/auth/login'}
              className="bg-[#0088cc] border-[#0088cc] inline-block py-1.5 px-3 rounded-md mb-0 text-sm font-normal cursor-pointer border"
            >
              Login
            </Link>
            <Link
              to={'/auth/signup'}
              className="bg-[#0088cc] border-[#0088cc] inline-block py-1.5 px-3 rounded-md mb-0 text-sm font-normal cursor-pointer border"
            >
              SignUp
            </Link>
          </>
        ) : (
          <div className="flex items-center justify-center gap-3">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/2.jpg"
              sx={{ position: 'relative' }}
            />

            <Typography>{user.fullName}</Typography>

            <Box onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Box>

            <div
              id="userDropdown"
              className={`z-[10000000]  right-[10px] top-[70px] absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                !isOpen && 'hidden'
              }`}
            >
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div className="font-medium truncate">{user.email}</div>
              </div>
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="avatarButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
              </ul>
              <div
                className="block cursor-pointer rounded-b-lg px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                onClick={signOut}
              >
                Sign out
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
