import React from 'react'
import Skeleton from './../skeleton/skeleton'

const MobileSkeleton = () => {
	return (
		<section className="mobile">
	    <div className="mobile__wrap">
				<div className='mobile__skeleton'>
					<Skeleton 
			    	width="290px" 
			      height="30px" 
			    	marginTop='5px'
			      	marginBottom='25px'
			  	/>
			    <Skeleton 
			  		width="130px" 
			    	height="52px" 
			      marginLeft='auto' 
			      marginRight='auto'
			    />
			    <div className='mobile__form'>
				  	<Skeleton 
				  		width="50%" 
				  		height="23px"
				  	/>
				  	<Skeleton 
				  		height="41px" 
				    	marginTop='4px'
				    	marginBottom='10px'
				    />
				    <Skeleton 
				    	width="50%" 
				    	height="23px"
				    />
				    <Skeleton 
				    	height="41px" 
				    	marginTop='4px'
				    	marginBottom='10px'
				    />
				    <Skeleton 
				    	width="50%" 
				      height="23px"
				    />
				    <Skeleton 
				    	height="41px" 
				    	marginTop='4px'
				    	marginBottom='10px'
				    />
				    <Skeleton 
				    	width='130px'
				    	height="41px" 
				    	marginBottom='-2px'
				    />
			     </div>
			  </div>
	  	</div>
	  </section>
	)
}
export default MobileSkeleton