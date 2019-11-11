import React,{Component} from 'react';
//import '../../css/App.css';

import MoneyCtrl from '../controllers/controllerMoney'
import Options from "../../components/options"
import Items from "../../components/items"
import ItemPlus from "../../components/item_plus"
import BuyAndSell from "../../components/buyandsell"

//properties

import PlotCtrl from '../controllers/controllerPlot'
import House1 from "../../components/properties/house1"
import House2 from "../../components/properties/house2"
import Condo from "../../components/properties/condo"
import Building from "../../components/properties/building"
import Mansion from "../../components/properties/mansion"

class Statistics extends Component {
 

    constructor(props){
        super(props);
        
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
                plotQuantity: 0,

                house1Amount: 30,
                house2Amount: 45,
                condoAmount: 67.5,
                buidingAmount: 101.25,
                mansionAmount: 151.875,
                
                gameEnded: false
            }
         
         }
    
         
         componentDidMount() {
            this.interval = setInterval(() => this.setState({currentMoney:this.state.currentMoney+this.state.moneyPerSecond}), 1000);
          }
          componentWillUnmount() {
            clearInterval(this.interval);
          }

          

         updateCoins= amount => {
             
             this.setState({currentMoney:amount})};

        updatePlotInfo = (propertyWorth, propertyQuantity, worth, amount, ptotal, perSecond) =>{
            this.setState(
                {   
                    [propertyWorth]:worth,
                    [propertyQuantity]:amount,
                    propertyTotal: ptotal,
                    moneyPerSecond: perSecond
                })
        }

         render()
         {
             return <div class="row general">
             <MoneyCtrl returnCurrentMoney={this.updateCoins} giveCurrentMoney={this.state.currentMoney} currentPerSecond={this.state.moneyPerSecond}></MoneyCtrl>
                 
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
                    <PlotCtrl returnCurrentMoney={this.updateCoins} updatePlotInfo={this.updatePlotInfo} currentMoney={this.state.currentMoney} plotWorth={this.state.plotAmount} plotQuantity={this.state.plotQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></PlotCtrl>
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

export default Statistics;