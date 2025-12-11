import cls from './CardBody.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

export const CardBody = () => {
  return (
    <section className={classNames(cls.section, {}, [])}>
      <div className={classNames(cls.container, {}, [])}>

      </div>
    </section>
  )
}