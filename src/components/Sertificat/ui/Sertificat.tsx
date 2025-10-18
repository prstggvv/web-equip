import cls from './Sertificat.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Sert from '../../../shared/assets/images/viper.png';

interface ISertificatProps {
  className?: string;
}

export const Sertificat = ({ className }: ISertificatProps) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <img 
          className={classNames(cls.image, {}, [])}
          src={Sert}
          alt='#'
        />
        <img 
          className={classNames(cls.image, {}, [])}
          src={Sert}
          alt='#'
        />
      </div>
    </section>
  )
}