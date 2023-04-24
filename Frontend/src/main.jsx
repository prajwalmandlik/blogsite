import { ChakraProvider } from "@chakra-ui/react";
import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// export const server = "http://localhost:4000/api/v1";
export const server = "https://blogsite-backend-7j4k.onrender.com/api/v1";