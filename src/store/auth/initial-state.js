export default {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
};