import cls from './MainPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

const MainPage = () => {
  return (
    <div className={classNames(cls.MainPage, {}, [])}>
      <h1 className={classNames('title', {}, [])}>MainPage</h1>
    </div>
  );
};

export default MainPage;
