import React, {useRef, useState} from 'react'
import {NavLink} from 'react-router-dom'
import Modal from './../modal/modal'
import PaymentStatus from './../payment-status/payment-status'

import Logo from './logo.png'
import './header.sass'

const Header = () => {
	const navRef = useRef(null)
	const burgerRef = useRef(null)
	const [openModal, setOpenModal] = useState(false)


	const handleOpen = (e) => {
		e.preventDefault()
		setOpenModal(true)
	}

	const handleClose = () => {
		setOpenModal(false)
	}

	const burgerClick = (e) => {
		
		if(navRef && navRef.current ) {
		 	navRef.current.classList.toggle('header__nav--show')
		 	burgerRef.current.classList.toggle('burger--close')
		}
	}

	return (
		<header className='page__header header'>
			<div className='header__wrap'>
				<a className='header__brand' href='/'>
					<img className='header__logo' alt='logo' src={Logo}/>
				</a>
				<div className='burger header__burger' ref={burgerRef} onClick={burgerClick}>
					<span/>
				</div>
				<nav ref={navRef} className='header__nav'>
					<ul className='nav'>
						<li className='nav__item'>
							<NavLink exact to="/" className='nav__link' activeClassName="nav__link--active">
							  Главная
							</NavLink>
						</li>
						<li className='nav__item'>
							<a className='nav__link' href='/' onClick={handleOpen}>
							  Статус платежа
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<Modal
				isOpen={openModal}
				onCancel={handleClose}
			>
				<PaymentStatus/>
			</Modal>
		</header>
	)

}
export default Header