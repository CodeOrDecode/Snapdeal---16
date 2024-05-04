import React from "react";
import { useState } from "react";

export const Authcontext = React.createContext();

const Authcontextprovider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  function handlesignupauth() {
    setAuth(true);
  }

  function handleloginauth() {
    setAuth(true);
  }

  function handlelogoutauth() {
    setAuth(false);
  }

  return (
    <Authcontext.Provider
      value={{ auth, handlesignupauth, handleloginauth, handlelogoutauth }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default Authcontextprovider;
