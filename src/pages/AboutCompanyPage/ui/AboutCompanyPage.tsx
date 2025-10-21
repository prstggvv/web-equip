import cls from './AboutCompanyPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface IAboutCompanyPage {
  className?: string;
}

const AboutCompanyPage = ({ className }: IAboutCompanyPage) => {
  return (
    <main className={classNames(cls.content, {}, [className ?? ''])}>
      <h1>ORFORFJROFJ</h1>
    </main>
  )
}

export default AboutCompanyPage;
