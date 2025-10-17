import cls from './Catalog.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Button from '../../../shared/ui/Button/Button';
import ImageI from '../../../shared/assets/images/Rectangle.jpg';

export const Catalog = () => {
  return (
    <section className={classNames(cls.catalog, {}, [])}>
      <div className={classNames(cls.container, {}, [])}>
        <ul className={classNames(cls.list, {}, [])}>
          <li className={classNames(cls.card, {}, [])}>
            <div className={classNames(cls.info, {}, [])}>
              <div className={classNames(cls.texts, {}, [])}>
                <h2 className={classNames(cls.heading, {}, [])}>
                  Duis autem vel
                </h2>
                <p className={classNames(cls.subtitle, {}, [])}>
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Eum iriure!
                </p>
              </div>
              <Button 
                className={classNames(cls.button, {}, [])}
                type='button'
                children='Подробнее'
              />
            </div>
            <img 
              className={classNames(cls.image, {}, [])}
              src={ImageI}
              alt='#'
            />
          </li>
          <li className={classNames(cls.card, {}, [])}>
            <div className={classNames(cls.info, {}, [])}>
              <div className={classNames(cls.texts, {}, [])}>
                <h2 className={classNames(cls.heading, {}, [])}>
                  Duis autem vel
                </h2>
                <p className={classNames(cls.subtitle, {}, [])}>
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Eum iriure!
                </p>
              </div>
              <Button 
                className={classNames(cls.button, {}, [])}
                type='button'
                children='Подробнее'
              />
            </div>
            <img 
              className={classNames(cls.image, {}, [])}
              src={ImageI}
              alt='#'
            />
          </li>
          <li className={classNames(cls.card, {}, [])}>
            <div className={classNames(cls.info, {}, [])}>
              <div className={classNames(cls.texts, {}, [])}>
                <h2 className={classNames(cls.heading, {}, [])}>
                  Duis autem vel
                </h2>
                <p className={classNames(cls.subtitle, {}, [])}>
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Eum iriure!
                </p>
              </div>
              <Button 
                className={classNames(cls.button, {}, [])}
                type='button'
                children='Подробнее'
              />
            </div>
            <img 
              className={classNames(cls.image, {}, [])}
              src={ImageI}
              alt='#'
            />
          </li>
          <li className={classNames(cls.card, {}, [])}>
            <div className={classNames(cls.info, {}, [])}>
              <div className={classNames(cls.texts, {}, [])}>
                <h2 className={classNames(cls.heading, {}, [])}>
                  Duis autem vel
                </h2>
                <p className={classNames(cls.subtitle, {}, [])}>
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Eum iriure!
                </p>
              </div>
              <Button 
                className={classNames(cls.button, {}, [])}
                type='button'
                children='Подробнее'
              />
            </div>
            <img 
              className={classNames(cls.image, {}, [])}
              src={ImageI}
              alt='#'
            />
          </li>
        </ul>
      </div>
    </section>
  )
}