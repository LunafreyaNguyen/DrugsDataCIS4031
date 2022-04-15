import React from "react";
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQR } from './components/calls/actions/queryActions.js';





const Test = () => {
    const [d, setD] = useState(0);

    const data = {
        query: 'select count(*) from (select * from question_meaning where question_meaning.abbr=\'mjage\') Question,question_response,response_meaning where question_response.questionID = Question.questionID AND Question.questionID = response_meaning.questionId AND question_response.response = response_meaning.response AND response_meaning.response = 16'
    };
    const dispatch = useDispatch();

    function test()
    {
        dispatch(getQR(data));
    }

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
            <button onClick={() => { console.log(data) }}>
                TEST
            </button>
        </>
    );
}

export default Test; 
