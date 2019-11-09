import React,{Component, useEffect} from 'react';
import ClickedCoin from '../actions/clickedCoin';



class Player extends Component {

    constructor(props){
        super(props);
          this.addOne = this.addOne.bind(this);
            this.state = {
              count : 0 ,
              hovered: false
            }
         }
     
     addOne() {                             
       this.setState((preState) => {
         return {
           count : preState.count + 1
           };
        });
      }

      
  
    


    render() {
      return <div class="col-md-3 p-0 back_coin">
        <div class="namePlayer">
            <p>Name Player</p>
            <h3>{this.state.count}</h3>
            <h5>Per seconds 120</h5>
        </div>
        
            <div class="coin">
                <a onClick={this.addOne}>
                    <img onMouseDown={() => this.setState(prevState =>({hovered: !prevState.hovered}))}   style={{transform: `${this.state.hovered ? 'scale(1.5,1.5)' : null}`}} src="./images/dollar.png" alt=""/>
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