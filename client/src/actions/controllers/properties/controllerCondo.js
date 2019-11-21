import React,{Component} from 'react';
import Condo from '../../../components/properties/condo'

class CondoCtrl extends Component {
  constructor(props){
    super(props);
      this.condoHandler = this.condoHandler.bind(this);
      this.playAudioBuyHouse = this.playAudioBuyHouse.bind(this);
      this.state = {
        condoPerSecond: 0,
        percentageTotal: 0,
        buySellPrice: 0
      }
       }

  condoHandler() {
    if(this.props.buyOrSell== "buy"){
        if (this.props.currentMoney >= this.props.condoWorth){
          this.playAudioBuyHouse();
            this.props.returnCurrentMoney(this.props.currentMoney - this.props.condoWorth);

             
                  this.props.updateInfo(
                      "condoAmount",
                      "condoQuantity",
                      this.props.condoWorth * 1.5,
                      this.props.condoQuantity + 1,
                      this.props.purchaseTotal + 1,
                      this.props.currentPerSecond + 12
                  );

                  this.setState(preState =>{
                    return {condoPerSecond: preState.condoPerSecond + 12}
                  })

                  
                  
                    this.setState(preState =>{
                      return {percentageTotal: Math.round((((preState.condoPerSecond/this.props.currentPerSecond)*100)+"%"))}
                    })
                  
              }
            } else{
              if (this.props.condoQuantity != 0){
                this.props.returnCurrentMoney(Math.round(this.props.currentMoney + (this.props.condoWorth*.8)));

             
                this.props.updateInfo(
                    "condoAmount",
                    "condoQuantity",
                    Math.round(this.props.condoWorth * .8),
                    this.props.condoQuantity - 1,
                    this.props.purchaseTotal - 1,
                    this.props.currentPerSecond - 12
                );

                this.setState(preState =>{
                  return {condoPerSecond: preState.condoPerSecond - 12}
                })

                
                
                  this.setState(preState =>{
                    return {percentageTotal: (((preState.condoPerSecond/this.props.currentPerSecond)*100)+"%")}
                  })
              }
              }
            }

              componentDidMount() {
                this.interval = setInterval(() => 
                this.setState(
                  this.setState(preState =>{
                    
                    if(this.props.buyOrSell == "sell" && this.props.condoQuantity != 0){
                      return {buySellPrice:Math.round(this.props.condoWorth*.8),
                        percentageTotal: (((preState.condoPerSecond/this.props.currentPerSecond)*100)+"%")
                      }
                    } else{
                      return {buySellPrice:this.props.condoWorth,
                        percentageTotal: (((preState.condoPerSecond/this.props.currentPerSecond)*100)+"%")}
                    }
                    })
                    ), 100);
  }

                playAudioBuyHouse() {
                  const audioEl = document.getElementsByClassName("condo-sound")[0]
                  audioEl.play()
                }  
   
                  
                  render()
             {
              return <Condo currentMoney={this.props.currentMoney} condoProductionPercent={this.state.percentageTotal} condoCoinPerSecond={this.state.condoPerSecond} action={this.condoHandler} moneyDisplay={this.state.buySellPrice} condoQuantity={this.props.condoQuantity}></Condo>
             }
     
       }

export default CondoCtrl;

