import React from 'react';

const Card = (props) => {
    return (
		<div className='Card'>
			<div className='Card_Body'>
				<img className='Card_Image' src={props.Img} alt=' '></img>
				<h2 className='Card_Type'>{props.Type}</h2>
				<p className='Card_Description'>{props.Description}</p>
				<div className='Buttons'>
					<a  href={props.linkTo} className={`Btn ${props.shouldHide? 'hidden' : undefined}`} target="_blank">
						<span>
							View Now
						</span>
					</a>
					<a href={props.Download} className='Btn' target="_blank">
						<span>
							{props.DownloadText}
						</span>
					</a>
				</div>
			</div>
		</div>
    );
};

export default Card;