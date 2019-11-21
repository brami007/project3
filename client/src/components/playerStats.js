import React,{Component, useEffect} from 'react';




class Player extends Component {

    constructor(props){
        super(props);
          this.toggleHover = this.toggleHover.bind(this);
          this.startGameMessage = this.startGameMessage.bind(this);
            this.state = {
              //currentMoney : 0 ,
              hovered: false,
              startGame:<h3><font color="red">Click the coin to start the game!</font></h3>
            }
         }

    
      toggleHover() {
        this.setState({hovered: !this.state.hovered})
      }

      startGameMessage(){
        this.setState({startGame:""})
      }

    render() {
      return <div  class="col-md-3 p-0 back_coin">
        <div class="namePlayer">
            <p>{this.props.email}</p>
            <h3>You have earned</h3>
            <br></br>
            <h3><a>{this.props.moneyDisplay}</a> coins</h3>
            <h5>You're earning {this.props.currentPerSecond} per second</h5>
        </div>
        
            <div class="coin">
            <audio autoplay className="coin-sound">
                    <source type="audio/mp3" src="./sounds/coin_sound.mp3"></source>
              </audio>
                <a onClick={this.props.action}>
                    <img onClick={this.startGameMessage} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}   style={{transform: `${this.state.hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'}`}} src="./images/dollar.png" alt=""/>
                    <br></br>
                    {this.state.startGame}
                    
            </a>
        
        </div>
        <div class="level">
              <audio autoplay className="medal-sound">
                    <source type="audio/mp3" src="./sounds/levelup_sound.mp3"></source>
              </audio>
            <h3>Level {this.props.currentLevel}</h3>
            <img src={this.props.currentMedal} alt=""/>
        </div>
    </div>
    
    }
  }

  export default Player;