import {
  type ChangeEvent,
  type FormEvent,
} from 'react';
import cls from './ContactForm.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import UserImage from '../../../shared/assets/images/icons/contact/User.svg';
import PhoneImage from '../../../shared/assets/images/icons/contact/PhoneLight.svg';
import EmailImage from '../../../shared/assets/images/icons/contact/EmailLight.svg';
import { useValidation } from '../../../shared/lib/hooks/useValidation';
import { Input } from '../../../shared/ui/Input/Input';
import Button from '../../../shared/ui/Button/Button';

interface IContactForm {
  className?: string;
}

export const ContactForm = ({ className }: IContactForm) => {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useValidation({});
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  }

  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.titles, {}, [])}>
          <h2 className={classNames(cls.title, {}, [])}>
            Оставить заявку
          </h2>
          <p className={classNames(cls.text, {}, [])}>
            Duis autem vel eum iriure dolor in hendrerit
            in vulputate velit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis
          </p>
        </div>
        <form
          className={classNames(cls.form, {}, [])}
          onSubmit={handleSubmit}
        >
          <div className={classNames(cls.inputs, {}, [])}>
            <Input
              type='text'
              placeholder='Имя'
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              value={values.name || ''}
              name='name'
              error={Object.prototype.hasOwnProperty.call(errors, 'name')}
              errorText={errors.name || ''}
              icon={UserImage}
            />
            <Input
              type='number'
              placeholder='Телефон'
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              value={values.number || ''}
              name='number'
              error={Object.prototype.hasOwnProperty.call(errors, 'number')}
              errorText={errors.number || ''}
              icon={PhoneImage}
            />
            <Input
              type='email'
              placeholder='E-mail'
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              value={values.email || ''}
              name='email'
              error={Object.prototype.hasOwnProperty.call(errors, 'email')}
              errorText={errors.email || ''}
              icon={EmailImage}
            />
          </div>
          <Button 
            className={classNames(cls.button, {}, [])}
            type='submit'
            children='Отправить'
          />
        </form>
      </div>
    </section>
  )
}