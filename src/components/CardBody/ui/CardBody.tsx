import cls from './CardBody.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import MainImage from '../../../shared/assets/images/Rectangle.jpg';
import Button from '../../../shared/ui/Button/Button';
import { CardContent } from '../../CardContent/ui/CardContent';

export const CardBody = () => {
  return (
    <section className={classNames(cls.section, {}, [])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.upperInfo, {}, [])}>
          <div className={classNames(cls.imageWrapper, {}, [])}>
            <img
              className={classNames(cls.image, {}, [])}
              alt='#'
              src={MainImage}
            />
          </div>
          <div className={classNames(cls.textInfo, {}, [])}>
            <div className={classNames(cls.titles, {}, [])}>
              <h2 className={classNames(cls.title, {}, [])}>
                Аппарат ИВЛ Dräger Evita Infinity V500
              </h2>
              <p className={classNames(cls.subtitle, {}, [])}>
                Аппарат ИВЛ Dräger Evita Infinity V500 — оборудование экстра-класса,
                предназначенное  для пациентов всех категорий с любой формой дыхательной
                недостаточности. Аппарат обладает уникальной возможностью интеграции в систему
                Infinity® Acute Care System™. Dräger Evita Infinity V500 реализует
                интеллектуальные и инновационные режимы и функции, в том числе Variable
                Pressure Support, SmartCare/PS, Low Flow P/V Loop и другие. Специальные
                функции позволяют достичь максимального эффекта от респираторной терапии
                быстро и с минимальным риском осложнений.
              </p>
            </div>
            <div className={classNames(cls.buttonLine, {}, [])}>
              <Button
                className={classNames(cls.button, {}, [])}
                type='button'
                children='Узнать больше'
              />
              <div className={classNames(cls.line, {}, [])}></div>
            </div>
            <div className={classNames(cls.mainList, {}, [])}>
              <h3 className={classNames(cls.heading, {}, [])}>
                Основные характеристики:
              </h3>
              <ul className={classNames(cls.list, {}, [])}>
                <li className={classNames(cls.item, {}, [])}>
                  <p className={classNames(cls.text, {}, [])}>
                    <span className={classNames(cls.span, {}, [])}>
                      Тип привода
                    </span>{'\u00A0'}- электрический
                  </p>
                </li>
                <li className={classNames(cls.item, {}, [])}>
                  <p className={classNames(cls.text, {}, [])}>
                    <span className={classNames(cls.span, {}, [])}>
                      Тип вентиляции
                    </span>{'\u00A0'}- неинвазивный
                  </p>
                </li>
                <li className={classNames(cls.item, {}, [])}>
                  <p className={classNames(cls.text, {}, [])}>
                    <span className={classNames(cls.span, {}, [])}>
                      Тип аппарата
                    </span>{'\u00A0'}- стационарный
                  </p>
                </li>
                <li className={classNames(cls.item, {}, [])}>
                  <p className={classNames(cls.text, {}, [])}>
                    <span className={classNames(cls.span, {}, [])}>
                      Высококачественная вентиляция
                    </span>{'\u00A0'}- нет
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <CardContent />
      </div>
    </section>
  )
}