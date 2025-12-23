import cls from './Map.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { imageListData } from '../model/imageListData';
import MapImage from '../../../shared/assets/images/map.jpg';

interface IMapProps {
  className?: string;
}

export const MapComponent = ({ className }: IMapProps) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.mainInfo, {}, [])}>
          <div className={classNames(cls.titles, {}, [])}>
            <h2 className={classNames(cls.title, {}, [])}>
              Наш офис
            </h2>
            <div className={classNames(cls.lines, {}, [])}>
              <div className={classNames(cls.line, {}, [])}></div>
            </div>
          </div>
          <ul className={classNames(cls.list, {}, [])}>
            {imageListData.map((c, i) => (
              <li
                className={classNames(cls.item, {}, [])}
                key={i}
              >
                <img 
                  className={classNames(cls.svg, {}, [])}
                  alt='иконка сети'
                  src={c.image}
                />
                <p className={classNames(cls.text, {}, [])}>{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={classNames(cls.imageBlock, {}, [])}>
          <div className={classNames(cls.imageWrapper, {}, [])}>
            <img 
              className={classNames(cls.image, {}, [])}
              alt='#'
              src={MapImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}