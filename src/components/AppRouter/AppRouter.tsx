import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/ui/MainPage";
import { CatalogPage } from "../../pages/CatalogPage";
import { CardPage } from "../../pages/CardPage";

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
        element={<CardPage />}
      />
    </Routes>
  );
};

export default AppRouter;
