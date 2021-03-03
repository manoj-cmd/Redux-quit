import React from 'react';

const Users = (props) =>{
	const {data} = props
	return(
	
	<>
	
	<h2>{data.name}</h2>
	<h2>{data.age}</h2>
	  
	  <h1>Uers Component</h1>
	  
	  </>
	
	)
	
}

export default Users;
