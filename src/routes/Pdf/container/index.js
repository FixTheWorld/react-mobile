/**
 * Created by changjin.zhang on 9/13/2017.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../modules/actions';
import view from '../component';
import {module} from '../index';
function mapStateToProps(state){
	return {
		module:state[module]
	}
}

function mapActionsToProps(dispatch,props){
	return {
		actions:bindActionCreators(actions,dispatch)
	}
}

export default connect(mapStateToProps,mapActionsToProps)(view);