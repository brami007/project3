import React,{Component} from 'react';
import House2 from '../../../components/properties/house2'

class House2Ctrl extends Component {
  constructor(props){
    super(props);
    this.playAudioBuyHouse = this.playAudioBuyHouse.bind(this);
      this.house2Handler = this.house2Handler.bind(this);
      this.state = {
        house2PerSecond: 0,
        percentageTotal: 0,
        buySellPrice: 0
      }
       }

house2Handler() {
  if(this.props.buyOrSell== "buy"){
        if (this.props.currentMoney >= this.props.house2Worth){
          this.playAudioBuyHouse();
            this.props.returnCurrentMoney(this.props.currentMoney - this.props.house2Worth);
            
                  this.props.updateInfo(
                      "house2Amount",
                      "house2Quantity",
                      this.props.house2Worth * 1.5,
                      this.props.house2Quantity + 1,
                      this.props.purchaseTotal + 1,
                      this.props.currentPerSecond + 9
                  );

                  this.setState(preState =>{
                    return {house2PerSecond: preState.house2PerSecond + 9}
                  })

                  
                  
                    this.setState(preState =>{
                      return {percentageTotal: Math.round((((preState.house2PerSecond/this.props.currentPerSecond)*100)+"%"))}
                    })
                  
              }} else{
                if (this.props.house2Quantity != 0){
                  this.props.returnCurrentMoney(Math.round(this.props.currentMoney + (this.props.house2Worth*.8)));
  
               
                  this.props.updateInfo(
                      "house2Amount",
                      "house2Quantity",
                      Math.round(this.props.house2Worth * .8),
                      this.props.house2Quantity - 1,
                      this.props.purchaseTotal - 1,
                      this.props.currentPerSecond - 9
                  );
  
                  this.setState(preState =>{
                    return {condoPerSecond: preState.house2PerSecond - 12}
                  })
  
                  
                  
                    this.setState(preState =>{
                      return {percentageTotal: (((preState.house2PerSecond/this.props.currentPerSecond)*100)+"%")}
                    })
                }}
              }

              playAudioBuyHouse() {
                const audioEl = document.getElementsByClassName("house2-sound")[0]
                audioEl.play()
              } 

              componentDidMount() {
                this.interval = setInterval(() => 
                this.setState(
                  this.setState(preState =>{
                    
                    if(this.props.buyOrSell == "sell"&& this.props.house2Quantity != 0){
                      return {buySellPrice:Math.round(this.props.house2Worth*.8),
                        percentageTotal: (((preState.house2PerSecond/this.props.currentPerSecond)*100)+"%")
                      }
                    } else{
                      return {buySellPrice:this.props.house2Worth,
                        percentageTotal: (((preState.house2PerSecond/this.props.currentPerSecond)*100)+"%")}
                    }
                    })
                    ), 100);
  }
             render()
             {
              return <House2 currentMoney={this.props.currentMoney} house2ProductionPercent={this.state.percentageTotal} house2CoinPerSecond={this.state.house2PerSecond} action={this.house2Handler} moneyDisplay={this.state.buySellPrice} house2Quantity={this.props.house2Quantity}></House2>
             }
     
       }

export default House2Ctrl;

