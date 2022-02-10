import React from 'react';


const Card = (props) => {
    return (
       <div className='Card'>
           <div className='Card_Body'>
                <img className='Card_Image' src={props.Img} alt=' '></img>
                <h2 className='Card_Type'>{props.Type}</h2>
                <p className='Card_Description'>{props.Description}</p>
                <div>
                    <a href={props.Download} className='Card_Btn'>
                        <span>
                            Download
                        </span>
                    </a>
                </div>
           </div>
       </div>
    );
};

export default Card;