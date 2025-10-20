import { memo } from 'react';
import cls from './CatalogControls.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface CatalogControlsProps {
  view: 'grid' | 'list';
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const CatalogControls = memo(function CatalogControls(props: CatalogControlsProps) {
  const {
    page,
    totalPages,
    onPageChange,
  } = props;

  const pages = Array.from({ length: totalPages }).map((_, i) => i + 1);

  return (
    <div className={classNames(cls.controls, {}, [])}>
      <div className={cls.right}>
        <button
          type="button"
          className={cls.pageBtn}
          aria-label="Prev"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          <span className={cls.chevLeft} />
        </button>

        {pages.map((p) => (
          <button
            key={p}
            type="button"
            className={classNames(cls.pageNum, { [cls.pageActive]: p === page }, [])}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}

        <button
          type="button"
          className={cls.pageBtn}
          aria-label="Next"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          <span className={cls.chevRight} />
        </button>
      </div>
    </div>
  );
});
