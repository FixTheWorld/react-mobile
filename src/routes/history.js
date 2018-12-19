/**
 * Created by changjin.zhang on 9/12/2017.
 */
import { browserHistory,useRouterHistory } from 'react-router'
import {createHistory, useBasename } from 'history'
import config from '../../config/config'

const history = useBasename(createHistory)({ basename:config.basename });
export default history;