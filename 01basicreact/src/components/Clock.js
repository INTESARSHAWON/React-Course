import React from 'react';
import Button from './Button';
// import ReactDom from 'react-dom';
// // const element = React.createElement('h1',null,'hello, world!');
    // setInterval(() => {
    //     const element = (
    //         <h1 className= "heading" tabIndex="{index}">
    //             <span className="text">Hello Time {new Date().toLocaleTimeString()}</span>
    //             {" "}
    //             <span className="text">Hello Date {new Date().toLocaleDateString()}</span>
    //             <img src="" />
    //         </h1>
    //         );
    //     ReactDom.render(element, document.getElementById('root'));        
    // }, 1000);    

    // uporer ta element
    // nicher ta component

    
//     function Clock (){ 
//         return(
//             <h1 className= "heading">
//                 <span className="text">Hello Time {new Date().toLocaleTimeString()}</span>
//                 {" "}
//                 <span className="text">Hello Date {new Date().toLocaleDateString()}</span>
//             </h1>
//             )
//     }
//    ReactDom.render(Clock(), document.getElementById('root'));

// // eta evabe use kora jay, nicher moto tagline a o use kora jay, tokhon sekhane attribute pass kora jay
// // uporer ta element ar eita component, uporer moto protita component ekta kore react element return korbe


        // function Clock ({locale}){ 
        //     return(
        //      <h1 className= "heading">
        //         <span className="text">Hello Time {new Date().toLocaleTimeString(locale)}</span>
        //         {" "}
        //         <span className="text">Hello Date {new Date().toLocaleDateString(locale)}</span>
        //     </h1>
        //     )
        // }
        // ReactDom.render(<Clock locale="bn-BD"/>, document.getElementById('root'));


// //uporer tay jeta function diye korsi, niche oita class diye korbo
//         class Clock { 
//             print(){    
//                 return(
//                     <h1 className= "heading">
//                     <span className="text">Hello Time {new Date().toLocaleTimeString()}</span>
//                     {" "}
//                     <span className="text">Hello Date {new Date().toLocaleDateString()}</span>
//                     </h1>
//                 )
//             }    
//         }

//         const ClockElement = new Clock();
//         ReactDom.render(ClockElement.print(), document.getElementById('root'));
// // render er moddhe function jemne HTML syntax a likhtam, ekhane omne iikha jabe na..., karon eta class, etalikhar system alada 
// // extends na thakle class ta age variable er moddhe vorte hobe


//         class Clock extends React.Component { 
//             render(){    
//                 return(
//                     <h1 className= "heading">
//                     <span className="text">Hello Time {new Date().toLocaleTimeString()}</span>
//                     {" "}
//                     <span className="text">Hello Date {new Date().toLocaleDateString()}</span>
//                     </h1>
//                 )
//             }    
//         }

//         ReactDom.render(<Clock/>, document.getElementById('root'));

// //render jeno evabe (<Clock/>) likhe class ke khuje pay, sejonno class ke extends korte hobe React.Component diye
// //React.Component use korle upore (2nd line) a print() ar use hobe na. render() use hobe, kenona react component render () ke chine
// //render jeno evabe (<Clock/>) likhe class ke khuje pay, ei process a class ke ar variable er vitore dhukano lage na
// // ekhon jeta dekhlam sekhane english time, date, etake banglay pete hole nicher process dekhte hobe


//             class Clock extends React.Component { 
//                 render(){    
//                     return(
//                         <h1 className= "heading">
//                         <span className="text">Hello Time {new Date().toLocaleTimeString(this.props.locale)}</span>
//                         {" "}
//                         <span className="text">Hello Date {new Date().toLocaleDateString(this.props.locale)}</span>
//                         </h1>
//                     )
//                 }    
//             }

//             ReactDom.render(<Clock locale="bn-BD"/>, document.getElementById('root'));
// // class er moddhe object create korte hoy this diye, ekhaneo this.props.attribute akare pathate hobe




//             class Clock extends React.Component { 
//                 render(){    
//                     return(
//                         <h1 className= "heading">
//                         <span className="text">Hello Time {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
//                         {" "}
//                         <span className="text">Hello Date {this.props.children} {new Date().toLocaleDateString(this.props.locale)}</span>
//                         </h1>
//                     )
//                 }    
//             }

