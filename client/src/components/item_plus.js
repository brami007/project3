import React,{Component} from 'react';



class ItemPlus extends Component {
  


    render() {
      return <div class="items_plus">
      <ul>

      <li><img class={this.props.item1Color} onClick={this.props.item1Press} data-tip="Worker 1 <br> Increases the rent +0,3% <br> Price: 100" src="./images/plus2.png" alt=""/></li>
      <li><img class={this.props.item2Color} onClick={this.props.item2Press} data-tip="Remodeling <br> Increases the rent +0,3% <br> Price: 100" src="./images/plus4.png" alt=""/></li>
      <li><img class={this.props.item3Color} onClick={this.props.item3Press} data-tip="Worker 2 <br> Increases the rent +0,3% <br> Price: 100" src="./images/plus3.png" alt=""/></li>
      <li><img class={this.props.item4Color} onClick={this.props.item4Press} data-tip="Furniture <br> Increases the rent +0,3% <br> Price: 100" src="./images/plus5.png" alt=""/></li>
      <li><img class={this.props.item5Color} onClick={this.props.item5Press} data-tip="Sculpture <br> Increases the rent +0,6% <br> Price: 1,000" src="./images/plus.png" alt=""/></li>
      <li><img class={this.props.item6Color} onClick={this.props.item6Press} data-tip="Fountaine <br> Increases the rent +0,6% <br> Price: 1,000" src="./images/plus7.png" alt=""/></li>
      <li><img class={this.props.item7Color} onClick={this.props.item7Press} data-tip="Remodeling 2 <br> Increases the rent +0,6% <br> Price: 3,000" src="./images/plus4.png" alt=""/></li>
      <li><img class={this.props.item8Color} onClick={this.props.item8Press} data-tip="Architect 1 <br> Increases the rent +0,7% <br> Price: 7,000" src="./images/plus3.png" alt=""/></li>
      <li><img class={this.props.item9Color} onClick={this.props.item9Press} data-tip="Furniture 2 <br> Increases the rent +0,8% <br> Price: 8,000" src="./images/plus5.png" alt=""/></li>
      <li><img class={this.props.item10Color} onClick={this.props.item10Press} data-tip="Attractions <br> Increases the rent +0,9% <br> Price: 10,000" src="./images/plus8.png" alt=""/></li>
      <li><img class={this.props.item11Color} onClick={this.props.item11Press} data-tip="Sculpture 2 <br> Increases the rent +0,9% <br> Price: 10,000" src="./images/plus.png" alt=""/></li>
      <li><img class={this.props.item12Color} onClick={this.props.item12Press} data-tip="Attractions 2 <br> Increases the rent +1% <br> Price: 20,000" src="./images/plus8.png" alt=""/></li>
      <li><img class={this.props.item13Color} onClick={this.props.item13Press} data-tip="Landing pad <br> Increases the rent +1% <br> Price: 20,000" src="./images/plus6.png" alt=""/></li>
      <li><img class={this.props.item14Color} onClick={this.props.item14Press} data-tip="Sculpture 3 <br> Increases the rent +1% <br> Price: 20,000" src="./images/plus.png" alt=""/></li>
      <li><img class={this.props.item15Color} onClick={this.props.item15Press} data-tip="Landing pad 2 <br> Increases the rent +1,3% <br> Price: 30,000" src="./images/plus6.png" alt=""/></li>
      <li><img class={this.props.item16Color} onClick={this.props.item16Press} data-tip="Sculpture 4 <br> Increases the rent +1,3% <br> Price: 30,000" src="./images/plus.png" alt=""/></li>
      <li><img class={this.props.item17Color} onClick={this.props.item17Press} data-tip="Architect 2 <br> Increases the rent +1,6% <br> Price: 35,000" src="./images/plus2.png" alt=""/></li>
      <li><img class={this.props.item18Color} onClick={this.props.item18Press} data-tip="Sculpture 5 <br> Increases the rent +2% <br> Price: 50,000" src="./images/plus.png" alt=""/></li>

      </ul>
  </div>
    }
  }

  export default ItemPlus;