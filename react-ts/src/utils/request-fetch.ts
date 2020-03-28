import { message } from 'antd';
import { createBrowserHistory } from 'history';
import config from '../config/index';
import { getCookies } from './cookies';

// import 'whatwg-fetch'
export interface Response {
    status: number | string;
    [key: string]: any
}

// request 中 header
export interface IHeaders {
    web_token?: string;
    [key: string]: any
}
// payload 请求体函数
export interface IPayload {
    cache?: "no-cache" | "default" | "no-store" | "reload" | "force-cache" | "only-if-cached" | undefined;
    headers?: IHeaders;
    method?: string;
    mode?: "cors" | "navigate" | "same-origin" | "no-cors" | undefined;
    redirect?: "follow" | "error" | "manual" | undefined;
    referrer?: string;
    [key: string]: any;
}

const myHistory = createBrowserHistory();

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
interface IMyOptionObj {
    method?: string, body?: any, headers?: any, credentials?: any
}


const baseUrl = config['baseUrl'];
const BASE_URL = process.env.NODE_ENV === 'development'
    ? baseUrl.dev
    : baseUrl.pro;

/**
   * @description fetch的二次封装
   * @param {String} url  请求地址  http://192.168.137.1:3000/  or /admin/controller/order/order_info
   * @param {Object} data  携带的参数可以使 formdata，也可以是json  
   * @param {Object} headers 请求头headers  
   * @param {String} method  请求方法，大小写均可 GET|POST|PUT|DELETE  ...  
   * @param {String} mode  json:普通数据类型 formdata:上传文件 none：使用get时不能有body
   * @returns {Object} 异步返回的结果  
   */
async function request({
    url = '',
    data = {},
    method = 'POST',
    headers = {},
    mode = 'json', // json, formdata, none.
}) {
    // Default options are marked with *
    const methods: string = method.toUpperCase();
    const isBase: number = url.search(/(http:|https:)/);
    const reqUrl: string = isBase === -1 ? `${BASE_URL}${url}` : url;

    const token: string = getCookies('jiuye') || '';
    // warning :fetch使用get的时候，不能有body
    const body = mode === 'none' || methods === 'GET'
        ? {}
        : {
            body: mode === 'json' ? JSON.stringify(data) : data,
        };
    // warning :fetch使用form-data的时候，headers必须为空
    const header = mode === 'formdata'
        ? { ...headers }
        : { 'Content-type': 'application/json', ...headers };
    const payload: IPayload = {
        cache: 'no-cache',
        headers: {
            web_token: token, //设置token
            // 'content-type': 'application/json',
            ...header,
        },
        method: methods, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
        ...body,
    }
    const response = await fetch(reqUrl, payload);
    // checkStatus(response)
    const results = await response.json();
    
    // 1:成功，0：失败，-2：token失效
    if (Number(results.state) === -2) {
        message.error(results.msg);
        myHistory.push('/login');
        setTimeout(() => {
            window.location.reload();
        }, 1000);
        return { msg: '登录失效！！', data: {}, state: 500 };
    }
    if (Number(results.state) !== 1) {
        // 请求失败
        message.warning(results.msg);
        return { state: results.state || results.resultCode, ...results };
    }
    if (Number(results.state) === 1) {
        // 请求成功
        // message.warning (results.msg);
        return { state: results.state, ...results.data };
    }
}
export default request;

