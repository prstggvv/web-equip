import cls from './CatalogPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Header from '../../../components/Header/ui/Header';
import { NavTab } from '../../../components/NavTab';
import { useMemo, useState } from 'react';
import { Cards } from '../../../components/Cards';
import { products } from '../../../components/ProductsData';
import { SidebarFilters } from '../../../components/SidebarFilters';
import { CatalogControls } from '../../../components/CatalogControls';
import { productManufacturers, productTypes } from '../../../components/ProductsData/model/products';
import { TitleOfSections } from '../../../components/TitleOfSections';

const CatalogPage = () => {
  const [query, setQuery] = useState('');
  const view: 'list' = 'list';
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const pageSize = 12;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products
      .filter((p) =>
        (selectedManufacturers.length === 0 || selectedManufacturers.includes(p.manufacturer)) &&
        (selectedTypes.length === 0 || (p.type ? selectedTypes.includes(p.type) : false)) &&
        (q === '' ||
          p.title.toLowerCase().includes(q) ||
          p.manufacturer.toLowerCase().includes(q))
      );
  }, [query, selectedManufacturers, selectedTypes]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageSafe = Math.min(page, totalPages);
  const paged = useMemo(() => {
    const start = (pageSafe - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, pageSafe]);

  function toggleManufacturer(m: string) {
    setPage(1);
    setSelectedManufacturers((prev) => prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]);
  }

  function toggleType(t: string) {
    setPage(1);
    setSelectedTypes((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);
  }

  function onQueryChange(q: string) {
    setPage(1);
    setQuery(q);
  }

  function onPageChange(next: number) {
    setPage(Math.max(1, Math.min(totalPages, next)));
  }

  return (
    <main className={classNames(cls.content, {}, [])}>
      <Header />
      <NavTab />
      <TitleOfSections 
        children='Оборудование'
      />
      <div className={cls.grid}>
        <SidebarFilters
          manufacturers={productManufacturers}
          types={productTypes}
          query={query}
          selectedManufacturers={selectedManufacturers}
          selectedTypes={selectedTypes}
          onQueryChange={onQueryChange}
          onToggleManufacturer={toggleManufacturer}
          onToggleType={toggleType}
          onApplyFilters={() => {}}
        />
        <div className={cls.listCol}>
          <div className={cls.controlsTop}>
            <CatalogControls
              view={view}
              page={pageSafe}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
          <div className={cls.cardsWrap}>
            <Cards items={paged} view={view} />
          </div>
          <div className={cls.controlsBottom}>
            <CatalogControls
              view={view}
              page={pageSafe}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </main>
  )
};

export default CatalogPage;
