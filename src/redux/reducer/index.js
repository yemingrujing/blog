/**
 * 数据处理
 */
// import { combineReducers } from 'redux'
import type from '../store/types';

export default (state , action) =>{
    if (action.type === type.ISSUES_LIST) {
        return{
            ...state,
            issues: action.params
        }
    } else {
        return { ...state };
    }
}