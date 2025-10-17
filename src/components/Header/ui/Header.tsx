import cls from './Header.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import LogoImage from '../../../shared/assets/images/icons/logo.svg';
import Button from '../../../shared/ui/Button/Button';

interface IHeaderProps {
  className?: string;
}

const Header = ({ className }: IHeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <img 
          className={classNames(cls.logo, {}, [])}
          alt='логотип'
          src={LogoImage}
        />
        <div className={classNames(cls.mainInfo, {}, [])}>
          <ul className={classNames(cls.list, {}, [])}>
            <li className={classNames(cls.card, {}, [])}>
              <p className={classNames(cls.text, {}, [])}>
                Почта: <span className={classNames(cls.span, {}, [])}>
                  vany4golos@yandex.ru
                </span>
              </p>
            </li>
            <li className={classNames(cls.card, {}, [])}>
              <p className={classNames(cls.text, {}, [])}>
                Телефон: <span className={classNames(cls.span, {}, [])}>
                  +7 800 888 88 88
                </span>
              </p>
            </li>
          </ul>
          <Button 
            type='button'
            children='Оставить заявку'
            className={classNames(cls.button, {}, [])}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;