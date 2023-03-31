import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { HeroBlockRender } from '../modules/HeroBlock';
import css from './style.module.scss';
import { AnchorBlockRenderer } from '../modules/anchorBlock';
import { Heading } from '../modules/Heading';
import { TextAndImages } from '../modules/TextAndImage';
import { NextPage } from '../modules/NextPage';

const ModularPage = ({
  className,
  data,
  navi,
}) => {
  return (
    <div className={css.modularpage}>
      <div>
        {data.content.map((block, index) => {
          switch(block.type){
            case 'acf/hero':
               return <HeroBlockRender blocks={block} key={block.attrs.data.label} />;

              break;
            case 'acf/anchornavi':
              return <AnchorBlockRenderer blocks={block} key={block.attrs.index} />;
              break;

            case 'acf/heading':
              return <Heading blocks={block} key={block.attrs.data.anchor}/>;
              break;

            case 'acf/text':
              return <TextAndImages blocks={block} key={block.attrs.data.anchor}/>;

              break;
            case 'acf/nextpagelink':
              return <NextPage blocks={block} key={block.attrs.data.label} />;

              break;
          
            default:
              return null;
              break;
          }
        })}
      </div>
    </div>
  );
};

ModularPage.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  navi: PropTypes.array,
};
ModularPage.defaultProps = {
  className: null,
  data: null,
  navi: null,
};

ModularPage.displayName = 'ModularPage';

export default ModularPage;
