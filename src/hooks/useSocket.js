import { useContext } from 'react';

import { SocketContext } from '../contexts/socketContext';

const useSocket = () => {
  const context = useContext(SocketContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useSocket;
