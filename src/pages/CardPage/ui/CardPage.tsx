import cls from './CardPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { CardBody } from '../../../components/CardBody';

const CardPage = () => {
  return (
    <main className={classNames(cls.content, {}, [])}>
      <CardBody />
    </main>
  )
};

export default CardPage;
