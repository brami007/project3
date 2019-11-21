import React,{Component} from 'react';


class House2 extends Component {
  
  constructor(props){
    super(props);
    
        this.state = {
            toolTip:"House2 <br> Produces: "+this.props.house2ProductionPercent + "<br> Production per second: " + this.props.house2CoinPerSecond,
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
        return {toolTip:"House2 <br> Produces: "+this.props.house2ProductionPercent + " of Total <br> Production per second: " + this.props.house2CoinPerSecond }
      })
    }), 1000);
  }

    render() {
      return <a onClick={this.props.action}>
      <div class="item_house_cont">
      <img data-tip={this.state.toolTip} class={this.state.toggleBlackAndWhite} src="./images/house2.png" alt=""/>
      <div class="date_cont">
      <audio autoplay className="house2-sound">
                    <source type="audio/mp3" src="./sounds/house_sound.mp3"></source>
              </audio>
          <h3>House</h3>
          <img class={this.state.toggleBlackAndWhite} src="./images/dollar.png" alt=""/>
      <p>{this.props.moneyDisplay}</p>
      </div>
      <h2>{this.props.house2Quantity}</h2>
      </div>
      </a>
    }
  }

  export default House2;