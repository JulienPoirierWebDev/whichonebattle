import { createContext } from "react";

type AuthContextType = {
  isAuth: boolean;
  loading: boolean;
  removeCookie: () => void;
  setToken?: (token: string) => void;
  token?: string;
};

const defaultAuthContext: AuthContextType = {
  isAuth: false,
  setToken: () => {},
  loading: true,
  removeCookie: () => {},
  token: undefined,
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export default AuthContext;
