const TOKEN_KEY = 'jwt';

export const login = (userID) => {
    localStorage.setItem(TOKEN_KEY, userID);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}