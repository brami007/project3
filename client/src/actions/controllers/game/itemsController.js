import React,{Component} from 'react';
import Items from "../../../components/items"


class ItemsCtrl extends Component {
  
  


   render()
   {
     return <Items buyOrSell={this.props.buyOrSell} plotQuantity={this.props.plotQuantity} house1Quantity={this.props.house1Quantity} house2Quantity={this.props.house2Quantity} condoQuantity={this.props.condoQuantity} buildingQuantity={this.props.buildingQuantity} mansionQuantity={this.props.mansionQuantity} ></Items>
   }
  
  }

export default ItemsCtrl;