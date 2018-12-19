/**
 * Created by changjin.zhang on 4/19/2017.
 */
import * as t from './actionTypes';

function doAction(type,data=null){
	return {
		type,
		data
	}
}

function testApi(callback){
	return (dispatch,getState)=>{
		dispatch(doAction(t.REQUEST_DATA));
		const settings={
			method:'POST'
		};
		fetch('/api',settings)
		.then((res)=>res.json())
		.then((data)=>{
			setTimeout(()=>{
				if(data.errorCode===0){
					dispatch(doAction(t.RECEIVE_DATA,data));
					callback&&callback(data);
				}else{
					dispatch(doAction(t.RECEIVE_ERROR,data));
				}
			},1000);
		});
	}
}

export {testApi};