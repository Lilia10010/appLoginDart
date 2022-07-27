import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services";

type User = {
  username: string;
};

type SignInCredentials = {
  username: string;
  password: string;
};

type AuthContextData = {
  SignIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user?: User;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const isAuthenticated = false;

  useEffect(() => {
    let token = localStorage.getItem("authToken");
    let username = localStorage.getItem("user");

    /* if (token) {
      console.log("response", response);
    } */
    if (username) {
      setUser({ username });
    }
  }, []);

  async function SignIn({ username, password }: SignInCredentials) {
    try {
      const response = await api.post("/auth/login", {
        headers: { "Content-Type": "application/json" },
        username,
        password,
      });
      const { token } = response.data;

      localStorage.setItem("authToken", token);
      localStorage.setItem("user", username);

      setUser({
        username,
      });
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ SignIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
