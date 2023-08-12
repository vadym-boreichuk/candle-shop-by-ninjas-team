import { About } from "../../components/main/about/About";
import { Contact } from "../../components/main/contact/Contact";
import { Gallery } from "../../components/main/gallery/Galery";
import { Gifts } from "../../components/main/gifts/Gifts";
import { Hero } from "../../components/main/hero/Hero";
import { Popular } from "../../components/main/popular/Popular";

export const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Popular />
      <Gifts />
      <Gallery />
      <Contact />
    </>
  );
};
