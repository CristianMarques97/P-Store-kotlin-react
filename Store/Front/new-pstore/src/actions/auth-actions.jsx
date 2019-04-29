export const AUTORIZE_USER = 'user:auth';

export default function userlogin(authState) {
        return {
            type: AUTORIZE_USER,
            authState,
        }
}