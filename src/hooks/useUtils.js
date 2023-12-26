import { useContext } from 'react';

import { UtilsContext } from '../contexts/utilsContext';

const useUtils = () => {
  const context = useContext(UtilsContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useUtils;
