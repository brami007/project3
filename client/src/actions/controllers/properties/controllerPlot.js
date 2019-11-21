import React,{Component} from 'react';
import Plot from '../../../components/properties/plot'

class PlotCtrl extends Component {
  constructor(props){
    super(props);
    this.playAudioBuyHouse = this.playAudioBuyHouse.bind(this);
      this.plotHandler = this.plotHandler.bind(this);
      this.state = {
        plotPerSecond: 0,
        percentageTotal: 0,
        buySellPrice: 0
      }
       }

plotHandler() {
  if(this.props.buyOrSell== "buy"){
        if (this.props.currentMoney >= this.props.plotWorth){
          this.playAudioBuyHouse();
            this.props.returnCurrentMoney(this.props.currentMoney - this.props.plotWorth);

                  this.props.updateInfo(
                      "plotAmount",
                      "plotQuantity",
                      this.props.plotWorth * 1.5,
                      this.props.plotQuantity + 1,
                      this.props.purchaseTotal + 1,
                      this.props.currentPerSecond + 3
                  );

                  this.setState(preState =>{
                    return {plotPerSecond: preState.plotPerSecond + 3}
                  })

                  
                  
                    this.setState(preState =>{
                      return {percentageTotal: (((preState.plotPerSecond/this.props.currentPerSecond)*100)+"%")}
                    })
     
                  }} else{
                    if (this.props.plotQuantity != 0){
                      this.props.returnCurrentMoney(Math.round(this.props.currentMoney + (this.props.plotWorth*.8)));
      
                   
                      this.props.updateInfo(
                          "plotAmount",
                          "plotQuantity",
                          Math.round(this.props.plotWorth * .8),
                          this.props.plotQuantity - 1,
                          this.props.purchaseTotal - 1,
                          this.props.currentPerSecond - 3
                      );
      
                      this.setState(preState =>{
                        return {condoPerSecond: preState.plotPerSecond - 12}
                      })
      
                      
                      
                        this.setState(preState =>{
                          return {percentageTotal: (((preState.plotPerSecond/this.props.currentPerSecond)*100)+"%")}
                        })
                    }}
                  }

              componentDidMount() {
                this.interval = setInterval(() => 
                
                this.setState(
                  
                  this.setState(preState =>{
                    
                    if(this.props.buyOrSell == "sell" && this.props.plotQuantity != 0){
                      return {buySellPrice:Math.round(this.props.plotWorth*.8),
                        percentageTotal: (((preState.plotPerSecond/this.props.currentPerSecond)*100)+"%")
                      }
                    } else{
                      return {buySellPrice:this.props.plotWorth,
                        percentageTotal: (((preState.plotPerSecond/this.props.currentPerSecond)*100)+"%")}
                    }
                    })
                    ), 100);

                    
  }
  playAudioBuyHouse() {
    const audioEl = document.getElementsByClassName("plot-sound")[0]
    audioEl.play()
  } 
   
             render()
             {
              return <Plot currentMoney={this.props.currentMoney} plotProductionPercent={this.state.percentageTotal} plotCoinPerSecond={this.state.plotPerSecond} action={this.plotHandler} moneyDisplay={this.state.buySellPrice} plotQuantity={this.props.plotQuantity}></Plot>
             }
     
       }

export default PlotCtrl;

