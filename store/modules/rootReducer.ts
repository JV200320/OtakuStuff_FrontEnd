import { combineReducers } from 'redux';

import auth from './auth/reducer'
import kindOfContentListToDisplay from './kindOfContentListToDisplay/reducer'
import contentPageToDisplay from './contentPageToDisplay/reducer'

export const rootReducer = combineReducers({
    auth,
    kindOfContentListToDisplay,
    contentPageToDisplay
});

export type RootState = ReturnType<typeof rootReducer>