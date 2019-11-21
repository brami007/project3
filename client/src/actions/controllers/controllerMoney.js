import React,{Component} from 'react';
import PlayerStats from "../../components/playerStats"


class MoneyCtrl extends Component {
  constructor(props){
     super(props);
     this.playAudioLevelUp = this.playAudioLevelUp.bind(this);
       this.moneyHandler = this.moneyHandler.bind(this);
       this.playAudioCoin = this.playAudioCoin.bind(this);
       this.state = {
         currentLevel: 0,
         medalImage:"./images/medal.png",
         firstMedal: false,
        secondMedal: false,
        thirdMedal: false
         
       }
       
       
        }
       

  moneyHandler() {
    this.playAudioCoin();
     this.props.returnCurrentMoney(this.props.giveCurrentMoney+1);
     
   }

   componentDidMount() {
    this.interval = setInterval(() => 
    
    this.setState((prevState, props) => {
      
      if(this.props.house1Quantity == 20 && this.state.firstMedal == false){
          this.playAudioLevelUp();
          this.setState({
          currentLevel:1,
          medalImage:"./images/bronce_medal.png",
          firstMedal: true
        })
      }else if(this.props.condoQuantity == 20 && this.state.secondMedal == false){
        this.playAudioLevelUp();
        this.setState({
          currentLevel:2,
          medalImage:"./images/silver_medal.png",
          secondMedal: true
        })
      }else if(this.props.mansionQuantity == 20 && this.state.thirdMedal == false){
        this.playAudioLevelUp();
        this.setState({
          currentLevel:3,
          medalImage:"./images/e0524.png",
          thirdMedal: true
        })
      }
      
      
      }), 1000);
    }

    playAudioLevelUp() {
      const audioEl = document.getElementsByClassName("medal-sound")[0]
      audioEl.play()
    }

    playAudioCoin() {
      const audioEl = document.getElementsByClassName("coin-sound")[0]
      audioEl.play()
    }



   render()
   {
     return <PlayerStats email={this.props.email} currentLevel={this.state.currentLevel} currentMedal={this.state.medalImage} action={this.moneyHandler} moneyDisplay={this.props.giveCurrentMoney} currentPerSecond={this.props.currentPerSecond} ></PlayerStats>
     
     
    }
  
  }

export default MoneyCtrl;