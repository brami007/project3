import React,{Component} from 'react';



class Plot extends Component {
  
  constructor(props){
    super(props);
    
        this.state = {
            toolTip:"Plot <br> Produces: "+this.props.plotProductionPercent + "<br> Production per second: " + this.props.plotCoinPerSecond,
            toggleBlackAndWhite: "grayscale"
        }
  
  }

  componentDidMount() {
    this.interval = setInterval(() =>
    this.setState((prevState, props) => {
    if(this.props.moneyDisplay> this.props.currentMoney){
      this.setState(preState =>{ return {toggleBlackAndWhite: "grayscale"}})
      
    }else{
      this.setState(preState =>{ return {toggleBlackAndWhite: "color"}})
      
    }

    
      this.setState(preState =>{
        return {toolTip:"Plot <br> Produces: "+this.props.plotProductionPercent + " of Total <br> Production per second: " + this.props.plotCoinPerSecond }
      })
    }), 1000);
  }

    render() {
      return  <a onClick={this.props.action}>
      <div class="item_house_cont">
      
      <img data-tip={this.state.toolTip} class={this.state.toggleBlackAndWhite} src="./images/plot.png" alt=""/>
      
      <div class="date_cont">
      <audio autoplay className="plot-sound">
                    <source type="audio/mp3" src="./sounds/house_sound.mp3"></source>
              </audio>
          <h3>Plot</h3>
          <img class={this.state.toggleBlackAndWhite} src="./images/dollar.png" alt=""/>
          <p>{this.props.moneyDisplay}</p>
      </div>
          <h2>{this.props.plotQuantity}</h2>
      </div>
  </a>
    }
  }

  export default Plot;