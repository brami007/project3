import React,{Component} from 'react';


class BuyAndSell extends Component {
    render() {
      return <div class="sell">
      <p onClick={this.props.toggleBuy}><font color={this.props.buyColor}>Buy</font></p>
      <p onClick={this.props.toggleSell}><font color={this.props.sellColor}>Sell</font></p>
      <p>1</p>
      <p>10</p>
  </div>
    }
  }

  export default BuyAndSell;