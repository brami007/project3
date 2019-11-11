import React,{Component} from 'react';
import './App.css';

import Statistics from "./actions/controllers/controllerStatistics"


class App extends Component{
   
          buyProperty() {
            this.setState((preState) => {
                return {
                  currentMoney : preState.currentMoney + 1
                  };
               });
          }
    
    
    render()
{
    return <div class="row general">
    <Statistics></Statistics>
</div>
}
}



export default App;
