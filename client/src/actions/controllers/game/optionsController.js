import React,{Component} from 'react';
import Options from "../../../components/options"


class OptionsCtrl extends Component {

  constructor(props){
    super(props);
      this.state = {
        messageTitle: ["Buyer Demand Growing in Every Region", "Homeownership Rate Remains on the Rise",
        "Millennials: Here's Why the Process is Well Worth It","Planning on Buying a Home? You Know Your Options!",
        "The #1 Reason to List Your House in the Winter","Taking the Fear Out of the Mortgage Process",
        "How to Determine If You Can Afford to Buy Home","Selling Your Home? Waiting Is The Hardest Part.", 
        "4 Reasons to Buy a Home This Fall"],
        
        messageBody:["Buyers are out in full force this fall, increasing the demand for homebuying in all four regions of the Country.",
      "In the third quarter of 2019, the U.S. homeownership rate rose again, signaling another strong indicator of the current housing market.",
      "Millennials have waited longer than any other generation to become homeowners, but the wait for this cohort is just about over.",
      "With limited homes to buy today many buyers are considering a recently constructed home, or building the home of their dreams.",
      "Many sell homes during the spring because of buyer demand. What isn't realized is that other homeowners think similarly, which creates competition.",
      "A big number of potential buyers shy away from buying a home because of buying process uncertainty. A big one can if you qualify for a mortgage.",
      "The gap between personal income and house prices have been used to defend the concept that there is an affordability crisis in housing today.",
      "Tom Petty famously wrote, 'waiting is the hardest part' with early 80's hit song The Waiting. Waiting too long cause cause prices to change drastically.",
      "Homes can be a good investment, a personal space creates a healthy environment, no need to rent, and monthly payment that is predictable."],

      messageTitleShow: "Welcome to real estate clicker!",
      messageBodyShow: "Lets see how successful you become."

      }
    }

    componentDidMount() {
      this.interval = setInterval(() =>
      this.setState((prevState, props) => {
        
          let messageToShow = Math.floor(Math.random() * 8);
            this.setState({messageTitleShow:prevState.messageTitle[messageToShow], messageBodyShow:prevState.messageBody[messageToShow]});
            })
          , 30000);
    }

render()
{
  return <Options showTitle={this.state.messageTitleShow} showBody={this.state.messageBodyShow} currentMoney={this.props.currentMoney} playerName={this.props.playerName} playerLevel={this.props.playerLevel} propertyTotal={this.props.propertyTotal} currentPerSecond={this.props.currentPerSecond}></Options>
}

}

export default OptionsCtrl;