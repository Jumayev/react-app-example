import React, {useState} from 'react'
import useForm, { isRequired, min, max, phone } from './../falcon-form/index'
import FieldText from './../field-text/field-text'
import Button from './../button/button'

import './payment-status.sass'

const PaymentStatus = () => {

	let [formInitialValues, ] = useState({
		phone: '',
		amount: ''
	});

	const formSubmitAction = async values => {
  	const response = await fetch('/api/status', values)
  	

    await resetForm()

  }



  const fieldValidators = {
    amount: [isRequired, min, max],
    phone: [isRequired, phone],
  }

  const { values, fieldChange, formSubmit, resetForm, errors } = useForm(
    formInitialValues,
    formSubmitAction,
    fieldValidators
  );


return(
	<div className='payment-status'>
		<h2 className='payment-status__title'>Статус платежа</h2>
		<form onSubmit={formSubmit}>
			<FieldText 
				label='Номер телефона'
				name='phone'
				onChange={fieldChange}
				error={errors.phone}
				value={values.phone}
				phone
			/>
			<FieldText 
				label='Сумма в манатах'
				name='amount'
				placeholder='Введите сумму'
				onChange={fieldChange}
				defaultValue={values.amount}
				error={errors.amount}
				currency
			/>
			<Button 
				className='mobile_button button_primary'
			>
				Проверить
			</Button>
		</form>
	</div>
	)


}
export default PaymentStatus