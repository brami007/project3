import React,{Component} from 'react';



class Plot extends Component {
  
  constructor(props){
    super(props);
        this.state = {
          count : 0 ,
          money: 10,
          currentMoney: ''
        }
     }

     


    render() {
      return  <a onClick={this.props.action}>
      <div class="item_house_cont">
      
      <img src="./images/plot.png" alt=""/>
      
      <div class="date_cont">
          <h3>Plot</h3>
          <img src="./images/dollar.png" alt=""/><p>{this.props.moneyDisplay}</p>
      </div>
      <h2>{this.props.plotQuantity}</h2>
      
  </div>
  </a>
    }
  }

  export default Plot;