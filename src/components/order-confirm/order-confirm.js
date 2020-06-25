import React, {useEffect, useState} from 'react'
import Modal from './../modal/modal'
import { connect } from 'react-redux'
import {fetchOrder, resetOrder} from './../../redux/actions/orderAction'
import './order-confirm.sass'


const OrderConfirm = ({dispatch, newOrder}) => {
	const [openModal, setOpenModal] = useState(false)
	const {data, orderId} = newOrder
	
	const onClose = () => {
		setOpenModal(false)
		dispatch(resetOrder())
	}

	useEffect(() => {
		if (orderId) dispatch(fetchOrder(orderId))
	}, [dispatch, orderId])

	useEffect(() => {
		if(data) setOpenModal(true)
	}, [data])

	const formRender = data => {
		const fields = [
			{name: 'receiver', value: '4100115179362567'},
			{name: 'formcomment', value: `Tmpayer.com: Пополнение номера ${data.phone} на ${data.amount} манат `},
			{name: 'short-dest', value: `Tmpayer.com: Пополнение номера ${data.phone} на ${data.amount} манат `},
			{name: 'label', value: `${data._id}#${data.phone}`},
			{name: 'quickpay-form', value: 'shop'},
			{name: 'targets', value: `Tmpayer.com: Пополнение номера ${data.phone} на ${data.amount} манат`},
			{name: 'sum', value: data.totalAmount, type: 'number'},
			{name: 'comment', value: `Хочу пополнить номер ${data.phone} на ${data.amount} манат.`},
			{name: 'successURL', value: 'https://tmpayer.com'},
			{name: 'paymentType', value: data.paymentType}
		]

		return (

			<form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
				{fields.map((field, index) => {
					return(
						<input key={field.name} type="hidden" name={field.name} value={field.value} data-type={field.type} />
						)
				})}
				<input className='button button_primary description_button' type="submit" value="Оплатить"/>
			</form>

		)
	}

	const descriptions = desc => {
		const data = [
			{label: 'Номер телефона:', value: desc.phone},
			{label: 'Будет зачислено:', value: `${desc.amount} ${desc.amountCurrency}`},
			{label: 'К оплате:', value: `${desc.totalAmount} ${desc.paymentCurrency}`},
			{label: 'Способ оплаты:', value: desc.paymentTypeName},
		]

		return (
			<div className='description'>
				<img className='description__img' src='static/media/tmcell-icon.12c4f172.png' alt='icon'/>
				<h3 className='description__title'>Оплата за услуги мобильной связи</h3>
					{data.map((item, index) => {
						return (
							<div className='description-item' key={item.label}>
								<span className='description__label'>{item.label}</span>
								<span className='description__value'>{item.value}</span>							
							</div>
						)
						})
					}
				{formRender(desc)}
			</div>
			)

	}

	return (
		<> 
				<Modal 
					isOpen={openModal}
					onCancel={onClose}
				>
					
					{data && descriptions(data)}
						
				</Modal>
		</>
	)
}

const mapStateToProps = ({newOrder}) => ({
  newOrder: newOrder
})

export default connect(mapStateToProps)(OrderConfirm)