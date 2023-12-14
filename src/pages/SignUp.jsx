import Logo from '../assets/img/logo.jpeg';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-white">
      <div className="block max-w-md pt-2 w-full">
        <div className="flex flex-row justify-between h-10 gap-5">
          <img className="h-10 w-10" src={Logo} alt="" />
          <label className="px-5 py-2 rounded-md rounded-b-none bg-[#0088cc]">
            SIGN UP
          </label>
        </div>
      </div>
      <div className="block max-w-md rounded-md rounded-tr-none bg-[#2E353E] px-8 pt-8 pb-12 border-t-[5px] border-[#0088cc]">
        <form className="w-96 mx-auto">
          <div className="mb-5">
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
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm text-base rounded-md block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  shadow-sm-light"
              required
            />
          </div>
          {/* <div className="mb-5">
            <label htmlFor="login" className="block mb-2 text-sm font-medium">
              Login
            </label>
            <input
              type="text"
              id="login"
              className="shadow-sm text-base rounded-md block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  shadow-sm-light"
              required
            />
          </div> */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm text-base rounded-md block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 shadow-sm-light"
              required
            />
          </div>
          {/* <div className="mb-5">
            <label htmlFor="server" className="block mb-2 text-sm font-medium ">
              Server
            </label>
            <input
              type="text"
              id="server"
              className="shadow-sm text-base rounded-md block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 shadow-sm-light"
              required
            />
          </div> */}
          {/* <div className="grid grid-cols-12 gap-3">
            <div className="col-span-8 mb-5">
              <label
                htmlFor="platform"
                className="block mb-2 text-sm font-medium "
              >
                Platform
              </label>
              <select className="p-2.5 block w-full rounded-md text-base disabled:opacity-50 disabled:pointer-events-none bg-gray-700 border-gray-600 text-gray-400 focus:ring-gray-600">
                <option selected>Open this select menu</option>
                <option>mt4</option>
                <option>mt5</option>
              </select>
            </div>
            <div className="col-span-4 mb-5">
              <label
                htmlFor="magic"
                className="block mb-2 text-sm font-medium "
              >
                Magic
              </label>
              <input
                type="number"
                id="magic"
                defaultValue={0}
                className="shadow-sm text-base rounded-md block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 shadow-sm-light"
                required
              />
            </div>
          </div> */}
          <div className="flex items-end justify-end mb-5">
            <label
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Already have account?{' '}
              <Link
                to={'/auth/login'}
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Go to login
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0088cc] hover:bg-[#0088dd] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-base px-5 py-2.5 text-center flex justify-center"
          >
            SignUp new account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
