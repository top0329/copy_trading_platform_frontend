import Root from '../pages/root';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import EmailVerify from '../pages/EmailVerification/EmailVerify';
import EmailVerificationPageForLogin from '../pages/EmailVerification/EmailVerificationPageForLogin';
import EmailVerificationPageForSignUp from '../pages/EmailVerification/EmailVerificationPageForSignUp';
import ForgotPassword from '../pages/EmailVerification/ForgotPassword';
import ResetPassword from '../pages/EmailVerification/ResetPassword';
import Error404 from '../pages/Maintenance/Error404';
import View from '../pages/Maintenance/View';

const CommonRoutes = {
  path: '/',
  children: [
    {
      path: '*',
      element: <Error404 />,
    },
    {
      path: '/404',
      element: <Error404 />,
    },
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
    {
      path: '/auth/verify-email/:token',
      element: <EmailVerify />,
    },
    {
      path: '/email-verification-page-for-login',
      element: <EmailVerificationPageForLogin />,
    },
    {
      path: '/email-verification-page-for-signup',
      element: <EmailVerificationPageForSignUp />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/reset-password/:token',
      element: <ResetPassword />,
    },
    {
      path: '/auth/view/:id',
      element: <View />,
    },
  ],
};

export default CommonRoutes;
