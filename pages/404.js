import React from 'react';
import PropTypes from 'prop-types';

import css from './404.module.scss';

const Error404Page = ({
  className,
}) => {
  return (
    <div className={css.error404}>
      Error 404

    </div>
  );
};

Error404Page.propTypes = {
  className: PropTypes.string,
};
Error404Page.defaultProps = {
  className: null,
};

Error404Page.displayName = 'Error404Page';

export default Error404Page;
