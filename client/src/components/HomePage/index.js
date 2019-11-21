import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import API from "../../utils/API";

class HomePage extends Component
{
constructor(props)
{

    super(props);
    this.state={
        email:"",
        password:""
    }

}

authenticate=()=>{
    this.props.onLogIn(
        {email:this.state.email});
}  

handleUserAdd = id => {
    

    API.saveUser({
      user: this.state.user,
      password: this.state.password,

    })
  };
handleInputChange=(e)=>this.setState({[e.target.name]:e.target.value});
render ()
{
    return <div className="bg">
    <h1 className="HP1 bg"> Welcome to Real Estate Game!</h1>
    {!this.props.authenticated&&<div className="row">
        <div className="col-6 offset-3 bg">
            <div className="input-group">
                <input name="email" value={this.state.email} onChange={this.handleInputChange} type="text" name="email" placeholder="Enter your email" className="form-control"/>
            </div>
            <div className="col-6 offset-3 inputs">
            <div className="input-group">
                <input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" name="password" placeholder="Enter your password" className="form-control"/>
            </div>
            <button onClick={this.authenticate} className="btn btn-primary inputs">Log In</button>
        </div>
        </div>
    </div>}
    {this.props.authenticated&&<div className="row">
        <div className="col-6 offset-3 bg">
            <h1 className="HP1">Let's play the game!!!</h1>
            <Link onClick={this.handleUserAdd} to="/MainCtrl" className="btn btn-primary ">Start Game</Link>
        </div>
    </div>}
</div>
}
}

export default HomePage;