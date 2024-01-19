import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Icon } from '@iconify/react';

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
            <Typography sx={{ color: '#ccc' }}>{user.fullName}</Typography>
            <Box
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer text-[#ccc] z-[1204]"
            >
              {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Box>
            <div
              className={`fixed right-0 bottom-0 top-0 left-0 flex items-center justify-center z-[1203] ${
                !isOpen && 'hidden'
              }`}
              onClick={() => setIsOpen(false)}
            ></div>
            <div
              id="userDropdown"
              className={`z-[1205] right-[10px] top-[70px] absolute bg-[#282D36] divide-gray-100 rounded shadow w-44 dark:bg-[#282D36] dark:divide-gray-600 ${
                !isOpen && 'hidden'
              }`}
            >
              <div className="px-4 py-3 text-sm dark:text-white">
                <div className="font-medium text-[#ccc] truncate">
                  {user.email}
                </div>
              </div>
              <hr className="bg-[#1D2127] h-[1px] border-0 my-0 mx-1" />
              <ul
                className="py-1 text-sm text-[#ccc] dark:text-gray-200"
                aria-labelledby="avatarButton"
              >
                {/* <li>
                  <Link
                    to={'/profile'}
                    className="block px-2 py-2 hover:bg-blue-100 dark:hover:bg-[#0088CC] dark:hover:text-white m-1 rounded"
                  >
                    <div className="flex flex-row gap-2">
                      <Icon
                        icon="fa:building"
                        color="#ccc"
                        width="20"
                        height="20"
                      />
                      Profile Manager
                    </div>
                  </Link>
                </li> */}
                <li>
                  <Link
                    to={'/profile'}
                    className="block px-2 py-2 hover:bg-[#0088CC] dark:hover:bg-[#0088CC] dark:hover:text-white m-1 rounded"
                  >
                    <div className="flex flex-row gap-2">
                      <Icon
                        icon="majesticons:user"
                        color="#ccc"
                        width="20"
                        height="20"
                      />
                      Profile
                    </div>
                  </Link>
                </li>
              </ul>
              <hr className="bg-[#1D2127] h-[1px] border-0 my-0 mx-1" />
              <div
                className="cursor-pointer rounded px-2 py-2 text-sm text-gray-700 hover:bg-[#0088CC] dark:hover:bg-[#0088CC] dark:text-gray-200 dark:hover:text-white m-1"
                onClick={signOut}
              >
                <div className="flex flex-row gap-2 items-center text-[#ccc]">
                  <Icon
                    icon="wpf:shutdown"
                    color="#ccc"
                    width="20"
                    height="20"
                  />
                  Logout
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
