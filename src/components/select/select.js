import React, { useState, useEffect, useRef } from 'react'
import SelectLists from './SelectLists'
import SelectItem from './SelectItem'
import {totalAmount, MouseEventPathPolyfill} from './utils'
import './../field-text/field-text.sass'
import './select.sass'

const Select = ({selectList, amountValue, onChange, name, value, ...attrs}) => {

	const [defaultValue, setDefaultValue] = useState(null)
	const [showList, setShowList] = useState(false)
	const selectRef = useRef(null)

	const getItem = (obj, val) => {
		for (let value of obj) {
		 if(value._id === val ) return value
		}
	}

	useEffect(()=> {
		document.addEventListener("click", handleClickOutside, false)
		return () => {
			document.removeEventListener("click", handleClickOutside, false)
		}
	},)

	useEffect(() => {
		if (value) {
			const list = getItem(selectList, value)
			setDefaultValue(list)
		}
	}, [value, setDefaultValue, selectList])

	


	const handleClickOutside = (e) => {
		MouseEventPathPolyfill(e)
    if (!e.path.includes(selectRef.current)) {
      setShowList(false);
    }
  }

  const handleListDisplay = (e) => {
    setShowList(!showList)
  };

  const handleOptionClick = list => {
  	setDefaultValue(list)
  	onChange({target: {
      name,
      value: list._id,
    }});
    setShowList(false)
  };

  
	return (
			<div className='field-text'>
				<span className='field-text__name'>Способ оплаты</span>
					<span className='field-text__input-wrap'>
						<div ref={selectRef} className='select'>
							<div className='select__text' onClick={handleListDisplay}>

								{ defaultValue && 
									<SelectItem 
										icon={defaultValue.logo}
										name={defaultValue.name}
										totalAmount={totalAmount(amountValue, defaultValue.exchangeRate, defaultValue.currency)}
										arrow
									/> }

							</div>
								{showList && 
									<SelectLists 
									selectList={selectList} 
									onClick={handleOptionClick}
									amountValue={amountValue}  
									/>
								}
						</div>
					</span>
				</div>
		);
}
export default Select