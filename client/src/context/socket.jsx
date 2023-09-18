import { createContext, useContext } from "react";
import { io } from "socket.io-client";

const socket = io(process.env.REACT_APP_SOCKETIO_URL);

export const socketContext = createContext({ socket });
export const useSocket = () => useContext(socketContext);

const SocketProvider = ({ children }) => {
  return (
    <socketContext.Provider value={{ socket }}>
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;
