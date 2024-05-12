import React from 'react';
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



            class Clock extends React.Component { 
                constructor(props){
                    super(props);
                    this.state = {date: new Date()};            
                }
                // state = {date: new Date()}; // { bracketsoho uporer 4 line ei ekta line niye likha jay, shortcut


                componentDidMount() {
                    this.clockTimer = setInterval(() =>
                       this.tick(), 1000); 
                }

                componentWillUnmount(){
                    clearInterval(this.clockTimer);
                }

                tick(){
                    this.setState({
                        date: new Date(),
                    });
                }

                render(){    
                    return(
                        <h1 className= "heading">
                        <span className="text">Hello Time {this.state.date.toLocaleTimeString(this.props.locale)}</span>
                        {" "}
                        <span className="text">Hello Date {new Date().toLocaleDateString(this.props.locale)}</span>
                        </h1>
                    )
                }    
            }


export default Clock;