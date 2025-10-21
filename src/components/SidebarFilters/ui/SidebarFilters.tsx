import { memo, useState } from 'react';
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
  isMobile?: boolean;
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
    isMobile = false,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempQuery, setTempQuery] = useState(query);
  const [tempManufacturers, setTempManufacturers] = useState(selectedManufacturers);
  const [tempTypes, setTempTypes] = useState(selectedTypes);

  const handleApply = () => {
    onQueryChange(tempQuery);
    tempManufacturers.forEach(m => {
      if (!selectedManufacturers.includes(m)) onToggleManufacturer(m);
    });
    selectedManufacturers.forEach(m => {
      if (!tempManufacturers.includes(m)) onToggleManufacturer(m);
    });
    tempTypes.forEach(t => {
      if (!selectedTypes.includes(t)) onToggleType(t);
    });
    selectedTypes.forEach(t => {
      if (!tempTypes.includes(t)) onToggleType(t);
    });
    onApplyFilters();
    setIsModalOpen(false);
  };

  const handleReset = () => {
    setTempQuery('');
    setTempManufacturers([]);
    setTempTypes([]);
  };

  if (isMobile) {
    return (
      <>
        <button
          type="button"
          className={cls.mobileToggle}
          onClick={() => setIsModalOpen(true)}
        >
          Каталог
        </button>
        
        {isModalOpen && (
          <div className={cls.modalOverlay} onClick={() => setIsModalOpen(false)}>
            <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={cls.modalHeader}>
                <h3 className={cls.modalTitle}>Фильтры</h3>
                <button
                  type="button"
                  className={cls.modalClose}
                  onClick={() => setIsModalOpen(false)}
                >
                  ×
                </button>
              </div>
              
              <div className={cls.modalBody}>
                <div className={cls.block}>
                  <label className={cls.label} htmlFor="search">Поиск</label>
                  <input
                    id="search"
                    className={cls.input}
                    type="search"
                    placeholder="Название или производитель"
                    value={tempQuery}
                    onChange={(e) => setTempQuery(e.target.value)}
                  />
                </div>

                <div className={cls.block}>
                  <div className={cls.label}>Производители</div>
                  <div className={cls.checklist}>
                    {manufacturers.map((m) => {
                      const checked = tempManufacturers.includes(m);
                      return (
                        <label key={m} className={cls.checkboxRow}>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => {
                              if (checked) {
                                setTempManufacturers(prev => prev.filter(x => x !== m));
                              } else {
                                setTempManufacturers(prev => [...prev, m]);
                              }
                            }}
                          />
                          <span>{m}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className={cls.block}>
                  <div className={cls.label}>Типы</div>
                  <div className={cls.typeChips}>
                    {types.map((t) => {
                      const checked = tempTypes.includes(t);
                      return (
                        <button
                          key={t}
                          type="button"
                          className={classNames(cls.typeChip, { [cls.typeActive]: checked }, [])}
                          onClick={() => {
                            if (checked) {
                              setTempTypes(prev => prev.filter(x => x !== t));
                            } else {
                              setTempTypes(prev => [...prev, t]);
                            }
                          }}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className={cls.modalFooter}>
                <button
                  type="button"
                  className={cls.resetBtn}
                  onClick={handleReset}
                >
                  Сбросить
                </button>
                <button
                  type="button"
                  className={cls.applyBtn}
                  onClick={handleApply}
                >
                  Найти
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <aside className={classNames(cls.sidebar, {}, [])}>
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
                <span className={classNames(cls.text, {}, [])}>{m}</span>
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
            selectedManufacturers.forEach(m => onToggleManufacturer(m)); // сброс выделений
            selectedTypes.forEach(t => onToggleType(t)); // сброс типов
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


