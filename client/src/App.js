import React,{Component} from 'react';
import './App.css';

import MainCtrl from "./actions/controllers/mainController"
import HomePage from './components/HomePage/index';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';



class App extends Component{
     constructor(props)
     {
        super(props);
        this.state={
            authenticated:false,
            email:""
        }
     }
login=(user)=>{
this.setState({authenticated:true, email:user.email})
}
    render()
{
    return <Router>
    <Switch>
    {this.state.authenticated&&<Route path="/MainCtrl" component={()=><MainCtrl email={this.state.email} />} />}
    <Route component ={()=><HomePage onLogIn={this.login} authenticated={this.state.authenticated} />} />
    </Switch>
    </Router>;

    
}
}



export default App;