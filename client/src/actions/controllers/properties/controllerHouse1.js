import React,{Component} from 'react';
import House1 from '../../../components/properties/house1'

class House1Ctrl extends Component {
  constructor(props){
    super(props);
    this.playAudioBuyHouse = this.playAudioBuyHouse.bind(this);
      this.house1Handler = this.house1Handler.bind(this);
      this.state = {
        house1PerSecond: 0,
        percentageTotal: 0,
        buySellPrice: 0
      }
       }

house1Handler() {
  console.log(this.props.buyOrSell)
  if(this.props.buyOrSell== "buy"){
        if (this.props.currentMoney >= this.props.house1Worth){
          this.playAudioBuyHouse();
            this.props.returnCurrentMoney(this.props.currentMoney - this.props.house1Worth);

                  this.props.updateInfo(
                      "house1Amount",
                      "house1Quantity",
                      this.props.house1Worth * 1.5,
                      this.props.house1Quantity + 1,
                      this.props.purchaseTotal + 1,
                      this.props.currentPerSecond + 6
                  );
             
                  this.setState(preState =>{
                    return {house1PerSecond: preState.house1PerSecond + 6}
                  })

                  
                  
                    this.setState(preState =>{
                      return {percentageTotal: Math.round((((preState.house1PerSecond/this.props.currentPerSecond)*100)+"%"))}
                    })
                  
              }} else{
                if (this.props.house1Quantity != 0){
                  this.props.returnCurrentMoney(Math.round(this.props.currentMoney + (this.props.house1Worth*.8)));
  
               
                  this.props.updateInfo(
                      "house1Amount",
                      "house1Quantity",
                      Math.round(this.props.house1Worth * .8),
                      this.props.house1Quantity - 1,
                      this.props.purchaseTotal - 1,
                      this.props.currentPerSecond - 6
                  );
  
                  this.setState(preState =>{
                    return {condoPerSecond: preState.house1PerSecond - 12}
                  })
  
                  
                  
                    this.setState(preState =>{
                      return {percentageTotal: (((preState.house1PerSecond/this.props.currentPerSecond)*100)+"%")}
                    })
                }}
              }
              playAudioBuyHouse() {
                const audioEl = document.getElementsByClassName("house1-sound")[0]
                audioEl.play()
              } 

              componentDidMount() {
                this.interval = setInterval(() => 
                this.setState(
                  this.setState(preState =>{
                    
                    if(this.props.buyOrSell == "sell" && this.props.house1Quantity != 0){
                      console.log("test")
                      return {buySellPrice:Math.round(this.props.house1Worth*.8),
                        percentageTotal: (((preState.house1PerSecond/this.props.currentPerSecond)*100)+"%")
                      }
                    } else{
                      return {buySellPrice:this.props.house1Worth,
                        percentageTotal: (((preState.house1PerSecond/this.props.currentPerSecond)*100)+"%")}
                    }
                    })
                    ), 100);
  }
              
             render()
             {
              return <House1 currentMoney={this.props.currentMoney} house1ProductionPercent={this.state.percentageTotal} house1CoinPerSecond={this.state.house1PerSecond} action={this.house1Handler} moneyDisplay={this.state.buySellPrice} house1Quantity={this.props.house1Quantity}></House1>
             }
     
       }

export default House1Ctrl;

