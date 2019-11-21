import React,{Component} from 'react';
import Mansion from '../../../components/properties/mansion'

class MansionCtrl extends Component {
  constructor(props){
    super(props);
    this.playAudioBuyHouse = this.playAudioBuyHouse.bind(this);
      this.mansionHandler = this.mansionHandler.bind(this);
      this.state = {
        mansionPerSecond: 0,
        percentageTotal: 0,
        buySellPrice: 0
      }
       }

mansionHandler() {
  if(this.props.buyOrSell== "buy"){

        if (this.props.currentMoney >= this.props.mansionWorth){
            this.props.returnCurrentMoney(this.props.currentMoney - this.props.mansionWorth);
            this.playAudioBuyHouse();
                  this.props.updateInfo(
                      "mansionAmount",
                      "mansionQuantity",
                      this.props.mansionWorth * 1.5,
                      this.props.mansionQuantity + 1,
                      this.props.purchaseTotal + 1,
                      this.props.currentPerSecond + 18
                  );

                  this.setState(preState =>{
                    return {mansionPerSecond: preState.mansionPerSecond + 18}
                  })

                  
                  
                    this.setState(preState =>{
                      return {percentageTotal: Math.round((((preState.mansionPerSecond/this.props.currentPerSecond)*100)+"%"))}
                    })

                  }} else{
                    if (this.props.mansionQuantity != 0){
                      this.props.returnCurrentMoney(Math.round(this.props.currentMoney + (this.props.mansionWorth*.8)));
      
                   
                      this.props.updateInfo(
                          "mansionAmount",
                          "mansionQuantity",
                          Math.round(this.props.mansionWorth * .8),
                          this.props.mansionQuantity - 1,
                          this.props.purchaseTotal - 1,
                          this.props.currentPerSecond - 18
                      );
      
                      this.setState(preState =>{
                        return {condoPerSecond: preState.mansionPerSecond - 12}
                      })
      
                      
                      
                        this.setState(preState =>{
                          return {percentageTotal: (((preState.mansionPerSecond/this.props.currentPerSecond)*100)+"%")}
                        })
                    }}
                  }

                  playAudioBuyHouse() {
                    const audioEl = document.getElementsByClassName("mansion-sound")[0]
                    audioEl.play()
                  } 
    

              componentDidMount() {
                this.interval = setInterval(() => 
                this.setState(
                  this.setState(preState =>{
                    
                    if(this.props.buyOrSell == "sell" && this.props.mansionQuantity != 0){
                      return {buySellPrice:Math.round(this.props.mansionWorth*.8),
                        percentageTotal: (((preState.mansionPerSecond/this.props.currentPerSecond)*100)+"%")
                      }
                    } else{
                      return {buySellPrice:this.props.mansionWorth,
                        percentageTotal: (((preState.mansionPerSecond/this.props.currentPerSecond)*100)+"%")}
                    }
                    })
                    ), 100);
  }
     
             render()
             {
              return <Mansion currentMoney={this.props.currentMoney} mansionProductionPercent={this.state.percentageTotal} mansionCoinPerSecond={this.state.mansionPerSecond} action={this.mansionHandler} moneyDisplay={this.state.buySellPrice} mansionQuantity={this.props.mansionQuantity}></Mansion>
             }
     
       }

export default MansionCtrl;

