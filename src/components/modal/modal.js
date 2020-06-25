import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import './modal.sass';

const Modal = ({children, isOpen, onCancel}) => {
	const [render, setRender] = useState(isOpen);

	const overlayClasses = classNames({
		'modal__overlay': true,
		'modal__overlay_fadeIn': isOpen,
		'modal__overlay_fadeOut': !isOpen
	})

	const handleWrapHide = e => {
		if (e.target.classList.contains("modal__overlay")) {
			onCancel();
		}
	};

	useEffect(() => {
		if (isOpen) { 
			setRender(true);
			document.body.classList.add("modal-open")
		} else {
			document.body.classList.remove("modal-open")
		}
	}, [isOpen]);

	const onAnimationEnd = () => {
    if (!isOpen) setRender(false);
  };

  const content = render && (
				<div className={overlayClasses} onClick={handleWrapHide} onAnimationEnd={onAnimationEnd}>
					<div className='modal__window'>
						<div className='modal__content'>
							{children}
						</div>
					</div>
				</div>
			)

	return createPortal(content, document.body)
};

export default Modal;