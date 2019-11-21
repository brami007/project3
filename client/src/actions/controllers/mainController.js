import React,{Component} from 'react';
import ReactTooltip from 'react-tooltip'
import cookie from 'react-cookies'
//import '../../css/App.css';

import MoneyCtrl from './controllerMoney'
import OptionsCtrl from "./game/optionsController"
import ItemsCtrl from "./game/itemsController"
import ItemPlusCtrl from "./game/controllerItem_Plus"
import BuyAndSellCtrl from "./game/controllerBuySell"


//properties

import PlotCtrl from './properties/controllerPlot'
import House1Ctrl from './properties/controllerHouse1'
import House2Ctrl from './properties/controllerHouse2'
import CondoCtrl from './properties/controllerCondo'
import BuildingCtrl from './properties/controllerBuilding'
import MansionCtrl from './properties/controllerMansion'

class MainCtrl extends Component {
    

    constructor(props){
        super(props);
        this.playAudio = this.playAudio.bind(this);
            this.state = {
                currentMoney : 0 ,
                buyOrSell: "buy",
                currentBonus: 0,
                gameStart: true,
                
                playerName: "",
                playerLevel: "",

                propertyTotal: 0,
                propertyPuchased: 0,
                propertySold: 0,

                clickAmount: 1,
                moneyPerSecond: 0,
                moneyPerSecondWithBonus: 0,

                plotAmount: 20,
                plotQuantity: 0,

                house1Amount: 50,
                house1Quantity: 0,

                house2Amount: 100,
                house2Quantity: 0,

                condoAmount: 1000,
                condoQuantity: 0,

                buildingAmount: 10000,
                buildingQuantity: 0,

                mansionAmount: 60000,
                mansionQuantity: 0,
                
                
            }
         
         }
    
          
        componentDidMount() {  
            
            if(Number(cookie.load("currentMoney"))>=0 && this.state.gameStart == true){
                

                this.setState(
                    {currentMoney:Number(cookie.load("currentMoney")),
                    currentBonus: Number(cookie.load("currentBonus")),
                    moneyPerSecond: Number(cookie.load("moneyPerSecond")),
                    moneyPerSecondWithBonus: Number(cookie.load("moneyPerSecondWithBonus")),

                    propertyTotal: Number(cookie.load("propertyTotal")),
                    propertyPuchased: Number(cookie.load("propertyPuchased")),
                    propertySold: Number(cookie.load("propertySold")),

                    plotAmount: Number(cookie.load("plotAmount")),
                    house1Amount: Number(cookie.load("house1Amount")),
                    house2Amount: Number(cookie.load("house2Amount")),
                    condoAmount: Number(cookie.load("condoAmount")),
                    buildingAmount: Number(cookie.load("buildingAmount")),
                    mansionAmount: Number(cookie.load("mansionAmount")),

                    plotQuantity: Number(cookie.load("plotQuantity")),
                    house1Quantity: Number(cookie.load("house1Quantity")),
                    house2Quantity: Number(cookie.load("house2Quantity")),
                    condoQuantity: Number(cookie.load("condoQuantity")),
                    buildingQuantity: Number(cookie.load("buildingQuantity")),
                    mansionQuantity: Number(cookie.load("mansionQuantity")),

                    gameStart: true
                })
            }else{
                
            }
            this.interval = setInterval(() => 
            this.setState((prevState, props) => {
            this.playAudio();
            this.setState({
                currentMoney:Math.round(this.state.currentMoney+(this.state.moneyPerSecond *(1+this.state.currentBonus))),
                    moneyPerSecondWithBonus:Math.round((this.state.moneyPerSecond *(1+this.state.currentBonus)))
                })
            
            }), 1000);
        }

        
        componentWillUnmount() {
            clearInterval(this.interval);
            
          }

        updateCoins= amount => {
            this.setState({currentMoney:Math.round(amount)})

            cookie.save("currentMoney", this.state.currentMoney);
                cookie.save("currentBonus", this.state.currentBonus);
                cookie.save("moneyPerSecond", this.state.moneyPerSecond);
                cookie.save("moneyPerSecondWithBonus", this.state.moneyPerSecondWithBonus);

                cookie.save("propertyTotal", this.state.propertyTotal);
                cookie.save("propertyPuchased", this.state.propertyPuchased);
                cookie.save("propertySold", this.state.propertySold);

                cookie.save("plotAmount", this.state.plotAmount);
                cookie.save("house1Amount", this.state.house1Amount);
                cookie.save("house2Amount", this.state.house2Amount);
                cookie.save("condoAmount", this.state.condoAmount);
                cookie.save("buildingAmount", this.state.buildingAmount);
                cookie.save("mansionAmount", this.state.mansionAmount);

                cookie.save("plotQuantity", this.state.plotQuantity);
                cookie.save("house1Quantity", this.state.house1Quantity);
                cookie.save("house2Quantity", this.state.house2Quantity);
                cookie.save("condoQuantity", this.state.condoQuantity);
                cookie.save("buildingQuantity", this.state.buildingQuantity);
                cookie.save("mansionQuantity", this.state.mansionQuantity);
            
          };

        buyOrSell= purchase => {
            this.setState({buyOrSell:purchase})

            
        };

