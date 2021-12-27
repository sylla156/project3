import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.hanbleClick = this.hanbleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        price : 1000,
        manNumber : 4,
        singlePrice : 100,
        globalPrice : 400
    }
  }

  hanbleClick(e) {
    let valeur = e.target.innerText.split('%')[0]
    if(valeur != 'custom'){
        valeur = parseInt(valeur, 10);
        document.querySelectorAll('.changeColor').forEach(item => {
            item.style.backgroundColor = "hsl(183, 100%, 15%)";
        });
        e.target.style.backgroundColor = "hsl(172, 94%, 38%)";
        let globaleValue = (this.state.price * valeur) / 100;
        globaleValue = Math.floor(globaleValue);
        let singleValue = globaleValue / this.state.manNumber;
        singleValue = Math.floor(singleValue);
        this.setState({singlePrice : singleValue, globalPrice : globaleValue})
        console.log(this.state);
    }else{
    }
    
      
  }

  handleChange(e){
      let type = e.target.attributes[1].value;
      let value = e.target.value;
      if(type ==1 ){
          this.setState({price: value})
      }else if(type ==2 ){
          this.setState({manNumber : value})
      }
  }

  render() {
    return (
      <div className="card">
        <div className="card__main">
          <div className="card__main--first">
            <div className="card__main--fisrt--element1">
              <h3 className="card__main--first--element1__title">bill</h3>
              <div className="card__main--first--element1__input" forhtml='#1'>
                <p className="premier">$</p>
                <input type="number" onChange={this.handleChange} order='1' id='1' value={this.state.price}/>
              </div>
            </div>
            <div className="card__main--fisrt--element2">
              <h3 className="card__main--first--element2__title">
                select Tip %
              </h3>
              <div className="card__main--first--element2__main">
                <p className = 'changeColor' onClick={this.hanbleClick}>5%</p>
                <p className = 'changeColor' onClick={this.hanbleClick}>10%</p>
                <p className = 'changeColor' onClick={this.hanbleClick}>15%</p>
                <p className = 'changeColor' onClick={this.hanbleClick}>25%</p>
                <p className = 'changeColor' onClick={this.hanbleClick}>50%</p>
                <p  onClick={this.hanbleClick}>custom</p>
              </div>
            </div>
            <div className="card__main--fisrt--element3">
              <h3 className="card__main--first--element3__title">
                number of people
              </h3>
              <div className="card__main--first--element3__input">
                <i className="fa fa-user premier"></i>
                <p className="premier">👤</p>
                <input type="number" onChange={this.handleChange} order='2' value={this.state.manNumber}/>
              </div>
            </div>
          </div>
          <div className="card__main--second">
            <div className="card__main--second--element1">
              <div className="card__main--second--element1__title">
                tip amout <p>/ person</p>
              </div>
              <div className="card__main--second--element1__price">${this.state.singlePrice}</div>
            </div>
            <div className="card__main--second--element2">
              <div className="card__main--second--element2__title">
                total <p>/ person</p>
              </div>
              <div className="card__main--second--element2__price">${this.state.globalPrice}</div>
            </div>
            <div className="card__main--second--element3">
              <div className="card__main--second--element3--btn">
                <button type="reset" onClick={() =>{
                    this.setState({price:0,manNumber:0,singlePrice:0,globalPrice:0});
                }}>reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
