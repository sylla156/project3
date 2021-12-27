import React, { Component } from "react";

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <h1 className="card__title">spliter</h1>
                <div className="card__main">
                    <div className="card__main--first">
                        <div className="card__main--fisrt--element">
                            <h3 className="card__main--first--element__title">bill</h3>
                            <div className="card__main--first--element__input">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="card__main--fisrt--element">
                        <h3 className="card__main--first--element2__title">select Tip %</h3>
                        <div className="card__main--first--element2__main">
                            <p>5%</p>
                            <p>10%</p>
                            <p>15%</p>
                            <p>25%</p>
                            <p>50%</p>
                            <p>custom</p>
                        </div>
                        </div>
                        <div className="card__main--fisrt--element">
                        <div className="card__main--first--element3__title">number of people</div>
                        <div className="card__main--first--element3__input">
                            <input type="text" />
                        </div>
                        </div>
                    </div>
                    <div className="card__main--second">
                        <div className="card__main--second">
                            <div className="card__main--second1__title">tip amout <span>/ person</span></div>
                            <div className="card__main--second1__price">$4.25</div>
                        </div>
                        <div className="card__main--second">
                        <div className="card__main--second2__title">total <span>/ person</span></div>
                            <div className="card__main--second2__price">$32.79</div>
                        </div>
                        <div className="card__main--second">
                            <div className="card__main--second3--btn">
                                <button type="reset">reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
