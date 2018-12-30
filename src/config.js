// const config = {
//     auth:{
//         app_prefix:'wawe_docmachine',
//         domain:'wawe-llc.auth0.com',
//         clientID:'7J2Ci59hHvR6SR4AaKbhOPdn5t7G6vk5',
//         redirectUri:'http://localhost:3000/callback',
//         audience:'http://docmachine.com'
//     },
//     docsApi: 'http://localhost:3001'
// };
//PROD
const config = {
    auth:{
        app_prefix:'wawe_docmachine',
        domain:'wawe-llc.auth0.com',
        clientID:'7J2Ci59hHvR6SR4AaKbhOPdn5t7G6vk5',
        redirectUri:'https://resume-converter.herokuapp.com/callback',
        audience:'http://docmachine.com'
    },
    docsApi: 'https://doc-machine-api.herokuapp.com'
};
export default config;