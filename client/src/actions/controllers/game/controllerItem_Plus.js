import React,{Component} from 'react';
import cookie from 'react-cookies'
import ItemPlus from "../../../components/item_plus"


class ItemPlusCtrl extends Component {
  constructor(props){
    super(props);
    this.item1Press = this.item1Press.bind(this);
    this.item2Press = this.item2Press.bind(this);
    this.item3Press = this.item3Press.bind(this);
    this.item4Press = this.item4Press.bind(this);
    this.item5Press = this.item5Press.bind(this);
    this.item6Press = this.item6Press.bind(this);
    this.item7Press = this.item7Press.bind(this);
    this.item8Press = this.item8Press.bind(this);
    this.item9Press = this.item9Press.bind(this);
    this.item10Press = this.item10Press.bind(this);
    this.item11Press = this.item11Press.bind(this);
    this.item12Press = this.item12Press.bind(this);
    this.item13Press = this.item13Press.bind(this);
    this.item14Press = this.item14Press.bind(this);
    this.item15Press = this.item15Press.bind(this);
    this.item16Press = this.item16Press.bind(this);
    this.item17Press = this.item17Press.bind(this);
    this.item18Press = this.item18Press.bind(this);
    
        this.state = {
          bonusTotal: 0,

          bonus1:.003,
          bonus2:.003,
          bonus3:.003,
          bonus4:.003,
          bonus5:.006,
          bonus6:.006,
          bonus7:.006,
          bonus8:.007,
          bonus9:.008,
          bonus10:.009,
          bonus11:.009,
          bonus12:.01,
          bonus13:.01,
          bonus14:.01,
          bonus15:.013,
          bonus16:.013,
          bonus17:.016,
          bonus18:.02,

          bonus1CurrentColor:"grayscale",
          bonus2CurrentColor:"grayscale",
          bonus3CurrentColor:"grayscale",
          bonus4CurrentColor:"grayscale",
          bonus5CurrentColor:"grayscale",
          bonus6CurrentColor:"grayscale",
          bonus7CurrentColor:"grayscale",
          bonus8CurrentColor:"grayscale",
          bonus9CurrentColor:"grayscale",
          bonus10CurrentColor:"grayscale",
          bonus11CurrentColor:"grayscale",
          bonus12CurrentColor:"grayscale",
          bonus13CurrentColor:"grayscale",
          bonus14CurrentColor:"grayscale",
          bonus15CurrentColor:"grayscale",
          bonus16CurrentColor:"grayscale",
          bonus17CurrentColor:"grayscale",
          bonus18CurrentColor:"grayscale",

          bonus1Cost:100,
          bonus2Cost:100,
          bonus3Cost:100,
          bonus4Cost:100,
          bonus5Cost:1000,
          bonus6Cost:1000,
          bonus7Cost:3000,
          bonus8Cost:7000,
          bonus9Cost:8000,
          bonus10Cost:10000,
          bonus11Cost:10000,
          bonus12Cost:20000,
          bonus13Cost:20000,
          bonus14Cost:20000,
          bonus15Cost:30000,
          bonus16Cost:30000,
          bonus17Cost:35000,
          bonus18Cost:50000,

          bonus1Activated:false,
          bonus2Activated:false,
          bonus3Activated:false,
          bonus4Activated:false,
          bonus5Activated:false,
          bonus6Activated:false,
          bonus7Activated:false,
          bonus8Activated:false,
          bonus9Activated:false,
          bonus10Activated:false,
          bonus11Activated:false,
          bonus12Activated:false,
          bonus13Activated:false,
          bonus14Activated:false,
          bonus15Activated:false,
          bonus16Activated:false,
          bonus17Activated:false,
          bonus18Activated:false,
        }
      }

