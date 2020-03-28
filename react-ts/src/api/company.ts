import request from '../utils/request-fetch';
// 查询企业列表
export const companyList = ({
    name = "",
    status = "",
    desc = "",
    startTime = "",
    endTime = "",
    pageNumber = 1,
    sidx = "",
    sort = "",
    pageSize = 10 } = {}) => {
    return request({
        url: '/find_company_list',
        data: {
            'name_': name,
            'status_': status,
            'desc_': desc,
            'start_time': startTime,
            'end_time': endTime,
            'page_number': pageNumber,
            'page_size': pageSize,
            'sidx': sidx,
            'sort': sort,
        },
        method: 'post'
    })
}