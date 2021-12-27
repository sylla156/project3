import React, { Component } from 'react'
import Card from './Component/Card'
export default class App extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            <h3 className='header'>spli <br/> tter</h3>
            <Card />
            </>
        );}
};
