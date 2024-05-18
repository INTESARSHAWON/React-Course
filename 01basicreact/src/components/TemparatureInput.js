import React from "react";

const scaleNames = {
    c: 'celsius',
    f: 'fahrenheit',
}

function TemparatureInput({temparature, scale, onTemparatureChange}) {
        return(
            <fieldset>
                <legend>Enter temparature in {scaleNames[scale]}</legend>
                <input type="text" value={temparature} onChange={(e)=> onTemparatureChange(e, scale)}/>
            </fieldset>
        )
}

export default TemparatureInput