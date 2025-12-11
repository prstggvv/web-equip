import cls from './CardHeader.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import ImageF from '../../../shared/assets/images/Rectangle.jpg';

interface ICardHeader {
  className?: string;
}

export const CardHeader = ({ className }: ICardHeader) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.upper, {}, [])}>
          <div className={classNames(cls.imageWrapper, {}, [])}>
            <img
              className={classNames(cls.image, {}, [])}
              src={ImageF}
              alt='#'
            />
          </div>
        </div>
      </div>
    </section>
  )
}