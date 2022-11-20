import { Header, Container } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <h1>TicTacToe</h1>
      </Header>
      <Outlet />
      <footer>
        <a href="https://github.com/artemslt">git</a>
      </footer>
    </Container>
  );
};
export default SharedLayout;
