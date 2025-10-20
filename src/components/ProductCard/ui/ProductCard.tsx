import { memo, useMemo } from 'react';
import cls from './ProductCard.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

export interface ProductItem {
  id: string;
  imageUrl: string;
  manufacturer: string;
  title: string;
  price: number;
  description: string;
  type?: string;
}

interface ProductCardProps {
  item: ProductItem;
  onDetails?: (item: ProductItem) => void;
  onConsult?: (item: ProductItem) => void;
  view?: 'grid' | 'list';
}

export const ProductCard = memo(function ProductCard(props: ProductCardProps) {
  const { item, onDetails, onConsult, view = 'grid' } = props;

  const formattedPrice = useMemo(() =>
    new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(item.price),
  [item.price]);

  return (
    <article className={classNames(cls.card, { [cls.list]: view === 'list' }, [])}>
      <div className={cls.imageWrap}>
        <img src={item.imageUrl} alt={item.title} loading="lazy" className={cls.image} />
      </div>
      <div className={cls.content}>
        <div className={cls.meta}>
          <span className={cls.manufacturer}>{item.manufacturer}</span>
          <h3 className={cls.title}>{item.title}</h3>
        </div>
        {view === 'list' && (
          <p className={cls.description}>{item.description}</p>
        )}
        <div className={classNames(cls.footer, {[cls.lis]: view === 'grid'}, [])}>
          <span className={cls.price}>{formattedPrice}</span>
          <div className={cls.actions}>
            <button type="button" className={cls.button} onClick={() => onDetails?.(item)}>Подробнее</button>
            <button type="button" className={classNames(cls.button, { [cls.secondary]: true }, [])} onClick={() => onConsult?.(item)}>Консультация</button>
          </div>
        </div>
      </div>
    </article>
  );
});


