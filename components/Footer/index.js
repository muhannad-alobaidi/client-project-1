import React from 'react';
import PropTypes from 'prop-types';

import css from './style.module.scss';

const Footer = ({
  className,
}) => {
  return (
    <footer className={css.footer}>
      Footer!
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};
Footer.defaultProps = {
  className: null,
};

Footer.displayName = 'Footer';

export default Footer;
