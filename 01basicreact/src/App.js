// import Clock from "./components/Clock";
// import ClockList from "./components/ClockList";
// import Form from "./components/Form";
// import Calculator from "./components/Calculator";
// import Emoji from './components/composition/Emoji';
// import Text from './components/composition/Text';
// import Bracket from './components/composition/Bracket';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounterRender from './components/ClickCounterRender';
// import HoverCounterRender from './components/HoverCounterRender';
// import Counter from './components/Counter';
// import Todo from './components/Todo';
// import MyComponent from './components/MyComponent';
// import { useState } from 'react';
// import React from 'react';
// import FormRef from './/components/FormRef';
// import Time from './components/Time';
// import CounterReducer from './components/CounterReducer';
// import ComplexCounter from './components/ComplexCounter';
import CounterThree from './components/CounterThree';

// function App() { react hook, mane 18-19 number video te eshe eta bondho korlam, er aag porjontw sobai case ei eta cholse 
    // karon niche class ansi      

// //state and lifecycle start
    // return (
    // <div>
    //     <Clock locale="bn-BD"/>     
    // </div>
    // //state and lifecycle end
    
    
    // Event Handling & Control Re Rendering start
    // return (
    // <div>
    //     <Clock />     
    // </div>
    // Event Handling & Control Re Rendering end

    // // Conditional Rendering, List and Keys start
    // const quantities=[1,2,3];
    // return (
    // <div>
    //     <ClockList quantities ={quantities} />     
    // </div>
    // );
    // // Conditional Rendering, List and Keys end

    // // Form Handling - Controlled vs Uncontrolled Component start
    // return (
    //   <div>
    //       <Form />     
    //   </div>
    //   // Conditional Rendering, List and Keys end
    //   );
    // // Form Handling - Controlled vs Uncontrolled Component end

    // Lifting State Up start 
    // return (
    //   <div>
    //       <Calculator />     
    //   </div>
    //   );
    // Lifting State Up end

    // Composition vs Inheritance start
//     return (
//             //1st part
//           // <Text></Text> 
//           //ekhane <Text> use korle sudhu text print hobe, ejonnoi composition use kora, keno sb alada alada use kora jay

//           // 2nd part
//           // <Emoji>
//           //       {({addEmoji})=> <Text addEmoji={addEmoji}/>}
//           // </Emoji>
//           // Emoji'r moddhe text wrap korsi ekhane, niche bracket tao etar moddhe wrap kore dibo
            
//           // 3rd part
//       //    <Emoji>
//       //           {({addEmoji})=> (
//       //             <Bracket>
//       //                 {({addBracket})=> <Text addEmoji={addEmoji} addBracket={addBracket}/>}
//       //             </Bracket>
//       //             )}
//       //     </Emoji>

//       );
      // Composition vs Inheritance end

    //   //Higher Order Components (HOC) start
    //   return (
    //   <div className='App'>
    //       <ClickCounter/>
    //       <HoverCounter/>
    //   </div>
    //   );
    //   // Higher Order Components (HOC) end

    // //Render Props start
    // return (
    //     <div className='App'>
    //         <Counter render= {(count,incrementCount)=>
    //             <ClickCounterRender count={count} incrementCount={incrementCount}/>}/>

    //         <Counter render= {(count,incrementCount)=>
    //             <HoverCounterRender count={count} incrementCount={incrementCount}/>}/>    
    //     </div>
    //     );
    // // Render Props end

    // context api start
    // tutorial 16 17 no dekhi nai context api section er, eta pore dekhbo ba ignore korbo
    // cntext api end

    // // react hook use state start
    // class App extends React.Component{
    //     render(){
    //         return (
    //             <div className='App'>
    //                 <Todo/>
    //             </div>
    //         );
    //     }    
    // }
    // // react hook use state end

    // react hook use effect start
    // function App (){
    //     const [show, setShow] = useState(true);
    //         return (
    //             <div className='App'>
    //                 {show && <MyComponent/>}
    //                 <p>
    //                     <button type='button' onClick={ () => setShow ((prevShow) => !prevShow)}>
    //                         {show ? 'Hide Post' : 'Show Post'}
    //                     </button>
    //                 </p>
    //             </div>
    //         );
    //     }    
    // react hook use effect end

    // useCallback & useMemo hook start
        //summit series er tutorial no 21
        // performance valor jonno use hoy, ejonno likhe sikhi nai, concept bujchi 
        // usecallback function ekta function ke mone rakhbe
        // usememo ekta function er return value ke mone rakhbe
        // jokhon [] er moddhe je thake tar value change hobe, tokhon e era rander korbe abar
    // useCallback & useMemo hook end



    // useRef hook start
    // function App (){
    //         return (
    //             <div className='App'>
    //                 {/* <FormRef/> */}
    //                 <Time/>
    //             </div>
    //         );
    //     }
    // useRef hook end 
    
    // useReducer hook start
    function App (){
        return (
            <div className='App'>
                {/* <CounterReducer/> */}
                {/* <ComplexCounter/> */}
                <CounterThree/>
            </div>
        );
    }
    // useReducer hook end

export default App;
