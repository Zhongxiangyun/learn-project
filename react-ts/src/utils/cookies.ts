import Cookies from 'js-cookie';

export const setCookies = (key: any, value: any) => {
    Cookies.set(key, value);
};
export const getCookies = (key: any) => {
    return Cookies.get(key);
};
