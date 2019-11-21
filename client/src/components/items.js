import React,{Component} from 'react';



class Items extends Component {

    constructor(props){
        super(props);
        
            this.state = {
                plotRows: [],
                plotCount: 0,

                house1Rows: [],
                house1Count: 0,

                house2Rows: [],
                house2Count: 0,

                condoRows: [],
                condoCount: 0,

                buildingRows: [],
                buildingCount: 0,

                mansionRows: [],
                mansionCount: 0,
            }
         
        }

    
     
    
      componentDidMount() {
        
        this.interval = setInterval(() =>
         
            this.setState((prevState, props) => {
              if(this.props.buyOrSell == "buy"){
                if((this.props.plotQuantity%5)==0  && this.props.plotQuantity != 0 && this.props.plotQuantity != this.state.plotCount){
                  
                  const plotrow = {content: <li><img src="./images/plot.png" alt=""/></li> };
                  return {    plotRows: [...prevState.plotRows, plotrow],
                              plotCount: prevState.plotCount + 5 };
              }
              if((this.props.house1Quantity%5)==0  && this.props.house1Quantity != 0 && this.props.house1Quantity != this.state.house1Count){
                  const house1row = {content: <li><img src="./images/house1.png" alt=""/></li> };
                  return {    house1Rows: [...prevState.house1Rows, house1row],
                      house1Count: prevState.house1Count + 5 };
              }
              if((this.props.house2Quantity%5)==0  && this.props.house2Quantity != 0 && this.props.house2Quantity != this.state.house2Count){
                  const house2row = {content: <li><img src="./images/house2.png" alt=""/></li> };
                  return {    house2Rows: [...prevState.house2Rows, house2row],
                      house2Count: prevState.house2Count + 5 };
              }
              if((this.props.condoQuantity%5)==0  && this.props.condoQuantity != 0 && this.props.condoQuantity != this.state.condoCount){
                  const condorow = {content: <li><img src="./images/condo.png" alt=""/></li> };
                  return {    condoRows: [...prevState.condoRows, condorow],
                      condoCount: prevState.condoCount + 5 };
              }
              if((this.props.buildingQuantity%5)==0  && this.props.buildingQuantity != 0 && this.props.buildingQuantity != this.state.buildingCount){
                  const buildingrow = {content: <li><img src="./images/building.png" alt=""/></li> };
                  return {    buildingRows: [...prevState.buildingRows, buildingrow],
                      buildingCount: prevState.buildingCount + 5 };
              }
              if((this.props.mansionQuantity%5)==0  && this.props.mansionQuantity != 0 && this.props.mansionQuantity != this.state.mansionCount){
                  const mansionrow = {content: <li><img src="./images/mansion.png" alt=""/></li> };
                  return {    mansionRows: [...prevState.mansionRows, mansionrow],
                      mansionCount: prevState.mansionCount + 5 };
              }

              }else{
                if((this.props.plotQuantity%5)==0  && this.props.plotQuantity != this.state.plotCount){
                  
                  let newData = prevState.plotRows.slice() //copy array from prevState
                newData.splice(0, 1) // remove element
                  return {    plotRows: newData,
                              plotCount: prevState.plotCount - 5 };
              }
              if((this.props.house1Quantity%5)==0  && this.props.house1Quantity != this.state.house1Count){
                let newData = prevState.house1Rows.slice() //copy array from prevState
                newData.splice(0, 1) // remove element
                  return {    house1Rows: newData,
                      house1Count: prevState.house1Count - 5 };
              }
              if((this.props.house2Quantity%5)==0  && this.props.house2Quantity != this.state.house2Count){
                let newData = prevState.house2Rows.slice() //copy array from prevState
                newData.splice(0, 1) // remove element
                  return {    house2Rows: newData,
                      house2Count: prevState.house2Count - 5 };
              }
              if((this.props.condoQuantity%5)==0  &&  this.props.condoQuantity != this.state.condoCount){
                let newData = prevState.condoRows.slice() //copy array from prevState
                newData.splice(0, 1) // remove element
                  return {    condoRows: newData,
                      condoCount: prevState.condoCount - 5 };
              }
              if((this.props.buildingQuantity%5)==0   && this.props.buildingQuantity != this.state.buildingCount){
                let newData = prevState.buildingRows.slice() //copy array from prevState
                newData.splice(0, 1) // remove element
                  return {    buildingRows: newData,
                      buildingCount: prevState.buildingCount - 5 };
              }
              if((this.props.mansionQuantity%5)==0  && this.props.mansionQuantity != this.state.mansionCount){
                let newData = prevState.mansionRows.slice() //copy array from prevState
                newData.splice(0, 1) // remove element
                
                  return {    mansionRows: newData,
                      mansionCount: prevState.mansionCount - 5 };
              }

              }

                
              })
          , 100);
      }
    componentWillUnmount() {
        clearInterval(this.interval);
      }


    render() {
      return                    <div class="row items">
      <div class="item_plot">
          <ul>
              {this.state.plotRows.map(plotrow => (
                <a>
                  {plotrow.content}
                </a>
              ))}
          </ul>
      </div>

      <div class="item_house">
          <ul>
          {this.state.house1Rows.map(house1row => (
            <a>
              {house1row.content}
            </a>
          ))}
          </ul>
      </div>
      <div class="item_house2">
          <ul>
          {this.state.house2Rows.map(house2row => (
            <a>
              {house2row.content}
            </a>
          ))}
          </ul>
      </div>

      <div class="item_condo">
          <ul>
          {this.state.condoRows.map(condorow => (
            <a>
              {condorow.content}
            </a>
          ))}
          </ul>
      </div>
      <div class="item_building">
      <ul>
      {this.state.buildingRows.map(buildingrow => (
        <a>
          {buildingrow.content}
        </a>
      ))}
          </ul>
      </div>
      <div class="item_mansion">
          <ul>
          {this.state.mansionRows.map(mansionrow => (
            <a>
              {mansionrow.content}
            </a>
          ))}
          </ul>
      </div>
  </div>
    
    }
  }

  export default Items;