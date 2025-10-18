import cls from './MainPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Header from '../../../components/Header/ui/Header';
import { NavTab } from '../../../components/NavTab';
import { HeroSection } from '../../../components/HeroSection';
import { Catalog } from '../../../components/Catalog';
import { AboutSection } from '../../../components/AboutSection/ui/AboutSection';
import { Sertificat } from '../../../components/Sertificat';
import { CompanysSection } from '../../../components/CompanysSection';
import { Footer } from '../../../components/Footer';

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
      <Footer />
    </div>
  );
};

export default MainPage;
