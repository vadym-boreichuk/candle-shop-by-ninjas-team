import { About } from "../../components/main/about/About";
import { Contact } from "../../components/main/contact/Contact";
import { Gallery } from "../../components/main/gallery/Galery";
import { Gifts } from "../../components/main/gifts/Gifts";
import { Hero } from "../../components/main/hero/Hero";
import { Novelty } from "../../components/main/novelty/Novelty";

import { Popular } from "../../components/main/popular/Popular";
import { Container } from "./MainPage.styled";

export const MainPage = () => {
  return (
    <Container>
      <Hero />
      <Novelty />
      <About />
      <Popular />
      <Gifts />
      <Gallery />
      <Contact />
    </Container>
  );
};
