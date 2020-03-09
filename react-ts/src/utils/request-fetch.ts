import { notification, message } from 'antd';
import { createBrowserHistory } from 'history';
import config from '../config/index';
import { getCookies } from './cookies';

// import 'whatwg-fetch'
export interface Response {
    status: number | string;
    [key: string]: any
}
export interface CodeMessage {
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

const codeMessage: CodeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

function checkStatus(response: Response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const errortext = codeMessage[response.status] || response.statusText;
    notification.error({
        message: `请求错误 ${response.status}: ${response.url}`,
        description: errortext,
    });
    const error: any = new Error(errortext);
    error.name = response.status;
    error.message = response;
    throw error;
}

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

    const token: string = getCookies('token') || '';
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

