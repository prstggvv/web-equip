import cls from './CompanysSection.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { companysData } from '../model/companysData';
import { useEffect, useMemo, useRef, useState } from 'react';

interface ICompanysSectionProps {
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
}

export const CompanysSection = ({
  className,
  speed = 'normal',
  direction = 'left',
}: ICompanysSectionProps) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const containerCards = useMemo(() => [...companysData, ...companysData], []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scroller = scrollerRef.current;
    if (!scroller) return;

    if (!reduce) {
      scroller.setAttribute('data-animated', 'true');
      scroller.setAttribute('data-speed', speed);
      scroller.setAttribute('data-direction', direction);
    } else {
      scroller.removeAttribute('data-animated');
    }
  }, [speed, direction]);

  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.fadeWrapper, {}, [])}>
          <div
            className={classNames(cls.scroller, {}, [])}
            data-speed={speed}
            data-direction={direction}
            ref={scrollerRef}
          >
            <ul className={classNames(cls.list, {}, [])} aria-hidden={false}>
              {containerCards.map((c, i) => {
                const isDuplicate = i >= companysData.length;
                return (
                  <li
                    key={i}
                    className={classNames(cls.card, {}, [])}
                    aria-hidden={isDuplicate ? 'true' : 'false'}
                  >
                    <img
                      className={classNames(cls.image, {}, [])}
                      alt='логотип компании'
                      src={c.image}
                    />
                  </li>
                )}
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}