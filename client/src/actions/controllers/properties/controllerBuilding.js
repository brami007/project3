import React,{Component} from 'react';
import Building from '../../../components/properties/building'

class BuildingCtrl extends Component {
  constructor(props){
    super(props);
      this.buildingHandler = this.buildingHandler.bind(this);
      this.playAudioBuyHouse = this.playAudioBuyHouse.bind(this);
      this.state = {
        buildingPerSecond: 0,
        percentageTotal: 0,
        buySellPrice: 0
      }
       }



  buildingHandler() {
    if(this.props.buyOrSell== "buy"){
      if (this.props.currentMoney >= this.props.buildingWorth){
        this.playAudioBuyHouse();
        this.props.returnCurrentMoney(this.props.currentMoney - this.props.buildingWorth);
  
                    this.props.updateInfo(
                        "buildingAmount",
                        "buildingQuantity",
                        this.props.buildingWorth * 1.5,
                        this.props.buildingQuantity + 1,
                        this.props.purchaseTotal + 1,
                        this.props.currentPerSecond + 15
                    );
  
                    this.setState(preState =>{
                      return {buildingPerSecond: preState.buildingPerSecond + 15}
                    })
  
                    
  
                    this.setState(preState =>{
                      return {percentageTotal: Math.round((((preState.buildingPerSecond/this.props.currentPerSecond)*100)+"%"))}
                    })
                }
    } else{
       if (this.props.buildingQuantity != 0){
        this.props.returnCurrentMoney(Math.round(this.props.currentMoney + (this.props.buildingWorth*.8)));
  
                    this.props.updateInfo(
                        "buildingAmount",
                        "buildingQuantity",
                        Math.round(this.props.buildingWorth * .8),
                        this.props.buildingQuantity - 1,
                        this.props.purchaseTotal - 1,
                        this.props.currentPerSecond - 15
                    );
  
                    this.setState(preState =>{
                      return {buildingPerSecond: preState.buildingPerSecond - 15}
                    })
  
                    
  
                    this.setState(preState =>{
                      
                      return {percentageTotal: (((preState.buildingPerSecond/this.props.currentPerSecond)*100)+"%")}
                    })
                }

    }
    }

              componentDidMount() {
                this.interval = setInterval(() => 
                this.setState(
                  this.setState(preState =>{
                    
                    if(this.props.buyOrSell == "sell" && this.props.buildingQuantity != 0){
                      return {buySellPrice:Math.round(this.props.buildingWorth*.8),
                        percentageTotal: (((preState.buildingPerSecond/this.props.currentPerSecond)*100)+"%")
                      }
                    } else{
                      return {buySellPrice:this.props.buildingWorth,
                        percentageTotal: (((preState.buildingPerSecond/this.props.currentPerSecond)*100)+"%")}
                    }
                    })
                    ), 100);
  }
              
      
  playAudioBuyHouse() {
    const audioEl = document.getElementsByClassName("building-sound")[0]
    audioEl.play()
  }                 
             
              
             render()
             {
              return <Building currentMoney={this.props.currentMoney} buildingProductionPercent={this.state.percentageTotal} buildingCoinPerSecond={this.state.buildingPerSecond} action={this.buildingHandler} moneyDisplay={this.state.buySellPrice} buildingQuantity={this.props.buildingQuantity}></Building>
             }
     
       }
      

export default BuildingCtrl;


