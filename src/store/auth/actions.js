export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
// export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const actions = {
    requestLogin(creds) {
        return {
            type: LOGIN_REQUEST,
            payload: {
                isFetching: true,
                isAuthenticated: false,
                creds
            }
        };
    }, 
    receiveLogin(user) {
        return {
            type: LOGIN_SUCCESS,
            payload: {
                isFetching: false,
                isAuthenticated: true,
                id_token: user.id_token
            }
        };
    }, 
    loginError(message) {
        return {
            type: LOGIN_FAILURE,
            payload: {
                isFetching: false,
                isAuthenticated: false,
                message
            }
        };
    },
    requestLogout() {
        return {
            type: LOGOUT_REQUEST,
            payload: {
                isFetching: true,
                isAuthenticated: true
            }
        }
    },
    receiveLogout() {
        return {
            type: LOGOUT_SUCCESS,
            payload: {
                isFetching: false,
                isAuthenticated: false
            }
        };
    }
};
export default actions;
