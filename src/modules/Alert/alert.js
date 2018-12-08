import { createAction, handleActions } from 'redux-actions';
import { Map} from 'immutable';

const SUCCESS = 'alert/SUCCESS';
const ERROR = 'alert/ERROR';
const CLEAR = 'alert/CLEAR';

export const success = createAction(SUCCESS);
export const error = createAction(ERROR);
export const clear = createAction(CLEAR);

const initialState = Map({
    alert: Map({})
});

export default handleActions({
    [SUCCESS] : (state, action) =>{
        return state.set('alert', Map({
                type: 'alert-success',
                message: action.message   
            })
        )
    },
    [ERROR] : (state, action) =>{
        return state.set('alert', Map({
                type: 'alert-danger',
                message: action.message   
             })
        )
    },
    [CLEAR] : (state, action) =>{
        return state.set('alert', Map({})
        )
    }
}, initialState)