//Where Response's return value are Handled

import { GET_QUERY_RESULT, GET_TEST } from '../constants/queryConstants.js';

export default (query = [], action) => {
    switch (action.type) {
        case GET_TEST:
            return action.payload;
        case GET_QUERY_RESULT:
            return action.payload;
        default:
            return query;
    }
};