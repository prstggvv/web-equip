import cls from './MainPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Header from '../../../components/Header/ui/Header';
import { NavTab } from '../../../components/NavTab';
import { HeroSection } from '../../../components/HeroSection';
import { Catalog } from '../../../components/Catalog';
import { AboutSection } from '../../../components/AboutSection/ui/AboutSection';
import { Sertificat } from '../../../components/Sertificat';
import { CompanysSection } from '../../../components/CompanysSection';

const MainPage = () => {
  return (
    <div className={classNames(cls.main, {}, [])}>
      <Header />
      <NavTab />
      <HeroSection />
      <CompanysSection />
      <Catalog />
      <AboutSection />
      <Sertificat />
    </div>
  );
};

export default MainPage;
