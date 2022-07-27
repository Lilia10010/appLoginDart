import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Container } from "./styles";
const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <h3>Olá {user?.username} :)</h3>
    </Container>
  );
};

export default Home;
