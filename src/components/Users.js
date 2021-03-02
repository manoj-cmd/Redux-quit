import React from 'react';

class Users extends React.Component{
	constructor(){
		super();
		this.state = {
			users:null
		}
	}
	
	componentDidMount(){
		fetch('https://reqres.in/api/users').then((resp)=>{
			
			resp.json().then((result)=>{
				//console.warn(result.data);
				this.setState({users:result.data})
			})
			
		})
	}
	
    render(){
      

        return(
           
			
			this.state.users ? 
			this.state.users.map((iteam, i)=>
				<div>
				<p>{iteam.name}</p>
				</div>
				
				)
			
			:
			null
			
			
        )
    }
} 
export default Users;
