import React from 'react'

class RestaurentList extends React.Component{
	
	constructor(){
		super();
		this.state={
			list:null
		}
	}
	
	componentDidMount(){
		fetch('')
	}
	
	render(){
		return(
		 <div>
		 <h1> Reataurent List </h1>
		 </div>
		
		)
	}
}

export default RestaurentList;