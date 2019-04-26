export const LOGIN_USER = 'user:login';

export default function userlogin(user) {
        return {
            type: LOGIN_USER,
            payload: {
                userlogin: user
            }
        }
}