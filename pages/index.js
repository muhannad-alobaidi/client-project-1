import PropTypes from 'prop-types';
import { getDate, getNavi, getPages } from '../lib/wp';
import ModularPage from '../components/ModularPage';

const Page = ({
  page,
  date,
}) => {
  return <ModularPage data={page} date={date} />;
};

const getStaticProps = async () => {
  const allPages = await getPages();
  const navi = await getNavi();
  const date = await getDate();
  const indexPages = allPages.filter(i => i.home);
  const indexPage = (indexPages.length < 1 ? allPages[0] : indexPages[0]);
  return {
    props: {
      page: indexPage,
      pages: allPages,
      navi: navi,
      date: date,
    },
  };
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
};

export {
  getStaticProps,
};

// b3JkZXJfaWQ9MTIxNzc5fHR5cGU9ZGV2ZWxvcGVyfGRhdGU9MjAxOC0wMS0wMiAwOTowOTo1MA==

export default Page;
