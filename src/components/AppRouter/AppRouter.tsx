import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/ui/MainPage";
import Header from "../Header/ui/Header";
import { NavTab } from "../NavTab";
import { AboutCompanyPage } from "../../pages/AboutCompanyPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route 
        path='/'
        element={<MainPage />}
      />
      <Route 
        path='/about'
        element={
          <>
            <Header />
            <NavTab />
            <AboutCompanyPage />
          </>
        }
      />
    </Routes>
  );
};

export default AppRouter;
