import { useEffect, useState, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './common/Loader';
import './App.css';
import Login from './pages/login';
import SignUp from './pages/SignUp';
import DefaultLayout from './layouts/DefaultLayout';
import Root from './pages/root';
import routes from './routes';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route index element={<Root />} />
        <Route element={<DefaultLayout />}>
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
