import React,{Component} from 'react';


class Mansion extends Component {
    
  constructor(props){
    super(props);
    
        this.state = {
            toolTip:"Mansion <br> Produces: "+this.props.mansionProductionPercent + "<br> Production per second: " + this.props.mansionCoinPerSecond,
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
        return {toolTip:"Mansion <br> Produces: "+this.props.mansionProductionPercent + " of Total <br> Production per second: " + this.props.mansionCoinPerSecond }
      })
    }), 1000);
  }

    render() {
      return <a onClick={this.props.action}>
      <div class="item_house_cont">
      <img data-tip={this.state.toolTip} class={this.state.toggleBlackAndWhite} src="./images/mansion.png" alt=""/>
      <div class="date_cont">
      <audio autoplay className="mansion-sound">
                    <source type="audio/mp3" src="./sounds/house_sound.mp3"></source>
              </audio>
          <h3>Mansion</h3>
          <img class={this.state.toggleBlackAndWhite} src="./images/dollar.png" alt=""/>
          <p>{this.props.moneyDisplay}</p>
          </div>
              <h2>{this.props.mansionQuantity}</h2>
          </div>
      </a>
    }
  }

  export default Mansion;