/**
 * Created by changjin.zhang on 9/15/2017.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {module} from '../index';
import * as actions from '../modules/actions';
import view from '../components';
function mapStateToProps(state){
	return {
		module:state[module],
		data:state[module].data,
		ui:state[module].ui
	}
}

function mapActionsToProps(dispatch){
	return {
		actions:bindActionCreators(actions,dispatch)
	}
}

export default connect(mapStateToProps,mapActionsToProps)(view)