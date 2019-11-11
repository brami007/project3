import React,{Component} from 'react';
import PlayerStats from "../../components/playerStats"

class MoneyCtrl extends Component {
   constructor(props){
      super(props);
        this.moneyHandler = this.moneyHandler.bind(this);
        
         }
        

   moneyHandler() {
    this.props.returnCurrentMoney(this.props.giveCurrentMoney +1);
        }


        
     

    
    render()
    {
      return <PlayerStats action={this.moneyHandler} moneyDisplay={this.props.giveCurrentMoney} currentPerSecond={this.props.currentPerSecond} ></PlayerStats>
    }
   
   }

export default MoneyCtrl;