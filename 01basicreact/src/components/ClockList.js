import Clock from "./Clock";
// ekhane amra array map use krbo jeno amra inline a kaj korte pari, return er moddhe {} mdiye function kora jabe na 
function clockList({quantities = []}) {
    return(
        <div>
            {quantities.map((key) => (
                <Clock key = {Math.random()}/>
                ))}
            {/* {[<Clock/>, <Clock/>, <Clock/>]} 3 ta ghori emneo dekhano jay, eita map diye korbo always. */} 
            
            {/* ekhane key use korbo id'r jonno, jeno reacr id dhore chinte pare, ejonno math.random use korbo.
             key sob jaygay boshate hobe na, globally. ek jaygay boshalei holo*/}
        </div>
    );
}

export default clockList