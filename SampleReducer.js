import * as c from './constants';
import _ from 'lodash';

const sample = (state = c.INIT_STATE, action) => {
    switch(action.type) {
        case c.GET_USER:
            return _.assign({}, state, {
                users: action.data
            })
        default:
            return state;
    }
}

export const other = (state = c.INIT_STATE, action) => {
    switch(action.type) {
        case c.GET_USER:
            return _.assign({}, state, {
                users: action.data
            })
        default:
            return state;
    }
}

export default sample;


///////implementation
import sample, { other } from './sample/reducers';