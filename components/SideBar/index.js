import React from 'react';
import PropTypes from 'prop-types';
import css from './style.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import _ from 'lodash';

const Sidebar = ({
  navi,
  date,
}) => {
  const router = useRouter();

  return (
    <section className={css.Sidebar}>
      <div className={css.scroll}>
        <div className={css.skodaTitle}>
          <Image
            src='/images/Skoda.svg'
            alt='skoda'
            width={160}
            height={22}
          />
        </div>
        {/*
        <div className={css.hello}>
          <p>Hello there! 👋</p>
        </div>
        */}
        <div className={css.pages}>
          {!!navi && navi.map(i => (
            <a className={router.query.slug == _.trim(i.url, '/') ? `${css.active}` : ""} href={i.url} key={i.title + i.url}>
              {i.title}
            </a>
          ))}
        </div>
        <div className={css.pubdate}>
          Päivitetty {date}
        </div>
      </div>
    </section>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  navi: PropTypes.array,
  date: PropTypes.string,
};
Sidebar.defaultProps = {
  className: null,
  navi: null,
  date: null,
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
