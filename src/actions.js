import {ourStore} from "./reducer";

export const toggle=()=>{
    return dispatch=>{
        dispatch({
        type:'toggle'
    })
    }
}