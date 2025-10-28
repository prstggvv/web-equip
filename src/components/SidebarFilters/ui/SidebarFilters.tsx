import { memo } from 'react';
import cls from './SidebarFilters.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface SidebarFiltersProps {
  manufacturers: string[];
  types: string[];
  query: string;
  selectedManufacturers: string[];
  selectedTypes: string[];
  onQueryChange: (q: string) => void;
  onToggleManufacturer: (m: string) => void;
  onToggleType: (t: string) => void;
  onApplyFilters: () => void;
  className?: string;
}

export const SidebarFilters = memo(function SidebarFilters(props: SidebarFiltersProps) {
  const {
    manufacturers,
    types,
    query,
    selectedManufacturers,
    selectedTypes,
    onQueryChange,
    onToggleManufacturer,
    onToggleType,
    onApplyFilters,
    className,
  } = props;

  return (
    <aside className={classNames(cls.sidebar, {}, [className ?? ''])}>
      <div className={cls.block}>
        <label className={cls.label} htmlFor="search">Поиск</label>
        <input
          id="search"
          className={cls.input}
          type="search"
          placeholder="Название или производитель"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>

      <div className={cls.block}>
        <div className={cls.label}>Производители</div>
        <div className={cls.checklist}>
          {manufacturers.map((m) => {
            const checked = selectedManufacturers.includes(m);
            return (
              <label key={m} className={cls.checkboxRow}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggleManufacturer(m)}
                />
                <span className={cls.text}>{m}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className={cls.block}>
        <div className={cls.label}>Типы</div>
        <div className={cls.typeChips}>
          {types.map((t) => {
            const checked = selectedTypes.includes(t);
            return (
              <button
                key={t}
                type="button"
                className={classNames(cls.typeChip, { [cls.typeActive]: checked }, [])}
                onClick={() => onToggleType(t)}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className={cls.footerButtons}>
        <button
          type="button"
          className={cls.resetBtn}
          onClick={() => {
            onQueryChange('');
            selectedManufacturers.forEach(m => onToggleManufacturer(m));
            selectedTypes.forEach(t => onToggleType(t));
            onApplyFilters();
          }}
        >
          Сбросить
        </button>

        <button
          type="button"
          className={cls.applyBtn}
          onClick={onApplyFilters}
        >
          Найти
        </button>
      </div>
    </aside>
  );
});
