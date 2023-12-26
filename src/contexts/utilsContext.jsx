import { createContext, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

export const UtilsContext = createContext({
  until: Date,
});

// eslint-disable-next-line react/display-name, react/prop-types
const UtilsProvider = ({ children }) => {
  const [ids, setIds] = useState([]);

  return (
    <UtilsContext.Provider value={{ ids, setIds }}>
      {children}
    </UtilsContext.Provider>
  );
};

export default UtilsProvider;
