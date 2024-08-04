import PropTypes from 'prop-types';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ANIMATION_DURATION } from '@/constants/animation';

function Burger({ isToggled, onToggle }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.button
        className="relative block size-12 -mr-3 text-black md:hidden"
        type="button"
        animate={isToggled ? 'toggled' : 'initial'}
        aria-label={isToggled ? 'Close menu' : 'Open menu'}
        onClick={onToggle}
      >
        <m.span
          className="absolute left-3 top-[15px] w-6 h-1 bg-current"
          variants={{
            initial: {
              top: 15,
              rotate: 0,
              transition: {
                duration: ANIMATION_DURATION,
                top: {
                  delay: ANIMATION_DURATION,
                },
              },
            },
            toggled: {
              top: 23,
              rotate: 45,
              transition: {
                duration: ANIMATION_DURATION,
                rotate: {
                  delay: ANIMATION_DURATION,
                },
              },
            },
          }}
        />
        <m.span
          className="absolute left-3 top-[23px] w-6 h-1 bg-current"
          variants={{
            initial: {
              opacity: 1,
              transition: { duration: ANIMATION_DURATION },
            },
            toggled: {
              opacity: 0,
              transition: { duration: ANIMATION_DURATION },
            },
          }}
        />
        <m.span
          className="absolute left-3 bottom-[13px] w-6 h-1 bg-current"
          variants={{
            initial: {
              bottom: 13,
              rotate: 0,
              transition: {
                duration: ANIMATION_DURATION,
                bottom: {
                  delay: ANIMATION_DURATION,
                },
              },
            },
            toggled: {
              bottom: 21,
              rotate: -45,
              transition: {
                duration: ANIMATION_DURATION,
                rotate: {
                  delay: ANIMATION_DURATION,
                },
              },
            },
          }}
        />
      </m.button>
    </LazyMotion>
  );
}

Burger.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Burger;
