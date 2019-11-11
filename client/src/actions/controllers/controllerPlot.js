import React,{Component} from 'react';
import Plot from '../../components/properties/plot'


class PlotCtrl extends Component {
        constructor(props){
                super(props);
                  this.plotHandler = this.plotHandler.bind(this);
                   }

        plotHandler() {
                    if (this.props.currentMoney >= this.props.plotWorth){
                        this.props.returnCurrentMoney(this.props.currentMoney - this.props.plotWorth);

                        this.props.updatePlotInfo(
                            "plotAmount",
                            "plotQuantity",
                            this.props.plotWorth * 1.5,
                            this.props.plotQuantity + 1,
                            this.props.purchaseTotal + 1,
                            this.props.currentPerSecond + 3
                        );
                    }                     
                   };
              
              
        render()
              {
              return <Plot action={this.plotHandler} moneyDisplay={this.props.plotWorth} plotQuantity={this.props.plotQuantity}></Plot>
              }
      
        }

export default PlotCtrl;

