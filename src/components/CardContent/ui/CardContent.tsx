import cls from './CardContent.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface ICardContentProps {
  className?: string;
}

export const CardContent = ({
  className,
}: ICardContentProps) => {
  return (
    <div className={classNames(cls.content, {}, [className ?? ''])}>
      <h2 className={classNames(cls.heading, {}, [])}>
        Преимущества и характеристики
      </h2>
      <div className={classNames(cls.mainText, {}, [])}>
        <p className={classNames(cls.text, {}, [])}>
          <span className={classNames(cls.span, {}, [])}>
            Мобильность -
          </span>
          — опциональный блок GS500 позволяет оснастить аппарат собственным
          источником сжатого воздуха на основе турбинной технологии, а опциональный
          блок PS500 повышает независимость аппарата от источников электроснабжения.
          Независимый блок транспортировки больших кислородных баллонов крепится к
          V500 за секунды. Функция технологии Infinity® ID «Перенос параметров вентиляции»
          упрощает подготовку к транспортировке, копируя параметры вентиляции через
          переключение дыхательного контура к другому аппарату V500.
        </p>
        <p className={classNames(cls.text, {}, [])}>
          <span className={classNames(cls.span, {}, [])}>
            Стандартизованность -
          </span>
          — система Infinity® поддерживает внутрибольничную стандартизацию с
          другим оборудованием, предоставляя дружественный пользовательский интерфейс,
          общий для всех продуктов Infinity Acute Care System®. Стандартизованные интерфейсы
          облегчают обмен данными, единые аксессуары увеличивают гибкость. Аппараты V500
          могут быть унифицированы в течении нескольких минут на основе созданной вами
          конфигурации, перенесенной на обычный USB-накопитель.
        </p>
      </div>
    </div>
  )
}