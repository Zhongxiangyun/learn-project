import request from '../utils/request-fetch';
// 登录验证码
// 用户登录
export const logIn = ({ pageNumber = 1, pageSize = 10, username = '', password = '' } = {}) => {
    return request({
        url: '/employee_login',
        data: {
            'name_': username,
            'password_': password
        },
        method: 'post'
    })
}
// 退出登录
export const logOut = ({ pageNumber = 1, pageSize = 10, name = '' } = {}) => {
    return request({
        url: '/web/upms/employee_logout',
        data: {
        },
        method: 'post'
    })
}
// 员工信息
export const getEmployeeInfo = ({ pageNumber = 1, pageSize = 10, name = '' } = {}) => {
    return request({
        url: '/web/upms/employee_attribute',
        data: {
        },
        method: 'post'
    })
}
// 员工权限
export const getEmployeeMenu = ({ pageNumber = 1, pageSize = 10, name = '' } = {}) => {
    return request({
        url: '/web/upms/find_user_view_menu_all_node',
        data: {
        },
        method: 'post'
    })
}

