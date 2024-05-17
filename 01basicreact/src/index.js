import React from 'react';
// import ReactDom from 'react-dom/client';
import ReactDom from 'react-dom';
import App from './App';

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

