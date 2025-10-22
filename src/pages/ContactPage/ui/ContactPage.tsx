import cls from './ContactPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface IContactPageProps {
  className?: string;
}

const ContactPage = ({ className }: IContactPageProps) => {
  return (
    <main className={classNames(cls.content, {}, [className ?? ''])}>

    </main>
  )
};

export default ContactPage;
