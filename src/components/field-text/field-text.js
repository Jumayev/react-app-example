import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CurrencyInput from './CurrencyInput'
import Phone from './Phone'

import './field-text.sass'

const FieldText = ({ label, error, phone, currency, ...attrs }) => {
  const classes = classNames({
    'field-text': true,
    'field-text--error': error, 
  })


	return(
		<label className={classes}>
			<span className='field-text__name'>{label}</span>
			<span className='field-text__input-wrap'>
        {currency && 
          <CurrencyInput
            className='field-text__input'
            {...attrs}
          />}
        { phone && 
          <Phone
            className='field-text__input'
            {...attrs}
          />}
				{!currency && !phone && <input className='field-text__input' {...attrs} />}
				{error && <span className='field-text__help-text'>{error}</span>}
			</span>
		</label>
	)

}

FieldText.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
}

FieldText.defaultProps = {
  label: '',
  error: '',
}

export default FieldText