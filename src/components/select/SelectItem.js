import React from 'react';
import './select.sass';

const SelectItem = ({icon, name, totalAmount, arrow }) => {


	return (
		<div className='select-item'>
			<img 
				src={icon}
				className='select__icon' 
				alt='logo'
			/>
			<span className='select-item__name'>{name}</span>
			{ arrow && 
				<span className='select-item__arrow'>
					<i className="arrow down"></i>
				</span>}
			<span className='select-item__amount'>{totalAmount}</span>
		</div>
		);
};

export default SelectItem;