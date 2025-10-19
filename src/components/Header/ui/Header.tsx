import cls from './Header.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import LogoImage from '../../../shared/assets/images/icons/logo.svg';
import Button from '../../../shared/ui/Button/Button';
import BurgerMenu from '../../../shared/ui/BurgerMenu/BurgerMenu';
import { useState, useCallback } from 'react';
import { NavMenu } from '../../NavMenu';

interface IHeaderProps {
  className?: string;
}

const Header = ({ className }: IHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setMenuOpen((prev) => !prev);
    }
  }, []);

  const handleNavLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

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
        <BurgerMenu 
          className={classNames(cls.burger, {}, [])}
          menuOpen={menuOpen}
          handleBurgerClick={handleBurgerClick}
          handleKeyDown={handleKeyDown}
        />
      </div>
      <NavMenu 
        open={menuOpen}
      />
    </header>
  );
};

export default Header;