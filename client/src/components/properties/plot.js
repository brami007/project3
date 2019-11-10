import React,{Component} from 'react';
import Player from '../playerStats';


class Plot extends Component {
  
  constructor(props){
    super(props);
      this.addOne = this.addOne.bind(this);
        this.state = {
          count : 0 ,
          money: 10,
          currentMoney: ''
        }
     }

  
    handleMoneyInputChange = ({target}) => {
      const { value: currentMoney } = target;
      this.setState({ currentMoney })
    }

     addOne() {                             
      this.setState((preState) => {
        return {
          count : preState.count + 1,
          money : preState.money * 1.5
          };
       });
     }

    render() {
      return  <a onClick={this.props.action}>
      <div class="item_house_cont">
      
      <img src="./images/plot.png" alt=""/>
      
      <div class="date_cont">
          <h3>Plot</h3>
          <img src="./images/dollar.png" alt=""/><p>{this.props.moneyDisplay}</p>
      </div>
      <h2>{this.props.quantity}</h2>
      
  </div>
  </a>
    }
  }

  export default Plot;