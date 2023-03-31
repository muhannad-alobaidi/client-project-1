import React from 'react';
import PropTypes from 'prop-types';
import css from './style.module.scss';
import Image from 'next/image';
import {Spin as Hamburger} from 'hamburger-react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import _ from 'lodash';

const Header = ({
  navi,
  date,
}) => {

  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={css.header}>

      <div className={css.container}>
        <div className={css.skodaTitle}>
          <Image
            src='/images/Skoda.svg'
            alt='skoda'
            width={160}
            height={22}
          />
        </div>
        <div className={css.Hamburger}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
      </div>
      {isOpen &&  <div className={css.menu}>
      <div className={css.hello}>
        <p>Hello there! 👋</p>
      </div>
        <div className={css.pages}>
          {!!navi && navi.map(i => (
            <a className={router.query.slug == _.trim(i.url, '/') ? `${css.active}` : ""} href={i.url} key={i.title + i.url}>
              {i.title}
            </a>
          ))}
          <div className={css.pubdate}>
            Päivitetty {date}
          </div>
        </div>
      </div>
      }
     
 
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  navi: PropTypes.array,
};
Header.defaultProps = {
  className: null,
  navi: null,
};

Header.displayName = 'Header';

export default Header;
