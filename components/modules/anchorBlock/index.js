/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import { uuid } from 'uuid';
import css from './style.module.scss';
// import _ from 'lodash';
import Link from 'next/link';
import { useId } from 'react';
import { resolveAcfRepeater } from '../../../lib/Helpers';

export const AnchorBlockRenderer = (block) => {
    const id = useId();
    /* Sorry man, your solution was too complex for me to understand. Made something simpler :) */
    return (
        <div className={css.container}>
            <div className={css.inner}>
                <div className={css.content}>
                    {resolveAcfRepeater(block.blocks.attrs.data, 'links').map((item, index) => (
                        <div className={css.linksContainer} key={`${id}-${index}`}>
                            <span>0{index + 1}</span>
                            <Link href={item.url}>{item.label}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};