import React,{Component} from 'react';

import PlayerStats from "./components/playerStats"
import Options from "./components/options"
import Items from "./components/items"
import ItemPlus from "./components/item_plus"
import BuyAndSell from "./components/buyandsell"

//properties

import Plot from "./components/properties/plot"
import House1 from "./components/properties/house1"
import House2 from "./components/properties/house2"
import Condo from "./components/properties/condo"
import Building from "./components/properties/building"
import Mansion from "./components/properties/mansion"


import './App.css';
class App extends Component{
    

    constructor(props){
        super(props);
          this.moneyHandler = this.moneyHandler.bind(this);
          //this.toggleHover = this.toggleHover.bind(this);
            this.state = {
                currentMoney : 0 ,
                playerName: "",
                playerLevel: "",
                propertyTotal: 0,
                propertyPuchased: 0,
                propertySold: 0,
                clickAmount: 1,
                moneyPerSecond: 0,
                plotAmount: 20,
                house1Amount: 30,
                house2Amount: 45,
                condoAmount: 67.5,
                buidingAmount: 101.25,
                mansionAmount: 151.875,                                
            }
         }

         moneyHandler() {
            this.setState((preState) => {
                return {
                  currentMoney : preState.currentMoney + 1
                  };
               });
          }

          buyProperty() {
            this.setState((preState) => {
                return {
                  currentMoney : preState.currentMoney + 1
                  };
               });
          }
    
    
    render()
{
    return <div class="row general">
        <PlayerStats action={this.moneyHandler} moneyDisplay={this.state.currentMoney}></PlayerStats>
        
    <div class="col-md-6 p-0">
        <Options></Options>
        <Items></Items>
    </div>
    <div class="col-md-3 p-0">
        <div class="row">
            <ItemPlus></ItemPlus>
        </div>
        <BuyAndSell></BuyAndSell>
        <div class="items_count">
           <Plot></Plot>
           <House1></House1>
           <House2></House2>
           <Condo></Condo>
           <Building></Building>
           <Mansion></Mansion>            
        </div>
    </div>
</div>
}
}



export default App;
