import { FormEvent, useContext, useState } from "react";
import Logo from "../../../src/assets/logodart.png";
import ImageLogin from "../../../src/assets/imagelogin.jpeg";
import { Button, Hidden } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { SignIn } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const data = {
      username,
      password,
    };

    console.log("data", SignIn);

    await SignIn(data);
  }
  return (
    <Box>
      <Box
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Hidden smDown>
          <Box sx={{ width: "100%" }}>
            <img
              src={ImageLogin}
              alt="imagem de login"
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </Box>
        </Hidden>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 500,
            width: "100%",
            m: 4,
          }}
        >
          <img style={{ width: 210, height: 118 }} alt="logo" src={Logo} />
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <TextField
                id="outlined-basic"
                label="Usuário *"
                variant="outlined"
                sx={{ mb: 4, mt: 8 }}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                type="password"
                label="Senha *"
                variant="outlined"
                sx={{ mb: 4 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#f58226",
                  ":hover": {
                    bgcolor: "#b45201", // theme.palette.primary.main
                  },
                }}
              >
                Continuar
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
