import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout.jsx";
import { MainPage } from "./pages/Main/MainPage.js";
import { CatalogPage } from "./pages/Catalog/CatalogPage.js";
import { AboutBrandPage } from "./pages/AboutBrand/AboutBrandPage.js";
import { PackingPage } from "./pages/Packing/PackingPage.js";
import { ContactsPage } from "./pages/Contacts/ContactsPage.js";
import { UserPage } from "./pages/UserPage/UserPage.js";
import { CartPage } from "./pages/CartPage/CartPage.js";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage.js";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/about" element={<AboutBrandPage />} />
        <Route path="/packing" element={<PackingPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/favorite" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/user" element={<UserPage />} />
      </Route>
    </Routes>
  );
};
