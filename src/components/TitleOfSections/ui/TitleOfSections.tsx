import cls from './TitleOfSections.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface ITitleOfSectionsProps {
  className?: string;
  children: string;
}

export const TitleOfSections = ({ className, children }: ITitleOfSectionsProps) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <h1 className={classNames(cls.title, {}, [])}>
          {children}
        </h1>
      </div>
    </section>
  )
};