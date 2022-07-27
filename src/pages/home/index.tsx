import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Container } from "./styles";
const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <div> {user?.username}</div>
    </Container>
  );
};

export default Home;
