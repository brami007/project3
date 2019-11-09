import React,{Component} from 'react';


class Plot extends Component {
  constructor(props){
    super(props);
      this.addOne = this.addOne.bind(this);
        this.state = {
          count : 0 ,
          money: 0
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
      return  <div class="item_house_cont">
      <img src="./images/plot.png" alt=""/>
      <div class="date_cont">
          <h3>Plot</h3>
          <a onClick={this.addOne}>
          <img src="./images/dollar.png" alt=""/><p>{this.state.count}</p>
          </a>
      </div>
      <h2>32</h2>
  </div>
    }
  }

  export default Plot;