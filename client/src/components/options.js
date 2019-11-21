import React,{Component} from 'react';


class Options extends Component {

  constructor(props){
    super(props);
      this.state = {
        statusMessage: "Player Name:" + this.props.playerName +"<br> Current Money: " + this.props.currentMoney +"<br> Current Money Per Second:" + this.props.currentPerSecond +"<br> Current Level:" + this.props.currentLevel + "<br> Property Total:" + this.props.propertyTotal
      }
       }


    render() {
      return <div class="row">
      <div class="col-md-2 p-0">
          <div class="options"></div>
          <div data-tip={this.state.statusMessage} class="Stats">Status</div>
      </div>
      <div class="col-md-8 description"><h3>{this.props.showTitle}</h3>
      {this.props.showBody}
      </div>
      <div class="col-md-2 p-0">
          <div class="info"></div>
          <div class="legacy"></div>
      </div>
  </div>
    
    }
  }

  export default Options;