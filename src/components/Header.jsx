import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo.jpeg';

function Header() {
  return (
    <div className="flex flex-row items-center justify-between h-[70px] text-[#EEE] p-[15px] bg-[#1D2127]">
      <img className="h-10 w-10" src={Logo} alt="" />
      <div className="flex flex-row gap-x-2">
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
      </div>
    </div>
  );
}

export default Header