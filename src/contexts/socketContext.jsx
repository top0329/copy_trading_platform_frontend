import { createContext } from 'react';
import io from 'socket.io-client';

export const SocketContext = createContext();

// eslint-disable-next-line react/display-name, react/prop-types
const SocketProvider = ({ children }) => {
  const socket = io('http://localhost:5000', { transports: ['websocket'] });

  return (
    <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
