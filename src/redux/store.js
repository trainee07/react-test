import {createStore} from 'redux';
import { Reducer, initialState } from './reducer'

export const Store = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );

    return store;
}