import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/ui/MainPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route 
        path='/'
        element={<MainPage />}
      />
    </Routes>
  );
};

export default AppRouter;
