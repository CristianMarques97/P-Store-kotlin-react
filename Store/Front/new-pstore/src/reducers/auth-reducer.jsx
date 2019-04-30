import {AUTORIZE_USER} from '../actions/auth-actions';

export default function authReducer(state = false, { type, auth }) {
    switch (type) {
        case AUTORIZE_USER:
            return auth;

        default:
            return state;
    }

}