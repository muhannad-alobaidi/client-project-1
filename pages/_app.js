import PropTypes from 'prop-types';
import Page from '../components/Page';

import '../styles/global.scss';

const MyApp = ({
  Component,
  pageProps,
}) => {
  return (
    <Page pageProps={pageProps}>
      <Component {...pageProps} />
    </Page>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  Component: null,
  pageProps: null,
};

export default MyApp;
