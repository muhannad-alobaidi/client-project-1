/* eslint-disable @next/next/no-img-element */
import React from 'react';
import css from './style.module.scss';
import _ from 'lodash';
import { useId } from 'react';
import Link from 'next/link';

export const NextPage = (block) => {
     
    const id = useId();
   

                return <div className={css.container} key={`${id}-${block.blocks.attrs.data.label}`}>
                    <div className={css.inner}>
                        <div className={css.content}>
                            <div className={css.label}>
                                <p>{block.blocks.attrs.data.label}</p>
                            </div>
                            <div className={css.url}>
                                <Link href={block.blocks.attrs.data.url}>{block.blocks.attrs.data.text}</Link><span>→</span>
                            </div>
                        </div>
                    </div>
                    </div>;

};