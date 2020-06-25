import React from 'react';
import SelectItem from './SelectItem';
import {totalAmount} from './utils';

const SelectLists = ({selectList, onClick, amountValue }) => {

	return (
		<div className='select__lists'>
			{selectList.map(list => {
				return (
					<div 
						className='select__list' 
						key={list.name}
						onClick={() => onClick(list)}
					>
						<SelectItem 
							icon={list.logo} 
							name={list.name} 
							totalAmount={totalAmount(amountValue, list.exchangeRate, list.currency)} 
						/>
					</div>
				)
			})
			}
		</div>
	)
};
export default SelectLists;