import cls from './Footer.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { footerLinkData } from '../model/footerLinkData';

interface IFooterProps {
  className?: string;
}
export const Footer = ({ className }: IFooterProps) => {
  return (
    <footer className={classNames(cls.footer, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.upper, {}, [])}>
          <div className={classNames(cls.mainInfo, {}, [])}>
            <h2 className={classNames(cls.title, {}, [])}>
              Medical Equip
            </h2>
            <p className={classNames(cls.text, {}, [])}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt.
            </p>
            <ul className={classNames(cls.social, {}, [])}>
              {footerLinkData.map((c, i) => (
                <li
                  className={classNames(cls.item, {}, [])}
                  key={i}
                >
                  <a
                    className={classNames(cls.href, {}, [])}
                    href={c.link}
                  >
                    <img
                      className={classNames(cls.svg, {}, [])}
                      alt='логотип соц сети'
                      src={c.image}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={classNames(cls.line, {}, [])}></div>
          <div className={classNames(cls.blocks, {}, [])}>
            <h3 className={classNames(cls.heading, {}, [])}>
              Оборудование
            </h3>
            <div className={classNames(cls.block, {}, [])}>
              <p className={classNames(cls.text, {}, [cls.nonLight])}>
                Lorem ipsum
              </p>
              <p className={classNames(cls.text, {}, [cls.nonLight])}>
                Lorem ipsum
              </p>
              <p className={classNames(cls.text, {}, [cls.nonLight])}>
                Lorem ipsum
              </p>
            </div>
          </div>
          <div className={classNames(cls.line, {}, [])}></div>
          <div className={classNames(cls.blocks, {}, [])}>
            <h3 className={classNames(cls.heading, {}, [])}>
              Информация
            </h3>
            <div className={classNames(cls.block, {}, [])}>
              <p className={classNames(cls.text, {}, [cls.nonLight])}>
                О компании
              </p>
              <p className={classNames(cls.text, {}, [cls.nonLight])}>
                Контакты
              </p>
            </div>
          </div>
          <div className={classNames(cls.line, {}, [])}></div>
          <div className={classNames(cls.blocks, {}, [])}>
            <h3 className={classNames(cls.heading, {}, [])}>
              Контакты
            </h3>
            <div className={classNames(cls.block, {}, [])}>
              <p className={classNames(cls.text, {}, [cls.nonLight])}>
                +7 978 000 00 00
              </p>
              <p className={classNames(cls.text, {}, [cls.nonLight])}>
                van@mail.ru
              </p>
              <p className={classNames(cls.text, {}, [cls.nonLight])}>
                6116 Willa River Suite 610
              </p>
            </div>
          </div>
        </div>
        <div className={classNames(cls.lineMain, {}, [])}>

        </div>
        <div className={classNames(cls.lower, {}, [])}>
          <p className={classNames(cls.text, {}, [])}>Duis autem vel eum</p>
          <p className={classNames(cls.text, {}, [])}>©2021 - Form  |   All right reserved</p>
        </div>
      </div>
    </footer>
  )
}