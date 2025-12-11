import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/ui/MainPage";
import { CatalogPage } from "../../pages/CatalogPage";
import { CardPage } from "../../pages/CardPage";
import Header from "../Header/ui/Header";
import { NavTab } from "../NavTab";
import { Footer } from "../Footer";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<MainPage />}
      />
      <Route
        path='/catalog'
        element={<CatalogPage />}
      />
      <Route
        path='/card'
        element={
          <>
            <Header />
            <NavTab />
            <CardPage />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default AppRouter;
