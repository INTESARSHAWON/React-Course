import { useState } from "react";

function Todo() {

    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js')
        ? 'you need JS basic to complete it': null;

    setTodo(inputValue);
    setWarning(updatedWarning);
}
    

    return(
        <div>
            <p>{Todo}</p>
            <p>
                <textarea name='todo' value={todo} onChange={handleInput}/>
            </p>
            <hr/>
            <h2>
                {warning || 'good choice'}
            </h2>
        </div>
    );
}

export default Todo;