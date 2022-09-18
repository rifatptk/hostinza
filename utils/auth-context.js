import React, {createContext} from "react";

// set the defaults
const AuthContext =  createContext({
  user: {},
  setUser: () => {}
});

export default AuthContext;
