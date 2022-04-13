import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getQR,getTest } from './components/calls/actions/queryActions.js';





const Test = () => {

    const data = { query: 'select * from response_meaning where questionID=55' };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTest());
    }, [dispatch]);

    const backlogs = useSelector((state) => {
        console.log(state)
        return;
    });
    return (
        <>
            <button onClick={() => { console.log("Button Clicked"); dispatch(getQR(data)); } }>
                TEST
            </button>
        </>
    );
}

export default Test; 
