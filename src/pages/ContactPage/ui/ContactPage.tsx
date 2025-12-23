import cls from './ContactPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { MapComponent } from '../../../components/Map';
import { ContactForm } from '../../../components/ContactForm';

interface IContactPageProps {
  className?: string;
}

const ContactPage = ({ className }: IContactPageProps) => {
  return (
    <main className={classNames(cls.content, {}, [className ?? ''])}>
      <MapComponent />
      <ContactForm />
    </main>
  )
};

export default ContactPage;
