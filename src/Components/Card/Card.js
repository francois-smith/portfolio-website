import React from 'react';
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';

const Card = (props) => {
    const ref = React.useRef(null);
    const {style, ...mouseHandlers} = use3dEffect(ref);

    return (
        <animated.div
        ref={ref}
        style={{
          ...style
        }}
        {...mouseHandlers}
      >
        <div className='Card'>
            <div className='Card_Body'>
                    <img className='Card_Image' src={props.Img} alt=' '></img>
                    <h2 className='Card_Type'>{props.Type}</h2>
                    <p className='Card_Description'>{props.Description}</p>
                    <div>
                        <a href={props.Download} className='Btn'>
                            <span>
                                Download
                            </span>
                        </a>
                    </div>
                </div>
        </div>
      </animated.div>
    );
};

export default Card;