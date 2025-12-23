import cls from './NavMenu.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Button from '../../../shared/ui/Button/Button';
import { motion } from 'framer-motion';
import { navLinksData } from '../model/navLinksData';
import ArrowImage from '../../../shared/assets/images/icons/arrow.svg';

interface INavMenuProps {
  className?: string;
  open: boolean;
}

export const NavMenu = ({ className, open }: INavMenuProps) => {
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.13,
        delayChildren: 0.43,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0, y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45
      }
    },
  };

  // variants={itemVariants}
  return (
    open && (
      <motion.nav
        className={classNames(cls.nav, {}, [className ?? ''])}
        aria-label="Мобильное меню"
        initial={{ x: '100%', opacity: 0, scale: 0.95 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        exit={{ x: '100%', opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className={classNames(cls.mainInfo, {}, [])}>
          <motion.ul
            className={classNames(cls.links, {}, [])}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            style={{ width: '100%' }}
          >
            {navLinksData.map((l, i) => (
              <motion.li
                className={classNames(cls.item, {}, [])}
                key={i}
                variants={itemVariants}
                whileHover={{ opacity: .7 }}
              >
                <a
                  className={classNames(cls.link, {}, [])}
                  href='#'
                >
                  {l.label}
                </a>
                <img 
                  className={classNames(cls.arrow, {}, [])}
                  alt='#'
                  src={ArrowImage}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className={classNames(cls.lowerInfo, {}, [])}>
          <div className={classNames(cls.contacts, {}, [])}>
            <motion.p
              className={classNames(cls.text, {}, [])}
              variants={itemVariants}
            >
              Почта: <span className={classNames(cls.span, {}, [])}>
                vany4golos@yandex.ru
              </span>
            </motion.p>
            <motion.p
              className={classNames(cls.text, {}, [])}
              variants={itemVariants}
            >
              Телефон: <span className={classNames(cls.span, {}, [])}>
                +7 800 888 88 88
              </span>
            </motion.p>
          </div>
          <Button
            className={classNames(cls.button, {}, [])}
            type='button'
            children='Оставить заявку'
          />
        </div>
      </motion.nav>
    )
  )
};
