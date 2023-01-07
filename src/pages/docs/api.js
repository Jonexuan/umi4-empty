import { request } from 'umi';

export function getUser() {
    return request('/api/users', {
        method: 'GET'
    })
}