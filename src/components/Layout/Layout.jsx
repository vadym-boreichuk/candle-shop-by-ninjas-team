import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Container, ColorBox } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Header />
      <ColorBox>
        <Container>
          <main>
            <Outlet />
          </main>
        </Container>
      </ColorBox>
      <Footer />
    </>
  );
};
