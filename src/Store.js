import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Action } from './actions';

const initialState = {

    isProgressing:true,
    data:[]
};

function reducer(state , action){

    switch (action.type) {

        case Action.LoadAllData:
            return {
                ...state,
                data: action.payload,
                
            }
        case Action.LoadPost:
            return {
                ...state,
                data:[action.payload[0]]
            };
        
        case Action.IsProgressing:
            return{

                isProgressing: action.payload,
                data: state.data
            }
        
        case Action.StopProgressing:
            return {
                isProgressing: action.payload,
                data: state.data
            }

        default:
            return state;
    }

}

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
