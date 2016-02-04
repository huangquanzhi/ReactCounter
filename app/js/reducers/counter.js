import { INCREASE_COUNTER, DECREASE_COUNTER } from '../constants/index';

const initialState = {count: 0};

export default function test(state = initialState, action) {
    switch (action.type) {
        case INCREASE_COUNTER:
            return ( Object.assign({}, state, {count: state.count + 1}))
        case DECREASE_COUNTER:
            return ( Object.assign({}, state, {count: state.count - 1}))
        default:
            return state
    }
}