      item1Press(){
        cookie.save("bonus1Activated",true);
        console.log(cookie.load("bonus1Activated"));
        if(this.props.currentAmount >= this.state.bonus1Cost  && this.state.bonus1Activated == false){
          
          this.setState(preState =>{

            this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus1Cost);
            this.props.currentBonus(preState.bonusTotal + this.state.bonus1);
  
            return {bonus1CurrentColor: "color",
                    bonusTotal: preState.bonusTotal + preState.bonus1,
                  bonus1Activated: true}
          })
        }
        
      }

      item2Press(){
        cookie.save("bonus2Activated",true);
        if(this.props.currentAmount >= this.state.bonus2Cost && this.state.bonus2Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus2Cost);
          this.props.currentBonus(preState.bonusTotal + this.state.bonus2);

          return {bonus2CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus2,
          bonus2Activated: true}
        })
      }
      }
      item3Press(){

        cookie.save("bonus3Activated",true);
        if(this.props.currentAmount >= this.state.bonus3Cost && this.state.bonus3Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus3Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus3);

          return {bonus3CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus3,
          bonus3Activated: true}
        })
      }
      }
      item4Press(){
        cookie.save("bonus4Activated",true);
        if(this.props.currentAmount >= this.state.bonus4Cost && this.state.bonus4Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus4Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus4);

          return {bonus4CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus4,
          bonus4Activated: true}
        })
      }
      }
      item5Press(){
        cookie.save("bonus5Activated",true);
        if(this.props.currentAmount >= this.state.bonus5Cost && this.state.bonus5Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus5Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus5);

          return {bonus5CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus5,
          bonus5Activated: true}
        })
      }
      }
      item6Press(){
        let temp = 0;
        cookie.save("bonus6Activated",true);
        if(this.props.currentAmount >= this.state.bonus6Cost && this.state.bonus6Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus6Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus6);

          return {bonus6CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus6,
          bonus6Activated: true}
        })
      }
      }
      item7Press(){
        cookie.save("bonus7Activated",true);
        if(this.props.currentAmount >= this.state.bonus7Cost && this.state.bonus7Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus7Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus7);

          return {bonus7CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus7,
          bonus7Activated: true}
        })
      }
      }
      item8Press(){
        cookie.save("bonus8Activated",true);
        if(this.props.currentAmount >= this.state.bonus8Cost && this.state.bonus8Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus8Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus8);
          return {bonus8CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus8,
          bonus8Activated: true}
        })
      }
      }
      item9Press(){
        cookie.save("bonus9Activated",true);
        if(this.props.currentAmount >= this.state.bonus9Cost && this.state.bonus9Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus9Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus9);
          return {bonus9CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus9,
          bonus9Activated: true}
        })
      }
      }
      item10Press(){
        cookie.save("bonus10Activated",true);
        if(this.props.currentAmount >= this.state.bonus10Cost && this.state.bonus10Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus10Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus10);
          return {bonus10CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus10,
          bonus10Activated: true}
        })
      }
      }
      item11Press(){
        cookie.save("bonus11Activated",true);
        if(this.props.currentAmount >= this.state.bonus11Cost && this.state.bonus11Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus11Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus11);
          return {bonus11CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus11,
          bonus11Activated: true}
        })
      }
      }
      item12Press(){
        cookie.save("bonus12Activated",true);
        if(this.props.currentAmount >= this.state.bonus12Cost && this.state.bonus12Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus12Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus12);
          return {bonus12CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus12,
          bonus12Activated: true}
        })
      }
      }
      item13Press(){
        cookie.save("bonus13Activated",true);
        if(this.props.currentAmount >= this.state.bonus13Cost && this.state.bonus13Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus13Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus13);
          return {bonus13CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus13,
          bonus13Activated: true}
        })
      }
      }
      item14Press(){
        cookie.save("bonus14Activated",true);
        if(this.props.currentAmount >= this.state.bonus14Cost && this.state.bonus14Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus14Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus14);
          return {bonus14CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus14,
          bonus14Activated: true}
        })
      }
      }
      item15Press(){
        cookie.save("bonus15Activated",true);
        if(this.props.currentAmount >= this.state.bonus15Cost && this.state.bonus15Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus15Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus15);
          return {bonus15CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus15,
          bonus15Activated: true}
        })
      }
      }
      item16Press(){
        cookie.save("bonus16Activated",true);
        if(this.props.currentAmount >= this.state.bonus16Cost && this.state.bonus16Activated == false){
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus16Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus16);
          return {bonus16CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus16,
          bonus16Activated: true}
        })
      }
      }
      item17Press(){
        if(this.props.currentAmount >= this.state.bonus17Cost && this.state.bonus17Activated == false){
          cookie.save("bonus17Activated",true);
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus17Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus17);
          return {bonus17CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus17,
          bonus17Activated: true}
        })
      }
      }
      item18Press(){
        if(this.props.currentAmount >= this.state.bonus18Cost && this.state.bonus18Activated == false){
          cookie.save("bonus18Activated",true);
        this.setState(preState =>{
          this.props.updateCurrentAmount(this.props.currentAmount - this.state.bonus18Cost);
          this.props.currentBonus(preState.bonusTotal +this.state.bonus18);
          return {bonus18CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus18,
          bonus18Activated: true}
          
        })
      }
      }
  
    
      componentDidMount() { 
        if(cookie.load("bonus1Activated") == "true"){
          this.setState({
            bonus1CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus1,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus2Activated") == "true"){
          this.setState( {bonus2CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus2,
            bonus1Activated: true}
        )
      }
        if(cookie.load("bonus3Activated") == "true"){
          this.setState( {bonus3CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus3,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus4ctivated") == "true"){
          this.setState( {bonus4CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus4,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus5Activated") == "true"){
          this.setState( {bonus5CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus5,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus6Activated") == "true"){
          this.setState( {bonus6CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus6,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus7Activated") == "true"){
          this.setState( {bonus7CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus7,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus8Activated") == "true"){
          this.setState( {bonus8CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus8,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus9Activated") == "true"){
          this.setState( {bonus9CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus9,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus10Activated") == "true"){
          this.setState( {bonus10CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus10,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus11Activated") == "true"){
          this.setState( {bonus11CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus11,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus12Activated") == "true"){
          this.setState( {bonus12CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus12,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus13Activated") == "true"){
          this.setState( {bonus13CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus13,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus14Activated") == "true"){
          this.setState( {bonus14CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus14,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus15Activated") == "true"){
          this.setState( {bonus15CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus15,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus16Activated") == "true"){
          this.setState( {bonus16CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus16,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus17Activated") == "true"){
          this.setState( {bonus17CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus17,
            bonus1Activated: true
        })
      }
        if(cookie.load("bonus18Activated") == "true"){
          this.setState( {bonus18CurrentColor: "color",
            bonusTotal: this.state.bonusTotal + this.state.bonus18,
            bonus1Activated: true
        })

      }
        }
 


   render()
   {
     return <ItemPlus item1Press={this.item1Press} item1Color={this.state.bonus1CurrentColor} item2Press={this.item2Press} item2Color={this.state.bonus2CurrentColor} item3Press={this.item3Press} item3Color={this.state.bonus3CurrentColor} item4Press={this.item4Press} item4Color={this.state.bonus4CurrentColor} item5Press={this.item5Press} item5Color={this.state.bonus5CurrentColor} item6Press={this.item6Press} item6Color={this.state.bonus6CurrentColor} item7Press={this.item7Press} item7Color={this.state.bonus7CurrentColor} item8Press={this.item8Press} item8Color={this.state.bonus8CurrentColor} item9Press={this.item9Press} item9Color={this.state.bonus9CurrentColor} item10Press={this.item10Press} item10Color={this.state.bonus10CurrentColor} item11Press={this.item11Press} item11Color={this.state.bonus11CurrentColor} item12Press={this.item12Press} item12Color={this.state.bonus12CurrentColor} item13Press={this.item13Press} item13Color={this.state.bonus13CurrentColor} item14Press={this.item14Press} item14Color={this.state.bonus14CurrentColor} item15Press={this.item15Press} item15Color={this.state.bonus15CurrentColor} item16Press={this.item16Press} item16Color={this.state.bonus16CurrentColor} item17Press={this.item17Press} item17Color={this.state.bonus17CurrentColor} item18Press={this.item18Press} item18Color={this.state.bonus18CurrentColor}></ItemPlus>
   }
  
  }

export default ItemPlusCtrl;