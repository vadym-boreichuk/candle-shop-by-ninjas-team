import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Container } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Container>
        <Header />

        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  );
};
