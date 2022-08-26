import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const initialState={
    show:false
}

function ourReducer(state=initialState,action){
  switch(action.type){
    case 'toggle':
        return{
            ...state,
            show:!state.show
        }
        default:
            return state
  }
}
const createStoreWithMiddleWare= applyMiddleware(
  thunk
)(createStore);
  

export const ourStore= createStoreWithMiddleWare(ourReducer);