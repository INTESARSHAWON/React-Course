import { useEffect, useRef } from 'react';
import Input from './Input';

function FormRef() {
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    }, []);

    return(
        <div>
            <p>
                {/* <input ref={inputRef} type="text" placeholder="enter something"/> */}
                <Input ref={inputRef} type="text" placeholder="enter something"/>
            </p>
        </div>
    );
}

export default FormRef