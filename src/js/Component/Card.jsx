import React, { Component } from "react";

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card__main">
                    <div className="card__main--first">
                        <div className="card__main--fisrt--element1">
                            <h3 className="card__main--first--element1__title">bill</h3>
                            <div className="card__main--first--element1__input">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="card__main--fisrt--element2">
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
                        <div className="card__main--fisrt--element3">
                        <h3 className="card__main--first--element3__title">number of people</h3>
                        <div className="card__main--first--element3__input">
                            <input type="text" />
                        </div>
                        </div>
                    </div>
                    <div className="card__main--second">
                        <div className="card__main--second--element1">
                            <div className="card__main--second--element1__title">tip amout <p>/ person</p></div>
                            <div className="card__main--second--element1__price">$4.25</div>
                        </div>
                        <div className="card__main--second--element2">
                        <div className="card__main--second--element2__title">total <p>/ person</p></div>
                            <div className="card__main--second--element2__price">$32.79</div>
                        </div>
                        <div className="card__main--second--element3">
                            <div className="card__main--second--element3--btn">
                                <button type="reset">reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
