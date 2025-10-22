import cls from './MainText.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { advantagesTextData } from '../model/advantagesTextData';

interface IMainTextProps {
  className?: string;
}
export const MainText = ({ className }: IMainTextProps) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.block, {}, [])}>
          <h2 className={classNames(cls.heading, {}, [])}>
            Стандарты оснащения
          </h2>
          <p className={classNames(cls.text, {}, [])}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in 
            hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu 
            feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui.
          </p>
        </div>
        <div className={classNames(cls.advantages, {}, [])}>
          <h3 className={classNames(cls.heading, {}, [])}>Наше преимущество</h3>
          <ul className={classNames(cls.list, {}, [])}>
            {advantagesTextData.map((c, i) => (
              <li
                className={classNames(cls.item, {}, [])}
                key={i}  
              >
                <h3 className={classNames(cls.number, {}, [])}>{c.number}</h3>
                <p className={classNames(cls.text, {}, [])}>{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}