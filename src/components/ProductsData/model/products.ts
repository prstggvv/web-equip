import type { ProductItem } from '../../ProductCard/ui/ProductCard';

const manufacturers = ['AquaClean', 'DustMaster', 'ProTech', 'CleanJet', 'Vortex'];
const types = ['Пылесос', 'Чистильщик', 'Аппарат', 'Материал', 'Фильтр'];

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFrom<T>(list: T[]): T {
  return list[randomInt(0, list.length - 1)];
}

function generateTitle(): string {
  const adjectives = ['Ultra', 'Max', 'Eco', 'Pro', 'Smart', 'Turbo'];
  const nouns = ['Cleaner', 'Vacuum', 'Washer', 'Filter', 'Jet', 'Brush'];
  return `${randomFrom(adjectives)} ${randomFrom(nouns)} ${randomInt(100, 900)}`;
}

function generateDescription(): string {
  const base = [
    'Эффективная уборка любых поверхностей.',
    'Компактный дизайн и низкий уровень шума.',
    'Подходит для дома и офиса.',
    'Расширенная комплектация и простое обслуживание.',
    'Экономичный расход и высокая производительность.'
  ];
  return base.slice(0, randomInt(2, base.length)).join(' ');
}

const rectangleImage = '/src/shared/assets/images/Rectangle.jpg';

export const products: ProductItem[] = Array.from({ length: 50 }).map((_, idx) => ({
  id: `product-${idx + 1}`,
  imageUrl: rectangleImage,
  manufacturer: randomFrom(manufacturers),
  type: randomFrom(types),
  title: generateTitle(),
  price: randomInt(3990, 199990),
  description: generateDescription(),
}));

export const productManufacturers = manufacturers;
export const productTypes = types;


