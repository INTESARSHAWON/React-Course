import { useState,useEffect } from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };

    useEffect( () => {
        document.title = `clicked ${count} times`;
        }, [count]
    );

    useEffect(()=>{
        setInterval(tick,1000);
        } ,[]
    );

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return(
        <div>
            <p>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
            </p>
            <p>
                Time: {date.toLocaleTimeString()}
            </p>
            <p>
                <button type='button' onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}


export default MyComponent