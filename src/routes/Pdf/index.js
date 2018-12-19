/**
 * Created by changjin.zhang on 9/13/2017.
 */
import {injectReducer} from '../../store/mainReducer';
export const module='pdf';
export default (store)=>({
	path:'/'+module,
	getComponent(nextState,cb){
		require.ensure([],(require)=>{
			const container=require('./container').default;
			const reducer=require('./modules/reducer').default;
			injectReducer(store,{key:module,reducer});
			cb(null,container);
		},'pdf')
	}
})