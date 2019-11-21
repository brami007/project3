import React,{Component} from 'react';
import BuyAndSell from "../../../components/buyandsell"


class BuyAndSellCtrl extends Component {
  
    constructor(props){
        super(props);
          this.toggleBuy = this.toggleBuy.bind(this);
          this.toggleSell = this.toggleSell.bind(this);
            this.state = {
              buyOrSell: "buy",
              buyColor: "red",
              sellColor: "black"
            }
         }

    toggleBuy(){
        this.setState({buyOrSell:"buy",
                        buyColor: "red",
                        sellColor:"black"})

        this.props.buyOrSell("buy");
    }

    toggleSell(){
        
        this.setState({buyOrSell:"sell",
                        sellColor:"red",
                        buyColor:"black"})

        this.props.buyOrSell("sell");
    }


   render()
   {
     return <BuyAndSell toggleBuy={this.toggleBuy} toggleSell={this.toggleSell} buyColor={this.state.buyColor} sellColor={this.state.sellColor}></BuyAndSell>
   }
  
  }

export default BuyAndSellCtrl;