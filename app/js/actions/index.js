import * as types from '../constants/index';

export function increaseCounter() {
    return {type: types.INCREASE_COUNTER}
};

export function decreaseCounter() {
    return {type: types.DECREASE_COUNTER}
}

