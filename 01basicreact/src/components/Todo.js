import { useState } from "react";

function Todo() {

    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);
    const [count, setCount] = useState(0);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js')
        ? 'you need JS basic to complete it': 'good choice';

    setTodo(inputValue);
    setWarning(updatedWarning);
}

    let i=0;
    const addFive = () => {
        while(i < 5){
            setCount((prevState) => prevState + 1);
            i+=1;
        }
    };



    return(
        <div>
            <p>{Todo}</p>
            <p>
                <textarea name='todo' value={todo} onChange={handleInput}/>
            </p>
            <hr/>
            <h2>
                {warning}
            </h2>
            
            {count}
            <hr/>
            <p>
                <button type="button" onClick={addFive}>Add 5</button>
            </p>
        </div>
    );
}

export default Todo;