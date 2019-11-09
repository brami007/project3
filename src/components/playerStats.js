import React,{Component, useEffect} from 'react';
import ClickedCoin from '../actions/clickedCoin';



class Player extends Component {

    constructor(props){
        super(props);
          this.addOne = this.addOne.bind(this);
          this.toggleHover = this.toggleHover.bind(this);
            this.state = {
              currentMoney : 0 ,
              hovered: false
            }
         }

        
         
     
     addOne() {                             
       this.setState((preState) => {
         return {
           currentMoney : preState.currentMoney + 1
           };
        });
      }

      
      toggleHover() {
        this.setState({hovered: !this.state.hovered})
      }
    


    render() {
      return <div class="col-md-3 p-0 back_coin">
        <div class="namePlayer">
            <p>Name Player</p>
            <h3>{this.state.currentMoney}</h3>
            <h5>Per seconds 120</h5>
        </div>
        
            <div class="coin">
                <a onClick={this.addOne}>
                    <img onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}   style={{transform: `${this.state.hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'}`}} src="./images/dollar.png" alt=""/>
            </a>
        
        </div>
        <div class="level">
            <h3>Level 1</h3>
            <img src="./images/medal.png" alt=""/>
        </div>
    </div>
    
    }
  }

  export default Player;