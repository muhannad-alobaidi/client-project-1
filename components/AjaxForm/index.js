import React from 'react';
import PropTypes from 'prop-types';

import css from './style.module.scss';

const handleSubmit = e => e.preventDefault();

const AjaxForm = ({
  className,
}) => {
  return (
    <form method="post" action="" onSubmit={handleSubmit} className={css.ajaxform}>
      <button>
        Lähetä lomake
      </button>
    </form>
  );
};

AjaxForm.propTypes = {
  className: PropTypes.string,
};
AjaxForm.defaultProps = {
  className: null,
};

AjaxForm.displayName = 'AjaxForm';

export default AjaxForm;
