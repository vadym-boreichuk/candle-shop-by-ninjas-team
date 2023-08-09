import { About } from "../../componets/main/about/About";
import { Contact } from "../../componets/main/contact/Contact";
import { Gallery } from "../../componets/main/gallery/Galery";
import { Gifts } from "../../componets/main/gifts/Gifts";
import { Hero } from "../../componets/main/hero/Hero";
import { Popular } from "../../componets/main/popular/Popular";

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
