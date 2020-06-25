import React from 'react'
import Header from './components/header/header'


function App({children}) {

	
  return (
	  <div className="page__content">
	  	<Header/>
	  	{children}
	  </div>
  )
}
export default App
