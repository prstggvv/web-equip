import cls from './HeroSection.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import ArrowImageSvg from '../../../shared/assets/images/icons/arrow.svg';
import ImageFr from '../../../shared/assets/images/Rectangle.jpg';
import Button from '../../../shared/ui/Button/Button';

interface IHeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className }: IHeroSectionProps) => {
  return (
    <section className={classNames(cls.hero, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.info, {}, [])}>
          <div className={classNames(cls.texts, {}, [])}>
            <h1 className={classNames(cls.title, {}, [])}>
              Лучшая Экипировка
            </h1>
            <p className={classNames(cls.subtitle, {}, [])}>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa.
            </p>
          </div>
          <Button 
            className={classNames(cls.button, {}, [])}
            type='button'
            children='Узнать больше'
          />
        </div>
        <div className={classNames(cls.group, {}, [])}>
          <div className={classNames(cls.groupCircles, {}, [])}>
            <div className={classNames(cls.firstCircle, {}, [])}>
              <div className={classNames(cls.secondCircle, {}, [])}>
                <img 
                  className={classNames(cls.image, {}, [])}
                  src={ImageFr}
                  alt='#'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
