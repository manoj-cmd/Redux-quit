import React from 'react'

class Home extends React.Component{
	
	render(){
		return(
		 <div>
		 <h1> Home Components </h1>
		 
		 <div className="cart-wraper">
		 <div className="image-wraper iteam">
		 <img src={'https://cdn.shopclues.com/images1/thumbnails/102531/320/320/147617585-102531990-1600242675.jpg'} />
		 </div>
		  <div className="text-wraper iteam">
		<span>I-phone price</span>
		<p>$400</p>
		 </div>
		  <div className="btn-wraper iteam">
		  <button> Add Cart </button>
		 </div>
		 </div>
		 </div>
		
		)
	}
}

export default Home;