// import Clock from "./components/Clock";
// import ClockList from "./components/ClockList";
// import Form from "./components/Form";
// import Calculator from "./components/Calculator";
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
import Bracket from './components/composition/Bracket';

function App() {
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
    return (
          // <Text></Text> 
          //ekhane <Text> use korle sudhu text print hobe, ejonnoi composition use kora, keno sb alada alada use kora jay

          // <Emoji>
          //       {({addEmoji})=> <Text addEmoji={addEmoji}/>}
          // </Emoji>
          // Emoji'r moddhe text wrap korsi ekhane, niche bracket tao etar moddhe wrap kore dibo

          <Emoji>
                {({addEmoji})=> (
                  <Bracket>
                      {({addBracket})=> <Text addEmoji={addEmoji} addBracket={addBracket}/>}
                  </Bracket>
                  )}
          </Emoji>

      );
      // Composition vs Inheritance end

}

export default App;