// // eivabe children pass korte hoy, attribute charao children pass kora jay
// // {this.props.children} diye children pass kora jay

            // //state and lifecycle start

            // class Clock extends React.Component { 
            //     constructor(props){
            //         super(props);
            //         this.state = {date: new Date()};            
            //     }
            //     // state = {date: new Date()}; // { bracketsoho uporer 4 line ei ekta line niye likha jay, shortcut


            //     componentDidMount() {
            //         this.clockTimer = setInterval(() =>
            //            this.tick(), 1000); 
            //     }

            //     componentWillUnmount(){
            //         clearInterval(this.clockTimer);
            //     }

            //     tick(){
            //         this.setState({
            //             date: new Date(),
            //         });
            //     }

            //     render(){    
            //         return(
            //             <h1 className= "heading">
            //             <span className="text">Hello Time {this.state.date.toLocaleTimeString(this.props.locale)}</span>
            //             {" "}
            //             <span className="text">Hello Date {new Date().toLocaleDateString(this.props.locale)}</span>
            //             </h1>
            //         )
            //     }    
            // }

            // //state and lifecycle end

            // // Event Handling & Control Re Rendering start
            // class Clock extends React.Component { 
            //     constructor(props){
            //         super(props);
            //         this.state = {date: new Date()};            
            //     }
            //     // state = {date: new Date()}; // { bracketsoho uporer 4 line ei ekta line niye likha jay, shortcut


            //     componentDidMount() {
            //         this.clockTimer = setInterval(() =>
            //            this.tick(), 1000); 
            //     }

            //     componentWillUnmount(){
            //         clearInterval(this.clockTimer);
            //     }

            //     handleClick() {
            //         console.log("The button was clicked");
            //     }

            //     tick(){
            //         this.setState({
            //             date: new Date(),
            //         });
            //     }

            //     render(){    
            //         const {date} = this.state; 
            //         return(
            //             <div>
            //                 <h1 className= "heading">
            //                     <span className="text">Hello Time {date.toLocaleTimeString('bn-BD')}</span>
            //                 </h1>
            //                 <button onClick={this.handleClick}>
            //                     Click Here
            //                 </button>
            //             </div>
            //         );
            //     }    
            // }
            // // html er sathe nicher duita parthokko->
            // // onClick er vitore this.handleClick() hobe na karon tahole khali function call kortei thakbe
            // // strting dea jabe na, dynamically dite hobe 


            // class Clock extends React.Component { 
            //     constructor(props){
            //         super(props);
            //         this.state = {date: new Date(), locale: 'bn-BD'};            
            //     }
            //     // state = {date: new Date()}; // { bracketsoho uporer 4 line ei ekta line niye likha jay, shortcut
            //     // locale ta ebar ekhane niye ashlam, click kore value change korar jonne

            //     componentDidMount() {
            //         this.clockTimer = setInterval(() =>
            //            this.tick(), 1000); 
            //     }

            //     componentWillUnmount(){
            //         clearInterval(this.clockTimer);
            //     }

            //     handleClick = () =>{
            //         this.setState({
            //             locale: 'en-US'
            //         }
            //     );
            //     }
            //     // eta class method er moto thakle this ta ekhane callback function call kore, jar karone this a value pay na
            //     // etar karone etake array function banay dea besh practice, amra oivabei krbo, aro kichu way ache though  

            //     tick(){
            //         this.setState({
            //             date: new Date(),
            //         });
            //     }

            //     render(){    
            //         const {date, locale} = this.state; 
            //         return(
            //             <div>
            //                 <h1 className= "heading">
            //                     <span className="text">Hello Time {date.toLocaleTimeString(locale)}</span>
            //                 </h1>
            //                 <button onClick={this.handleClick}>
            //                     Click Here
            //                 </button>
            //             </div>
            //         );
            //     }    
            // }


            // // eki button kivabe arek jaygay kaj kore seta ekhane dekhabo
            // // re rendering

            // class Clock extends React.Component { 
            //     constructor(props){
            //         super(props);
            //         this.state = {date: new Date(), locale: 'bn-BD'};            
            //     }
             
            //     componentDidMount() {
            //         this.clockTimer = setInterval(() =>
            //            this.tick(), 1000); 
            //     }

            //     componentWillUnmount(){
            //         clearInterval(this.clockTimer);
            //     }

            //     handleClick = () =>{
            //         this.setState({
            //             locale: 'en-US'
            //         }
            //     );
            //     }
            //     // eta class method er moto thakle this ta ekhane callback function call kore, jar karone this a value pay na
            //     // etar karone etake array function banay dea besh practice, amra oivabei krbo, aro kichu way ache though  

            //     tick(){
            //         this.setState({
            //             date: new Date(),
            //         });
            //     }

            //     render(){    
            //         console.log("clock component rendered");
            //         const {date, locale} = this.state; 
            //         return(
            //             <div>
            //                 <h1 className= "heading">
            //                     <span className="text">Hello Time {date.toLocaleTimeString(locale)}</span>
            //                 </h1>
            //                 <Button change={this.handleClick} locale="en-US">
            //                     Click Here
            //                 </Button>
            //             </div>
            //         );
            //     }    
            // }
            // // ekahne et bind kore pathano lagbe

            // // Event Handling & Control Re Rendering end


            //



            // Conditional Rendering, List and Keys start
            // uporer button ta ke toggle korsi, jeno bn dile en ashe, en dile bn ashe

            // class Clock extends React.Component { 
            //     constructor(props){
            //         super(props);
            //         this.state = {date: new Date(), locale: 'bn-BD'};            
            //     }
             
            //     componentDidMount() {
            //         this.clockTimer = setInterval(() =>
            //            this.tick(), 1000); 
            //     }

            //     componentWillUnmount(){
            //         clearInterval(this.clockTimer);
            //     }

            //     handleClick = (locale) =>{
            //         this.setState({
            //             locale,
            //         }
            //     );
            //     }
            //     // eta class method er moto thakle this ta ekhane callback function call kore, jar karone this a value pay na
            //     // etar karone etake array function banay dea besh practice, amra oivabei krbo, aro kichu way ache though  

            //     tick(){
            //         this.setState({
            //             date: new Date(),
            //         });
            //     }

            //     render(){    
            //         const {date, locale} = this.state;
            //         let button;
            //         if (locale === "bn-BD"){
            //             button = (
            //                 <Button change={this.handleClick} locale="en-US">
            //                 Click Here 
            //                 </Button> 
            //             );
            //     }
            //         else{
            //                 button = (
            //                 <Button change={this.handleClick} locale="bn-BD">
            //                     Click Here
            //                 </Button>
            //                 );     
            //         }

            //         return(
            //             <div>
            //                 <h1 className= "heading">
            //                     <span className="text">Hello Time {date.toLocaleTimeString(locale)}</span>
            //                 </h1>
            //                 {button}
            //             </div>
            //         );
            //     }    
            // }


            // if else er kaj ta return() er moddheo kora jay sonkhepe, niche setar way ache

            // class Clock extends React.Component { 
            //     constructor(props){
            //         super(props);
            //         this.state = {date: new Date(), locale: 'bn-BD'};            
            //     }
             
            //     componentDidMount() {
            //         this.clockTimer = setInterval(() =>
            //            this.tick(), 1000); 
            //     }

            //     componentWillUnmount(){
            //         clearInterval(this.clockTimer);
            //     }

            //     handleClick = (locale) =>{
            //         this.setState({
            //             locale,
            //         }
            //     );
            //     }
            //     // eta class method er moto thakle this ta ekhane callback function call kore, jar karone this a value pay na
            //     // etar karone etake array function banay dea besh practice, amra oivabei krbo, aro kichu way ache though  
            //     // click here ke banglay klik korun niye asha jabe klik korle 
            //     // arekta p rakhlam hello naam a , ekbar show korbe, toggle a hidden korbe, etao ekhane

            //     tick(){
            //         this.setState({
            //             date: new Date(),
            //         });
            //     }

            //     render(){    
            //         const {date, locale} = this.state;

            //         return(
            //             <div>
            //                 <h1 className= "heading">
            //                     <span className="text">{date.toLocaleTimeString(locale)}</span>
            //                 </h1>
            //                 {locale === "bn-BD" ?
            //                 <Button change={this.handleClick} locale="en-US" show={false}/> :
            //                 <Button change={this.handleClick} locale="bn-BD" show={true}/>
            //                 }
                            
            //             </div>
            //         );
            //     }    
            // }



            // button ta ebar disable kore dibo
            // class Clock extends React.Component { 
            //     constructor(props){
            //         super(props);
            //         this.state = {date: new Date(), locale: 'bn-BD'};            
            //     }
             
            //     componentDidMount() {
            //         this.clockTimer = setInterval(() =>
            //            this.tick(), 1000); 
            //     }

            //     componentWillUnmount(){
            //         clearInterval(this.clockTimer);
            //     }

            //     handleClick = (locale) =>{
            //         this.setState({
            //             locale,
            //         }
            //     );
            //     }
             
            //     tick(){
            //         this.setState({
            //             date: new Date(),
            //         });
            //     }

            //     render(){    
            //         const {date, locale} = this.state;

            //         return(
            //             <div>
            //                 <h1 className= "heading">
            //                     <span className="text">{date.toLocaleTimeString(locale)}</span>
            //                 </h1>
            //                 {locale === "bn-BD" ?
            //                 <Button change={this.handleClick} locale="en-US" show={false} enable={false}/> :
            //                 <Button change={this.handleClick} locale="bn-BD" show={true} enable />
            //                 }
                            
            //             </div>
            //         );
            //     }    
            // }
            // // enable true likhte hoy na, etake button js a pathate hobe, rcv kore condition check


            // eibar ek ghori barbar barbar print korbo, list create korbo, pore ogulay key add korbo
            // etar jonne clockist.js khulsi, echara app.js a o code korsi

            class Clock extends React.Component { 
                constructor(props){
                    super(props);
                    this.state = {date: new Date(), locale: 'bn-BD'};            
                }
             
                componentDidMount() {
                    this.clockTimer = setInterval(() =>
                       this.tick(), 1000); 
                } 

                componentWillUnmount(){
                    clearInterval(this.clockTimer);
                }

                handleClick = (locale) =>{
                    this.setState({
                        locale,
                    }
                );
                }
             
                tick(){
                    this.setState({
                        date: new Date(),
                    });
                }

                render(){    
                    const {date, locale} = this.state;

                    return(
                        <div>
                            <h1 className= "heading">
                                <span className="text">{date.toLocaleTimeString(locale)}</span>
                            </h1>
                            {locale === "bn-BD" ?
                            <Button change={this.handleClick} locale="en-US" show={false} enable={false}/> :
                            <Button change={this.handleClick} locale="bn-BD" show={true} enable />
                            }
                            
                        </div>
                    );
                }    
            }


            // Conditional Rendering, List and Keys end
export default Clock;