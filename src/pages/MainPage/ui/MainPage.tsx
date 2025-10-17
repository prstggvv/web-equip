import cls from './MainPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Header from '../../../components/Header/ui/Header';
import { NavTab } from '../../../components/NavTab';
import { HeroSection } from '../../../components/HeroSection';
import { Catalog } from '../../../components/Catalog';

const MainPage = () => {
  return (
    <div className={classNames(cls.main, {}, [])}>
      <Header />
      <NavTab />
      <HeroSection />
      <Catalog />
    </div>
  );
};

export default MainPage;
