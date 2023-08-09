import { Route, Routes } from "react-router-dom";

import { Layout } from "./componets/Layout/Layout.jsx";
import { MainPage } from "./pages/Main/MainPage.js";
import { CatalogPage } from "./pages/Catalog/CatalogPage.js";
import { AboutBrandPage } from "./pages/AboutBrand/AboutBrandPage.js";
import { PackingPage } from "./pages/Packing/PackingPage.js";
import { ContactsPage } from "./pages/Contacts/ContactsPage.js";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/about" element={<AboutBrandPage />} />
        <Route path="/packing" element={<PackingPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
