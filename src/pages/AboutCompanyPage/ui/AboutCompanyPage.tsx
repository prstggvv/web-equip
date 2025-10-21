import cls from './AboutCompanyPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { MainText } from '../../../components/AboutCompanyComponents/MainText';

interface IAboutCompanyPage {
  className?: string;
}

const AboutCompanyPage = ({ className }: IAboutCompanyPage) => {
  return (
    <main className={classNames(cls.content, {}, [className ?? ''])}>
      <MainText />
    </main>
  )
}

export default AboutCompanyPage;
