import clsx from "clsx";
import PropTypes from "prop-types";
import NextLink from "next/link";

const styles = {
  base: 'uppercase transition-colors duration-200',
  size: {
    md: "text-sm leading-none tracking-[0.15em]",
    lg: "text-2xl leading-none tracking-[0.083em]"
  },
  theme: {
    white: "text-white hover:text-white/50 focus-visible:text-white/50",
    black: "text-black hover:underline focus-visible:underline outline-none"
  },
};


function Link({to, className, size, theme, children, ...props}) {

  const linkStyles = clsx(className, styles.base, styles.size[size], styles.theme[theme]);

  if (to.toString().startsWith('/')) {
    return (
      <NextLink href={to} className={linkStyles} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a href={to} className={linkStyles} {...props}>
      {children}
    </a>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default Link;
