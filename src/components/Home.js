import React from 'react'


function Home(props){
	
	const data= {name:"manoj gupta", email:"manoj@gmail.com"};

		return(
		 <div>
		<p>Home Component</p>
		 <div className="add-to-cart">
		 <img src={'https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png'} />
		 </div>
		 <div className="cart-wraper">
		 <div className="image-wraper iteam">
		 <img src={'https://cdn.shopclues.com/images1/thumbnails/102531/320/320/147617585-102531990-1600242675.jpg'} />
		 </div>
		  <div className="text-wraper iteam">
		<span>I-phone price</span>
		<p>$400</p>
		 </div>
		  <div className="btn-wraper iteam">
		  
		  <div>
		  </div>
		  
		  
		  <button onClick={()=>{props.alert(data)}}> Add Cart </button>
		 </div>
		 </div>
		 </div>
		
		)
	
}

export default Home;