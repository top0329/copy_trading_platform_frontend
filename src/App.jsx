import { useEffect, useState } from 'react';

import Loader from './common/Loader';
import './App.css';
import CoreRoutes from './routes';
import ToastProvider from './contexts/toastContext';
import AuthProvider from './contexts/authContext';
import UtilsProvider from './contexts/utilsContext';
import SocketProvider from './contexts/socketContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <ToastProvider>
      <AuthProvider>
        <UtilsProvider>
          <SocketProvider>
            <CoreRoutes />
          </SocketProvider>
        </UtilsProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
