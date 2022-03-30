import request from "../../config/http"

//登录
export function loginApi(params?: object) {
    return request({
        url: '/admin/login/dologin',
        method: 'post',
        params
    })
}
