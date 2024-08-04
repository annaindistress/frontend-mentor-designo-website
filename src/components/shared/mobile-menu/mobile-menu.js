import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Link from '@/components/shared/link';
import MENU from '@/constants/menu';
import { ANIMATION_DURATION, MOTION_EASY } from '@/constants/animation';

const variants = {
  hidden: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
      ease: MOTION_EASY,
    },
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
      ease: MOTION_EASY,
    },
  },
};

function MobileMenu({ isOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen]);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.nav
            className="fixed inset-0 top-24 md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
          >
            <ul className="relative z-10 grid gap-y-8 px-6 py-12 bg-black">
              {MENU.map(({ title, to }) => (
                <li key={to}>
                  <Link to={to} size="lg" theme="white">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="absolute inset-0 bg-black/50" />
          </m.nav>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
