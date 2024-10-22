import {authStatus} from "./constants.js";

export const saveAuthDataInLocalStorage = () => {
    const authData = {
        isAuthenticated: true
    }
    localStorage.setItem(authStatus, JSON.stringify(authData));
}

export const removeAuthDataFromLocalStorage = () => {
    localStorage.removeItem(authStatus);
}
