import React from 'react';
class From extends React.Component{
	
	constructor(){
	super();
	this.state = {
	user: '',
	pass: '',
	Arr: []
			
		}
		
	}
	
	componentDidMount(){
		
		fetch('https://jsonplaceholder.typicode.com/posts').then(respons =>{
			respons.json().then(result=>{
				//console.log(result);
				this.setState({Arr:result.data})
			})
		})
		
	}
	
	
	handlerUserChange = (e)=>{
		this.setState({
			user:e.target.value
		})
	}
	
	handlerPassChange = (e)=>{
		this.setState({
			pass:e.target.value
		})
	}
	

	
	evnHendlr = (e) => {
		
		alert(`UserName: ${this.state.user} Password is: ${this.state.pass}`)
		e.preventDefault();
		
	}
	
	
	render(){
		return(
		 <div className="container">
		  <form onSubmit={this.evnHendlr}>
		
		   <h1>FormList</h1>
		   
		 
		   <div>
		   <label>User name:</label>
		   <input type="text" value={this.state.user} onChange={this.handlerUserChange} />
		   </div>
		    <div>
		   <label>Password:</label>
		    <input type="password" value={this.state.pass} onChange={this.handlerPassChange} />
		   </div>
		   <button>Submit</button>
		   </form>
		   
		   
		   
		   <div>
		   
		   
		   {
			   this.state.Arr ?
			   this.state.Arr.map((item, i) =>
				   <h1>{item.Title}</h1>
			   )
			   : 
			   null
			  
			   			  
		   }
		   
		   
		   
		   </div>
		 
		   
		   </div>
		   
		   
		   
		)
	}
	
}

export default From;