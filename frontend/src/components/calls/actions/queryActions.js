//Where Requests and Responses are handled together

import { GET_QUERY_RESULT} from '../constants/queryConstants.js';

import * as api from '../api/api.js';

export const getQR = (query) => async (dispatch) => {
    try {
        //Http Request defined in API file
        let { data } = await api.getQueryResult(query);

        //What to do with Response? Dispatch to Reducer
        dispatch({ type: GET_QUERY_RESULT, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};