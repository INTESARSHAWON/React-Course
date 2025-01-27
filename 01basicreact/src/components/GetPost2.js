import React, { useReducer, useEffect } from 'react';

const initialState = {
    loading: true,
    post: {},
    error: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: action.result,
                error: ''
            }
        case 'ERROR':
            return{
                loading: false,
                post: '',
                error: 'something was wrong fetching'
            }    
        default: 
            return state;
    }
};

function GetPost2() {
    const [state, dispatch] = useReducer (reducer, initialState);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                dispatch({type: 'SUCCESS', result: data});
            })
            .catch(() => {
                dispatch({type: 'ERROR'});
            });
    }, []);

    return(
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error || null}
        </div>
    );
}



export default GetPost2