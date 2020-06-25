import React, {useState, useEffect} from 'react'
import useForm, { isRequired, min, max, phone } from "./../falcon-form/index"
import FieldText from './../field-text/field-text'
import Select from './../select/select'
import Button from './../button/button'
import MobileSkeleton from './skeleton'
import { connect } from 'react-redux'
import {fetchMethods} from './../../redux/actions/methodsAction'
import {setOrderId} from './../../redux/actions/orderAction'

import {initValues} from './initState'

import Tmcell from './tmcell-icon.png'
import './mobile-top-up.sass'

const MobileTopUp = ({dispatch, methods}) => {

	let [formInitialValues, setFormInitialValues] = useState(initValues);

  useEffect(() => {
		dispatch(fetchMethods())
	}, [dispatch])
  
  useEffect(() => {
		if (methods && formInitialValues.method === '') {
			setFormInitialValues({...formInitialValues, method : methods[0]._id})
		}
	}, [formInitialValues, setFormInitialValues, methods])

  
  const formSubmitAction = async values => {
  	try {
			const response = await fetch('/api/order',{
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(values)
	    })
  	
		  const data = await response.json()
		  if (data.orderId) {
		  	await dispatch(setOrderId(data))
			}
  	} catch (error) {

  	}    
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

  if (!methods) return <MobileSkeleton/>

	return (
			<section className="mobile">
	      <div className="mobile__wrap">
	        <h2 className="mobile__title">Оплата мобильной связи</h2>
	         <div className="mobile__form">
	          <img src={Tmcell} alt="Tmcell" className="mobile__icon" />
	          <form action="#" onSubmit={formSubmit}>
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

							<Select 
								amountValue={values.amount} 
							  selectList={methods}
							  value={values.method}
							  name="method"
							  onChange={fieldChange}
							/>

							<Button 
								type='submit'
								className='mobile_button button_primary'
							>
								Продолжить
							</Button>
	          </form>
	        </div>
	      </div>
	    </section>
		)
}



const mapStateToProps = ({methods}) => ({
  methods: methods.methods,
})

export default connect(mapStateToProps)(MobileTopUp)