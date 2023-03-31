/* eslint-disable @next/next/no-img-element */
import React, { useId } from 'react';
import HtmlParser from 'react-html-parser';

import css from './style.module.scss';

export const TextAndImages = (block) => {

    const theData = block.blocks.attrs.data;
    const resolvedBlock = {
        type: theData.type,
        numColumns: parseInt(theData.columns, 10),
        columns: [],
    };
    for (let n=0; n<resolvedBlock.numColumns; n++) {
        resolvedBlock.columns.push({
            anchor: theData[`columns_${n}_anchor`]?.length > 0 ? theData[`columns_${n}_anchor`] : null,
            heading: theData[`columns_${n}_heading`]?.length > 0 ? theData[`columns_${n}_heading`] : null,
            image: theData[`columns_${n}_image`]?.length > 0 ? theData[`columns_${n}_image`] : null,
            text: theData[`columns_${n}_text`]?.length > 0 ? theData[`columns_${n}_text`] : null,
            video: theData[`columns_${n}_video`]?.length > 0 ? theData[`columns_${n}_video`] : null,
        });
    }

    return (
        <div className={css.container}>
            <div className={css.inner}>
                {resolvedBlock.columns.map((c, idx) => (
                    <div className={css.content} key={idx}>
                        <div className={css.column} id={c.anchor}>
                            {!!c.video && (
                                <div className={css.image}>
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        src={c.video}
                                        alt='Skoda'
                                    /> 
                                </div>
                            )}
                            {!c.video && !!c.image && (
                                <div className={css.image}>
                                    <img src={c.image} alt="" />
                                </div>
                            )}
                            {!!c.heading && resolvedBlock.type !== 'dontdo' && (
                                <div className={css.title} >
                                    <h4>{c.heading}</h4>
                                </div> 
                            )}
                            {!!c.text && (
                                <div className={css.text}>
                                    {resolvedBlock.type == "dontdo" && <span>×</span>}
                                    <div className={css[resolvedBlock.type]}>                                    
                                        {HtmlParser(c.text.replace(/\r\n/g, "\n").replace(/\n/g, "<br />\n"))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    };
    /*
                 let arry0 = []; 
                 let arry1 = []; 
                 let arry2 = []; 
                 let jointArayy = [];

                 _.drop(_.dropRight(Object.entries(block.blocks.attrs.data))).map((block, index) => {
                    if(block[0].charAt(8) == 0){
                        arry0.push(block[1]);
                    }
                    else if(block[0].charAt(8) == 1){
                        arry1.push(block[1]);
                    } else if(block[0].charAt(8) == 2){
                        arry2.push(block[1]);
                    } 
                  }) ;

                  if(arry0.length > 1) {
                    jointArayy.push(arry0);
                  }
                  if(arry1.length > 1) {
                    jointArayy.push(arry1);
                  }
                  if(arry2.length > 1) {
                    jointArayy.push(arry2);
                  }

                  console.log(block.blocks.attrs.data.type);

                return <div key={`${() => uuid()}-${block.blocks.attrs.data.columns_0_anchor}`} className={css.container}>
                    <div className={css.inner}>
                        {
                            jointArayy.map((field) => {

                                return <div id={field[4]} className={css.content} key={`${id}-${field[4]}`}>

                                    {console.log(field[0])}
                                    
                                            {!!field[1]  &&  
                                            <div className={css.image}>
                                            <video
                                             autoPlay
                                             muted
                                             loop
                                             src={field[1]}
                                             alt='skoda'
                                             /> 
                                             </div>
                                             }
                                             { !!field[0] &&
                                             <div className={css.image}>
                                             <img src={field[0]} alt="" />
                                             </div>
                                             }
                                            
                                            {(!!field[2] &&  block.blocks.attrs.data.type != "dontdo" )&&                                       
                                            <div className={css.title} >
                                                <h4 >{field[2]}</h4>
                                            </div> 
                                            }
                                            {!!field[3] &&
                                            <div className={css.text}>
                                                {block.blocks.attrs.data.type == "dontdo" && <span>×</span>}
                                                <div className={block.blocks.attrs.data.type == "dontdo" ? `${css.dontDoBlock}` : undefined}>{ HtmlParser(field[3]) }</div>
                                            </div>
                                            }
                                       </div>;
                            })
                        }
                    </div>
                    </div>;

};
*/