// import Clock from "./components/Clock";
import ClockList from "./components/ClockList";

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

    // Conditional Rendering, List and Keys start

    const quantities=[1,2,3];
    return (
    <div>
        <ClockList quantities ={quantities} />     
    </div>
    // Conditional Rendering, List and Keys end
    
  );
}

export default App;
