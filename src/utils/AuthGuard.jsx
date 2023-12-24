import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// project import
import useAuth from '../hooks/useAuth';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }) => {
  const { isAuthenticated, isInitialized } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // console.log(isAuthenticated, isInitialized);
    if (!isAuthenticated && isInitialized) {
      navigate('/auth/login', {
        state: {
          from: location.pathname,
        },
        replace: true,
      });
    }
  }, [isAuthenticated, navigate, location, isInitialized]);

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;
