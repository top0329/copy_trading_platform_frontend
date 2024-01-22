import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

// project import
import useAuth from '../hooks/useAuth';
import useToast from '../hooks/useToast';

// ==============================|| AUTH GUARD ||============================== //
const admins = [
  "/whitelabel",
  "/signal-provider",
  "/signal-followers"
]

const verifyToken = (token) => {
  try {
    if (!token) {
      return false;
    }

    const decoded = jwtDecode(token);

    /**
     * Property 'exp' does not exist on type '<T = unknown>(token: string, options?: JwtDecodeOptions | undefined) => T'.
     */
    return decoded.exp > Date.now() / 1000;
  } catch (err) {
    return false;
  }
};

const AuthGuard = ({ children }) => {
  const { isAuthenticated, isInitialized, user } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isAuthenticated && isInitialized) {
      navigate('/auth/login');
    }

    if (Object.keys(user).length > 0) {
      console.log(user)
      admins.forEach(url => {
        if (pathname.includes(url) && user.role !== "Admin") {
          navigate('/auth/login');
        }
      });
    }
  }, [isAuthenticated, isInitialized, user]);

  // token validation when routing
  useEffect(() => {
    let inValid = false;

    const token = localStorage.getItem('token');
    if (!token) {
      inValid = true;
    } else if (!verifyToken(token)) {
      localStorage.setItem('expired', true);
      inValid = true;
    }

    if (pathname.substring(0, 11) === '/auth/view/') {
      localStorage.setItem('prevPath', pathname.substring(5, pathname.length));
    } else {
      localStorage.setItem('prevPath', pathname);
    }

    if (pathname.substring(0, 6) === '/view/') {
      if (!inValid) {
        console.log(pathname);
        // navigate(pathname);
      } else {
        localStorage.setItem('expired', true);
        navigate(`/auth${pathname}`);
      }
    } else if (inValid) {
      navigate('/auth/login');
    } 

  }, [pathname]);

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;
