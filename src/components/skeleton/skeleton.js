import React from 'react'
import PropTypes from 'prop-types'
import './skeleton.sass'

const Skeleton = ({ 
  width, height, marginTop, marginRight, marginBottom, marginLeft 
}) => {
  const style = {
    ...width && { width },
    ...height && { height },
    ...marginTop && { marginTop },
    ...marginRight && { marginRight },
    ...marginBottom && { marginBottom },
    ...marginLeft && { marginLeft },
  }

  return (
    <div className="skeleton" style={style}>
      <div className="skeleton__body" />
    </div>
  )
}

Skeleton.defaultProps = {
  width: '100%',
  height: '100%',
  marginTop: '',
  marginRight: '',
  marginBottom: '', 
  marginLeft: '',

}
Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
}
export default Skeleton
