import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const socketContext = createContext(null);
export const useSocket = () => useContext(socketContext);

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(() =>
    io(process.env.REACT_APP_SOCKETIO_URL)
  );

  // useEffect(() => {
  //   socket.on("disconnect", () => {
  //     console.log("socket disconnected: ", socket.id);
  //   });
  //   socket.on("connection", () => {
  //     console.log("socket connected: ", socket.id);
  //   });
  // }, [socket]);

  return (
    <socketContext.Provider value={{ socket }}>
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;
