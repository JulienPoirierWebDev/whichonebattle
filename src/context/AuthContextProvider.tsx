import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { deleteCookie, getOneCookie } from "../utils/capacitor/cookies";

type Props = {
  children?: React.ReactNode;
};

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = useState<undefined | string>(getOneCookie("token"));
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  const removeCookie = () => {
    deleteCookie("token");
    setToken(undefined);
    setIsAuth(false);
  };

  const value = {
    isAuth,
    loading,
    removeCookie,
    setToken,
    token,
  };
  useEffect(() => {
    if (token !== undefined) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    setLoading(false);
  }, [token]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
