import { memo } from 'react';
import cls from './Cards.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { ProductCard } from '../../ProductCard/ui/ProductCard';
import type { ProductItem } from '../../ProductCard/ui/ProductCard';

interface CardsProps {
  items: ProductItem[];
  view?: 'grid' | 'list';
  onDetails?: (item: ProductItem) => void;
  onConsult?: (item: ProductItem) => void;
}

export const Cards = memo(function Cards(props: CardsProps) {
  const { items, view = 'grid', onDetails, onConsult } = props;

  return (
    <section className={classNames(cls.cards, { [cls.list]: view === 'list' }, [])}>
      {items.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          view={view}
          onDetails={onDetails}
          onConsult={onConsult}
        />
      ))}
    </section>
  );
});


