import logo from './logo.svg';
import './App.css';
import Users from './components/Users'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import RestaurentList from './components/RestaurentList'
import RestaurentUpdate from './components/RestaurentUpdate'
import RestaurentSearch from './components/RestaurentSearch'
import RestaurentCreate from './components/RestaurentCreate'
import RestaurentDetals from './components/RestaurentDetals'  
import Form from './components/Form'  
import HomeContainers from './Containers/HomeContainers'

function ParentAlert(data){
	console.log(data)
	alert(data.name);
}



function App() {
	//let data = "Sunil Gupta"
  return (
    <div className="App">
      <Router>
	  <ul className="navigation">
	  <li><Link to="/">Home</Link></li>
	  <li><Link to="/list">List</Link></li>
	  <li><Link to="/create">Create</Link></li>
	  <li><Link to="/search">Search</Link></li>
	  <li><Link to="/details">Details</Link></li>
	  <li><Link to="/update">Update</Link></li>
	  </ul>
	 
	 
	   <Route path="/list"> 
	  <RestaurentList/>
	  </Route>
	   <Route path="/update"> 
	  <RestaurentUpdate/>
	  </Route>
	   <Route path="/Search"> 
	  <RestaurentSearch/>
	  </Route>
	   <Route path="/create"> 
	  <RestaurentCreate/>
	  </Route>
	   <Route path="/details"> 
	  <RestaurentDetals/>
	  </Route>
	   <Route exact path="/"> 
	   <HomeContainers alert={ParentAlert} />
	  <Form />
	  </Route>
	   </Router>
    </div>
  );
}

export default App;
