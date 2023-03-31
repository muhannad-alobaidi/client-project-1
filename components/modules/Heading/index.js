/* eslint-disable @next/next/no-img-element */
import React from 'react';
import css from './style.module.scss';
import _ from 'lodash';
import { useId } from 'react';

export const Heading = (block) => {
     
    const id = useId();
   
   
      
                return <div className={css.container} key={`${id}-${block.blocks.attrs.data.anchor}`}>
                    <div id={block.blocks.attrs.data.anchor} className={css.inner}>
                        <div className={css.content}>
                            {block.blocks.attrs.data.level == 2 && <h2>{block.blocks.attrs.data.label}</h2> }
                            {block.blocks.attrs.data.level == 3 && <h3>{block.blocks.attrs.data.label}</h3> }
                        </div>
                    </div>
                    </div>;
            
  
};