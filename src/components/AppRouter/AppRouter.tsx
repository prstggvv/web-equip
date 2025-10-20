import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/ui/MainPage";
import { CatalogPage } from "../../pages/CatalogPage";

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
    </Routes>
  );
};

export default AppRouter;
