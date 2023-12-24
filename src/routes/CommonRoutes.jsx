import Root from '../pages/root';
import Login from '../pages/login';
import SignUp from '../pages/SignUp';

const CommonRoutes = {
  path: '/',
  children: [
    {
      path: '/auth/login',
      element: <Login />,
    },
    {
      path: '/auth/signup',
      element: <SignUp />,
    },
    {
      path: '/',
      element: <Root />,
    },
  ],
};

export default CommonRoutes;
