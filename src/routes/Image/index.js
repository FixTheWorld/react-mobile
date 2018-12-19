/**
 * Created by changjin.zhang on 9/15/2017.
 */
import {injectReducer} from '../../store/mainReducer';
export const module='image';
export default (store)=>({
	path:'/'+module,
	getComponent:(nextState,cb)=>{
		require.ensure([],(require)=>{
			const container=require('./container').default;
			const reducer=require('./modules/reducer').default;
			injectReducer(store,{key:module,reducer});
			cb(null,container);
		},'image')
	}
})