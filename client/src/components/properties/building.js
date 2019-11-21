import React,{Component} from 'react';


class Building extends Component {

  constructor(props){
    super(props);

    this.state = {
      toolTip:"Building <br> Produces: 0 <br> Production per second: 0",
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
          return {toolTip:"Building <br> Produces: "+this.props.buildingProductionPercent + " of Total <br> Production per second: " + this.props.buildingCoinPerSecond,
          }
          
        })
        
        })
    , 1000);
}


 
    

   
    render() {
      return <a onClick={this.props.action}>
      <div class="item_house_cont">
      <img data-tip={this.state.toolTip}  class={this.state.toggleBlackAndWhite} src="./images/building.png" alt=""/>
      <div class="date_cont">
          <h3>Building</h3>
          <audio autoplay className="building-sound">
                    <source type="audio/mp3" src="./sounds/house_sound.mp3"></source>
              </audio>
          <img class={this.state.toggleBlackAndWhite}  src="./images/dollar.png" alt=""/>
          <p>{this.props.moneyDisplay}</p>
          </div>
              <h2>{this.props.buildingQuantity}</h2>
          </div>
      </a>
    }
  }

  export default Building;