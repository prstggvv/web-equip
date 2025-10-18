import cls from './AboutSection.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Button from '../../../shared/ui/Button/Button';

interface IAboutSection {
  className?: string;
}

export const AboutSection = ({ className }: IAboutSection) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.mainBlock, {}, [])}>
          <div className={classNames(cls.titles, {}, [])}>
            <p className={classNames(cls.uptitle, {}, [])}>
              О Компании
            </p>
            <h2 className={classNames(cls.title, {}, [])}>
              Quam adipisci velit, sed quia numquam eius modi tempora incidunt!
            </h2>
          </div>
          <p className={classNames(cls.text, {}, [])}>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit,
            aspernatur aut odit aut fugit, sed quia est, qui dolorem ipsum.
          </p>
        </div>
        <Button 
          type='button'
          className={classNames(cls.button, {}, [])}
          children='Узнать больше'
        />
      </div>
    </section>
  )
}