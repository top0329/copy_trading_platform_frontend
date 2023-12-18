import { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastContext = createContext();

// eslint-disable-next-line react/display-name, react/prop-types
const ToastProvider = ({ children }) => {
  const showToast = (str, type) => {
    switch (type) {
      case 'success':
        return toast.success(str, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      case 'error':
        return toast.error(str, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
