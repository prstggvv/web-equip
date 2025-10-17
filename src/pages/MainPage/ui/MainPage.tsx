import cls from './MainPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Header from '../../../components/Header/ui/Header';
import { NavTab } from '../../../components/NavTab';

const MainPage = () => {
  return (
    <div className={classNames(cls.main, {}, [])}>
      <Header />
      <NavTab />
    </div>
  );
};

export default MainPage;
