import { createStore } from 'redux';
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
export const ourStore= createStore(ourReducer);