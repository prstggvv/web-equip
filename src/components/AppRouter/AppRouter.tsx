import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/ui/MainPage";
import Header from "../Header/ui/Header";
import { NavTab } from "../NavTab";
import { AboutCompanyPage } from "../../pages/AboutCompanyPage";
import { TitleOfSections } from "../TitleOfSections";
import { Footer } from "../Footer";
import { ContactPage } from "../../pages/ContactPage";

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
            <TitleOfSections 
              children='О компании'
            />
            <AboutCompanyPage />
            <Footer />
          </>
        }
      />
      <Route 
        path='/contact'
        element={
          <>
            <Header />
            <NavTab />
            <TitleOfSections 
              children='Контакты'
            />
            <ContactPage />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default AppRouter;
