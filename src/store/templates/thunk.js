import axios from 'axios';
import actions from './actions';
import config from '../../config';
//TODO: put in factory method
const a = axios.create({
    baseURL: config.docsApi,
    headers: {
        'content-type': 'application/json',
        // 'Authorization': `Bearer ${getAccessToken()}`//TODO: implement me - put auth in store?
    }
});

export default function(){
    return function (dispatch, getState){
        return fetchData(getState().resume.content).then(res=>{
            dispatch(actions.fetchTemplateComplete(res));
        })
    }
}

function fetchData(content) {
    return new Promise((resolve, reject) => {
        a.post('/template',content).then(res=>{
            resolve(res.data);
        }).catch(err=>{
            console.log('oops',err);
        });
    })
}