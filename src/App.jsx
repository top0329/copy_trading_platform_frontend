import { useEffect, useState } from 'react';

import Loader from './common/Loader';
import './App.css';
import CoreRoutes from './routes';
import ToastProvider from './contexts/toastContext';
import AuthProvider from './contexts/authContext';
import UtilsProvider from './contexts/utilsContext';

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
          <CoreRoutes />
        </UtilsProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
