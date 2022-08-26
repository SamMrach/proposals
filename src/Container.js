import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from "./actions";
const mapStateToProps=(state)=>{
   return {
    state:state
   }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators(Actions,dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps);