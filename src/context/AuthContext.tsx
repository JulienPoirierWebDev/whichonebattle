import { createContext } from "react";

type AuthContextType = {
  isAuth: boolean;
  loading: boolean;
  removeCookie: () => void;
  setToken?: (token: string) => void;
};

const defaultAuthContext: AuthContextType = {
  isAuth: false,
  setToken: () => {},
  loading: true,
  removeCookie: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export default AuthContext;
