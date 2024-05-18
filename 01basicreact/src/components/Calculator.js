import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemparatureInput from "./TemparatureInput";
import {convert, toCelcius, toFahrenheit} from './lib/converter';

class Calculator extends React.Component {
    state = {temparature: '', scale: 'c'};

    handleChange = (e, scale) => {
        this.setState({
            temparature: e.target.value,
            scale,
        });
    }

    render(){
        const {temparature, scale} = this.state;
        const celsius = scale === 'f' ? convert(temparature,toCelcius) : temparature;
        const fahrenheit = scale === 'c' ? convert(temparature,toFahrenheit) : temparature;
        return(
            <div>
                <TemparatureInput scale="c" temparature={celsius} onTemparatureChange={this.handleChange}/>
                <TemparatureInput scale="f" temparature={fahrenheit} onTemparatureChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temparature)}/>
            </div>
        );
    }
}

export default Calculator