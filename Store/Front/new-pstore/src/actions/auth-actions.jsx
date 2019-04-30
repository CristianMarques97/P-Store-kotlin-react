export const AUTORIZE_USER = 'user:auth';

export default function userAuthlogin(authState) {
        return {
            type: AUTORIZE_USER,
            auth: authState,
        }
}