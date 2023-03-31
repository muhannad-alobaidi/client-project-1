/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {uuid} from 'uuid';
import css from './style.module.scss';


export const HeroBlockRender = (block) => {

   
   
                return <div className={css.container} key={() => uuid()}>
                    <div className={css.inner}>
                        <div className={css.content}>
                            <div className={css.header}>
                                <p className='UiSmall'>{block.blocks.attrs.data.label}</p>
                            </div>
                            <div className={css.logo}>
                               <h1>{block.blocks.attrs.data.heading}</h1>
                            </div>
                            {!!block.blocks.attrs.data.content &&
                            <div className={css.description}>
                                <p>{block.blocks.attrs.data.content}</p>
                            </div>
                            }
                         

                        </div>
                    </div>
                   
                    </div>;
            
  
};