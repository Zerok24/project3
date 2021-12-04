import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Action } from './actions';

const initialState = [];

    // {
    //     id: 10,
    //     author: "Joseph Alejandro",
    //     title: "Mission",
    //     content: "Servi mi mision en Guatemala y California"
    // }

// };

function reducer(state , action){

    switch (action.type) {

        case Action.LoadAllData:
            // console.log(action.payload);

            return [
                ...action.payload,
                // ...state,

            ]

        case Action.LoadPost:
            return [action.payload[0]];
            

        default:
            return state;
    }

}

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
