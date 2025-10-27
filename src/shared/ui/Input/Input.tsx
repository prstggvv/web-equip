import { forwardRef } from 'react';
import type { ChangeEvent, FC } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Input.module.css';

interface InputProps {
  className?: string;
  type: 'text' | 'number' | 'email';
  placeholder: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  error: boolean;
  errorText: string;
  ref?: any,
  onIconClick?: () => void;
  icon?: string;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  placeholder,
  onChange,
  value,
  name,
  error,
  errorText,
  icon,
}, ref) => {
  return (
    <label className={classNames(cls.label, {}, [className ?? ''])}>
      <img 
        className={classNames(cls.svg, {}, [])}
        alt='#'
        src={icon}
      />
      <input
        className={classNames(cls.input, { [cls.errorInput]: error }, [])}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        ref={ref}
      />
      {error && <span className={classNames(cls.errorText, {}, [])}>{errorText}</span>}
    </label>
  );
});