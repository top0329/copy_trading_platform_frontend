import Logo from '../assets/img/logo.jpeg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-white">
      <div className="block max-w-md pt-2 w-full">
        <div className="flex flex-row justify-between h-10">
          <img className="h-10 w-10" src={Logo} alt="" />
          <div className="px-[17px] py-[13px] rounded-md rounded-b-none bg-[#0088cc] text-[12px] flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <p className="pl-1">LOGIN</p>
          </div>
        </div>
      </div>
      <div className="block max-w-md rounded-md rounded-tr-none bg-[#2E353E] p-6 border-t-[5px] border-[#0088cc] px-8 pt-8 pb-12">
        <form className="w-96 mx-auto">
          <div className="mb-8">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm text-base rounded-md block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  shadow-sm-light"
              required
            />
          </div>
          <div className="mb-8">
            <div className="flex flex-row items-center justify-between">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium "
              >
                Password
              </label>
              <a
                href="#"
                className=" text-[13px] text-right w-full inline-block mb-2"
              >
                Forgot password
              </a>
            </div>
            <input
              type="password"
              id="password"
              className="shadow-sm text-base rounded-md block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 shadow-sm-light"
              required
            />
          </div>
          <div className="flex items-start mb-8 justify-between">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800"
                required
              />
              <label
                htmlFor="terms"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember{' '}
              </label>
            </div>
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Create new account?{' '}
              <Link
                to={'/auth/signup'}
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Go to signup
              </Link>
            </label>
          </div>
          <Link to={'/dashboard'}>
            <button
              type="submit"
              className="w-full text-center bg-[#0088cc] hover:bg-[#0088dd] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px] text-sm px-3 py-1.5 flex justify-center"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
