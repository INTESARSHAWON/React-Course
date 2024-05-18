// import Clock from "./components/Clock";
// import ClockList from "./components/ClockList";
// import Form from "./components/Form";
import Calculator from "./components/Calculator";

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
    return (
      <div>
          <Calculator />     
      </div>
      // Conditional Rendering, List and Keys end
      );
    // Lifting State Up end
}

export default App;
