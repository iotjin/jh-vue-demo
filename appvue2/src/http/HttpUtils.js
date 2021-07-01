//网络请求工具类

const myAxios = require('axios');
const { Toast } = require('vant');

const isDevelop = process.env.NODE_ENV === "development";
const kToastHiddenTime = 1000;

myAxios.defaults.timeout = 15000;

module.exports = {
    get,
    post,
}


// http request 拦截器
myAxios.interceptors.request.use(
    (config) => {
        //对请求数据加密
        config.data = handleSendData(config.data);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// http response 拦截器
myAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // console.log(error);
        // console.log(error.message);
        // console.log(error.response);
        // console.log(error.response.status);
        // 网络异常
        if (error.code === 'ECONNABORTED' || error.message === 'Network Error' || error.message.indexOf('timeout') !== -1) {
            Toast('网络异常');
            return Promise.reject({
                code: -10000,
                msg: '网络异常',
            });
        }
        if (error && error.response.status) {
            switch (error.response.status) {
                case 400:
                    error.message = "Bad Request/请求错误(400)";
                    break;
                case 401:
                    error.message = "Unauthorized/无权限,登录过期(401)";
                    break;
                case 403:
                    error.message = "Forbidden/拒绝访问(403)";
                    break;
                case 404:
                    error.message = "Not Found/无此请求(404)";
                    break;
                case 408:
                    error.message = "Request Timeout/请求超时(408)";
                    break;
                case 500:
                    error.message = "Internal Server Error/服务器错误(500)";
                    break;
                case 501:
                    error.message = "Not Implemented/服务未实现(501)";
                    break;
                case 502:
                    error.message = "Bad Gateway/网关错误(502)";
                    break;
                case 503:
                    error.message = "Service Unavailable/服务不可用(503)";
                    break;
                case 504:
                    error.message = "Gateway Timeout/网关超时(504)";
                    break;
                case 505:
                    error.message = "HTTP Version Not Supported/HTTP版本不受支持(505)";
                    break;
                default:
                    error.message = `未知错误(${error.response.status})!`;
            }
        }
        return Promise.reject({
            code: error.response.status,
            msg: error.message,
        });
    }
);

function getToken() {
    let token = "1";
    return token;
}

/* 请求头 */
function getHeader() {
    let header = {
        "content-type": "application/x-www-form-urlencoded",
        version: "1.0.0",
        token: getToken(),
    };
    return header;
}

//处理发送的数据，对数据加密
function handleSendData(params) {
    if (isDevelop) {
        console.log("===== HttpUtils 请求参数 =====", params);
    }
    return params;
}

//处理返回数据，对数据解密
function handleReturnData(res) {
    if (isDevelop && res) {
        console.log("===== HttpUtils 返回数据 =====", res.data);
    }
    return res;
}

/**
 * function: 显示/隐藏加载框
 * @isShow 显示/隐藏
 * @loadingText 加载框文字
 */
function showLoading(isShow, loadingText) {
    console.log(isShow);
    if (isShow == false) {
        Toast.clear();
        return;
    }
    if (loadingText) {
        if (loadingText != "" && isShow == true) {
            Toast.loading({
                message: loadingText,
                duration: 0,
                // forbidClick: true,
            });
        }
    }
}

/* 进行请求 */
const request = (url, method, params, loadingText) => {
    showLoading(true, loadingText);
    return new Promise((resolve, reject) => {
        if (method === "GET") {
            myAxios
                .get(url, {
                    params: params,
                    headers: getHeader(),
                })
                .then((res) => {
                    setTimeout(() => {
                        Toast.clear();
                        resolve(handleReturnData(res.data));
                    }, kToastHiddenTime);
                })
                .catch((error) => {
                    setTimeout(() => {
                        Toast.clear();
                        reject(error);
                    }, kToastHiddenTime);
                });
        }
        if (method === "POST") {
            myAxios
                .post(url, {
                    params: params,
                    headers: getHeader(),
                })
                .then((res) => {
                    setTimeout(() => {
                        Toast.clear();
                        resolve(handleReturnData(res.data));
                    }, kToastHiddenTime);
                })
                .catch((error) => {
                    setTimeout(() => {
                        Toast.clear();
                        reject(error);
                    }, kToastHiddenTime);
                });
        }
    });
};

/* get请求 */
function get(url, params, loadingText) {
    return request(url, "GET", params, loadingText);
}

/* post请求 */
function post(url, params, loadingText) {
    return request(url, "POST", params, loadingText);
}



/*
使用方法 ：

1.在要使用的js文件导入
const HTTP = require('../../../../http/HttpUtils.js');

2. 调用
HTTP.post('url', params,'正在加载...').then(res => {
}).catch(error=>{
});

 */
