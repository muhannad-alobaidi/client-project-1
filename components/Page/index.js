import PropTypes from 'prop-types';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../SideBar';

import css from './style.module.scss';

const Page = ({
  pageProps,
  children,
}) => {
  return (
    <div className={css.page}>
      <Header navi={pageProps.navi} date={pageProps.date} />
      <Sidebar navi={pageProps.navi} date={pageProps.date} />
      <div className={css.children}>
        {children}
      </div>
    </div>
  );
};

Page.propTypes = {
  pageProps: PropTypes.object,
  children: PropTypes.any,
};

Page.defaultProps = {
  pageProps: null,
  children: null,
};

export default Page;
