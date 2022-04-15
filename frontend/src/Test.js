import React from "react";
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQR } from './components/calls/actions/queryActions.js';





const Test = () => {
    const [d, setD] = useState(0);

    const data = { query: 'select * from response_meaning where questionId=55' };
    const dispatch = useDispatch();


    const backlogs = useSelector((state) => {
        console.log(state);
        console.log(d);
        return;
    });
    return (
        <>
            <button onClick={() => { console.log("Button Clicked"); dispatch(getQR(data)); setD(d+1) } }>
                TEST
            </button>
        </>
    );
}

export default Test; 
