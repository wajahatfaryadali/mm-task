export const constants = {
    api_base_url: 'http://182.176.169.225:19008/api/',
    version: "v1",
    user: "/users",
    login: "/login",
    signUp: "/signUp",
    resetPassword: "/resetPassword", // patch
    forgotPassword: "/forgotPassword",
    verifyCode: "/verifyCode",
    blogs: "/blogs"
}

export const base_url = constants.api_base_url + constants.version + constants.user
export const base_url_blog = constants.api_base_url + constants.version