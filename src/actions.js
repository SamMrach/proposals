import {ourStore} from "./reducer";

export const toggle=()=>{
    ourStore.dispatch({
        type:'toggle'
    })
}