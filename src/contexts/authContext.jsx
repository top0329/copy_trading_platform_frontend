import { createContext } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import api from '../utils/api';
import { jwtDecode } from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { useNavigate, useLocation } from 'react-router-dom';

export const AuthContext = createContext({
  isAuthenticated: false,
  isInitialized: false,
  user: {},
  signOut: () => {},
});

const verifyToken = (token) => {
  if (!token) {
    return false;
  }
  const decoded = jwtDecode(token);

  /**
   * Property 'exp' does not exist on type '<T = unknown>(token: string, options?: JwtDecodeOptions | undefined) => T'.
   */
  return decoded.exp > Date.now() / 1000;
};

// eslint-disable-next-line react/display-name, react/prop-types
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    const init = async () => {
      try {
        const token = window.localStorage.getItem('token');

        if (token && verifyToken(token)) {
          console.log(verifyToken(token));
          // setSession(token);
          setAuthToken(token);
          const response = await api.get('/users/me');
          const user = response.data;
          setUser(user);
          setIsAuthenticated(true);
          console.log(user)
        } else {
          if (token) {
            localStorage.setItem('expired', true);
          }
          setIsAuthenticated(false);
          setUser({});
          // navigate('/auth/login');
        }
      } catch (err) {
        console.log(err);
        console.error(err);
      } finally {
        setIsInitialized(true);
      }
    };

    if (pathname.substring(0, 11) !== '/auth/view/') {
      init();
    }
  }, []);

  const signOut = () => {
    setIsAuthenticated(false);
    setUser({});
    setAuthToken();

    navigate('/auth/login');
  };

  const login = (data) =>
    new Promise((resolve, reject) => {
      api
        .post('/users/login', data)
        .then((res) => {
          if (!res.data.token) {
            navigate('/email-verification-page-for-login');
          } else {
            setAuthToken(res.data.token);
            setUser(res.data.user);
            setIsAuthenticated(true);
            resolve();
          }
        })
        .catch((err) => reject(err));
    });

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, signOut, isInitialized }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
