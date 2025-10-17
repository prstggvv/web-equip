import cls from './NavTab.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface INavTabProps {
  className?: string;
}

export const NavTab = ({ className }: INavTabProps) => {
  return (
    <div className={classNames(cls.navtab, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <nav className={classNames(cls.nav, {}, [])}>
          <a
            className={classNames(cls.link, {}, [])}
            href='#'
          >
            Главная
          </a>
          <a
            className={classNames(cls.link, {}, [])}
            href='#'
          >
            Оборудования
          </a>
          <a
            className={classNames(cls.link, {}, [])}
            href='#'
          >
            Материалы
          </a>
          <a
            className={classNames(cls.link, {}, [])}
            href='#'
          >
            О компании
          </a>
          <a
            className={classNames(cls.link, {}, [])}
            href='#'
          >
            Контакты
          </a>
        </nav>
      </div>
    </div>
  )
}