import cookie from 'react-cookies'
const TOKEN_KEY = 'jwt';

export const login = (userID) => {
    // localStorage.setItem(TOKEN_KEY, userID);
    cookie.save(TOKEN_KEY, userID, { path: '/' })
}

export const logout = () => {
    // localStorage.removeItem(TOKEN_KEY);
    cookie.remove(TOKEN_KEY, { path: '/' })
}

export const isLogin = () => {
    if (cookie.load(TOKEN_KEY)) {
        return true;
    }

    return false;
}