        currentBonus= bonus => {
            this.setState({currentBonus:bonus})

            cookie.save("currentMoney", this.state.currentMoney);
                cookie.save("currentBonus", this.state.currentBonus);
                cookie.save("moneyPerSecond", this.state.moneyPerSecond);
                cookie.save("moneyPerSecondWithBonus", this.state.moneyPerSecondWithBonus);

                cookie.save("propertyTotal", this.state.propertyTotal);
                cookie.save("propertyPuchased", this.state.propertyPuchased);
                cookie.save("propertySold", this.state.propertySold);

                cookie.save("plotAmount", this.state.plotAmount);
                cookie.save("house1Amount", this.state.house1Amount);
                cookie.save("house2Amount", this.state.house2Amount);
                cookie.save("condoAmount", this.state.condoAmount);
                cookie.save("buildingAmount", this.state.buildingAmount);
                cookie.save("mansionAmount", this.state.mansionAmount);

                cookie.save("plotQuantity", this.state.plotQuantity);
                cookie.save("house1Quantity", this.state.house1Quantity);
                cookie.save("house2Quantity", this.state.house2Quantity);
                cookie.save("condoQuantity", this.state.condoQuantity);
                cookie.save("buildingQuantity", this.state.buildingQuantity);
                cookie.save("mansionQuantity", this.state.mansionQuantity);
        };

        updateInfo = (propertyWorth, propertyQuantity, worth, amount, ptotal, perSecond) =>{
            this.setState(
                {   
                    [propertyWorth]:Math.round(worth),
                    [propertyQuantity]:amount,
                    propertyTotal: ptotal,
                    moneyPerSecond: Math.round(perSecond)
                })
                
                
                cookie.save("currentMoney", this.state.currentMoney);
                cookie.save("currentBonus", this.state.currentBonus);
                cookie.save("moneyPerSecond", this.state.moneyPerSecond);
                cookie.save("moneyPerSecondWithBonus", this.state.moneyPerSecondWithBonus);

                cookie.save("propertyTotal", this.state.propertyTotal);
                cookie.save("propertyPuchased", this.state.propertyPuchased);
                cookie.save("propertySold", this.state.propertySold);

                cookie.save("plotAmount", this.state.plotAmount);
                cookie.save("house1Amount", this.state.house1Amount);
                cookie.save("house2Amount", this.state.house2Amount);
                cookie.save("condoAmount", this.state.condoAmount);
                cookie.save("buildingAmount", this.state.buildingAmount);
                cookie.save("mansionAmount", this.state.mansionAmount);

                cookie.save("plotQuantity", this.state.plotQuantity);
                cookie.save("house1Quantity", this.state.house1Quantity);
                cookie.save("house2Quantity", this.state.house2Quantity);
                cookie.save("condoQuantity", this.state.condoQuantity);
                cookie.save("buildingQuantity", this.state.buildingQuantity);
                cookie.save("mansionQuantity", this.state.mansionQuantity);
                
                
          }

          playAudio() {
            const audioEl = document.getElementsByClassName("audio-element")[0]
            audioEl.play()
          }

          render()
          {

              return <div class="row general">
              <div class="row general">
              <MoneyCtrl email={this.props.email} house1Quantity={this.state.house1Quantity} condoQuantity={this.state.condoQuantity} mansionQuantity={this.state.mansionQuantity} returnCurrentMoney={this.updateCoins} giveCurrentMoney={this.state.currentMoney} currentPerSecond={this.state.moneyPerSecondWithBonus}></MoneyCtrl>
                  
              <div class="col-md-6 p-0">
                  <OptionsCtrl currentMoney={this.state.currentMoney} playerName={this.state.playerName} playerLevel={this.state.playerLevel} propertyTotal={this.state.propertyTotal} currentPerSecond={this.state.currentPerSecond}></OptionsCtrl>
                  <ItemsCtrl buyOrSell={this.state.buyOrSell} plotQuantity={this.state.plotQuantity} house1Quantity={this.state.house1Quantity} house2Quantity={this.state.house2Quantity} condoQuantity={this.state.condoQuantity} buildingQuantity={this.state.buildingQuantity} mansionQuantity={this.state.mansionQuantity}></ItemsCtrl>
              </div>
              <div class="col-md-3 p-0">
                  <div class="row">
                      <ItemPlusCtrl updateCurrentAmount={this.updateCoins} currentAmount={this.state.currentMoney} currentBonus={this.currentBonus}></ItemPlusCtrl>
                  </div>
                  <BuyAndSellCtrl buyOrSell={this.buyOrSell}></BuyAndSellCtrl>
                  <div class="items_count">
                     <PlotCtrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} plotWorth={this.state.plotAmount} plotQuantity={this.state.plotQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecondWithBonus}></PlotCtrl>
                     
                     <House1Ctrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} house1Worth={this.state.house1Amount} house1Quantity={this.state.house1Quantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecondWithBonus}></House1Ctrl>

                     <House2Ctrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} house2Worth={this.state.house2Amount} house2Quantity={this.state.house2Quantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecondWithBonus}></House2Ctrl>

                     <CondoCtrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} condoWorth={this.state.condoAmount} condoQuantity={this.state.condoQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecondWithBonus}></CondoCtrl>

                     <BuildingCtrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} buildingWorth={this.state.buildingAmount} buildingQuantity={this.state.buildingQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecondWithBonus}></BuildingCtrl>

                     <MansionCtrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} mansionWorth={this.state.mansionAmount} mansionQuantity={this.state.mansionQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecondWithBonus}></MansionCtrl>           
                  </div>
              </div>
              <ReactTooltip multiline={true} place="left" type="dark" effect="float"/>
              
                <audio autoplay className="audio-element">
                    <source type="audio/mp3" src="./sounds/background_music.mp3"></source>
                </audio>
          </div>
          </div>
          }
    }
 
 export default MainCtrl;