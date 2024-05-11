import React from 'react';
import ReactDom from 'react-dom';
// const element = React.createElement('h1',null,'hello, world!');
    setInterval(() => {
        const element = (
            <h1 className= "heading" tabIndex="{index}">
                <span className="text">Hello Time {new Date().toLocaleTimeString()}</span>
                <img src="" />
            </h1>
            );
        ReactDom.render(element, document.getElementById('root'));        
    }, 1000);    

