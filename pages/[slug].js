import PropTypes from 'prop-types';
import { getDate, getNavi, getPages } from '../lib/wp';
import ModularPage from '../components/ModularPage';

const Page = ({
  page,
  navi,
  date,
}) => {
  return <ModularPage data={page} navi={navi} date={date} />;
};

const getStaticProps = async ({ params }) => {
  const allPages = await getPages();
  const navi = await getNavi();
  const date = await getDate();
  const thePages = allPages
    .filter(i => i.path === params.slug);
  return {
    props: {
      page: thePages[0],
      pages: allPages,
      navi: navi,
      date: date,
    },
  };
};

const getStaticPaths = async () => {
  const allPages = await getPages();
  const obj = {};
  obj.paths = allPages
    .filter(i => i.path !== '/')
    .map(i => ({ params: { slug: i.path }}));
  obj.fallback = false;
  return obj;
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
  navi: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
};

export {
  getStaticProps,
  getStaticPaths,
};

export default Page;
