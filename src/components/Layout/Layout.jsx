import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Container, ColorBox } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <ColorBox>
          <main>
            <Outlet />
          </main>
        </ColorBox>
        <Footer />
      </Container>
    </>
  );
};
