import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import logger from 'redux-logger';

export default function configStore() {
    const middleware = [logger()];
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    const store = createStoreWithMiddleware(rootReducer);

    return store;
}
