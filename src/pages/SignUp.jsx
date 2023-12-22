import * as React from 'react';
import Logo from '../assets/img/logo.jpeg';
import { Link } from 'react-router-dom';
import validator from 'validator';
import api from '../utils/api';
import useToast from '../hooks/useToast';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const { showToast } = useToast();
  const initialValues = {
    email: '',
    fullName: '',
    password: '',
    confirm: '',
  };
  const [values, setValues] = React.useState(initialValues);
  const [signupButtonClicked, setSignupButtonClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      setSignupButtonClicked(true);
      setIsLoading(true);
      if (
        values.email == '' ||
        values.password == '' ||
        values.fullName == '' ||
        values.confirm == ''
      ) {
        showToast('Please fill in all the information!', 'error');
      } else if (!validator.isEmail(values.email)) {
        showToast('Invalid email format!', 'error');
      } else if (values.password !== values.confirm) {
        showToast('Confirm is not match!', 'error');
      } else if (values.password.length < 6) {
        showToast('Your password must be at least 6 characters long!', 'error');
      } else {
        // delete values.confirm;
        const result = await api.post('/users/register', values);
        showToast('Registration success!', 'success');
        console.log(result);
        navigate('/dashboard');
      }
    } catch (err) {
      showToast('Account creation failed!', 'error');
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

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
        <div className="w-96 mx-auto">
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm text-base rounded-md block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  shadow-sm-light"
              required
              onChange={handleInputChange}
            />
            {values.email === '' && signupButtonClicked && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                Email required!
              </p>
            )}
            {!validator.isEmail(values.email) &&
              values.email.length !== 0 &&
              signupButtonClicked && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                  Invalid email format!
                </p>
              )}
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="name"
              className="shadow-sm text-base rounded-md block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  shadow-sm-light"
              onChange={handleInputChange}
            />
            {values.fullName == '' && signupButtonClicked && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                Full Name required!
              </p>
            )}
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
              name="password"
              type="password"
              id="password"
              className="shadow-sm text-base rounded-md block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 shadow-sm-light"
              onChange={handleInputChange}
            />
            {values.password == '' && signupButtonClicked && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                Password required!
              </p>
            )}
            {values.password.length < 6 &&
              values.password.length !== 0 &&
              signupButtonClicked && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                  Your password must be at least 6 characters long!
                </p>
              )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="confirm"
              className="block mb-2 text-sm font-medium "
            >
              Confirm
            </label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              className="shadow-sm text-base rounded-md block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 shadow-sm-light"
              onChange={handleInputChange}
            />
            {values.confirm == '' && signupButtonClicked && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                Confirm required!
              </p>
            )}
            {values.confirm !== values.password &&
              values.confirm.length !== 0 &&
              signupButtonClicked && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                  Confirm not match!
                </p>
              )}
          </div>
          <div className="flex items-end justify-end mb-5">
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
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
            className="w-full bg-[#0088cc] hover:bg-[#0088dd] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-base px-5 py-2.5 text-center flex justify-center"
            onClick={handleSubmit}
          >
            SignUp new account
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
