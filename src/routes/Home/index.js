/**
 * Created by changjin.zhang on 9/13/2017.
 */
import {injectReducer} from '../../store/mainReducer';
export const module='home';
export default (store)=>({
	getComponent(nextState,cb){
		require.ensure([],(require)=>{
			const container=require('./container').default;
			cb(null,container);
		},'home')
	}
})