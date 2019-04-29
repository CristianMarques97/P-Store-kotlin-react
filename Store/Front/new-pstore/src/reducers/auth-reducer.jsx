import {AUTORIZE_USER} from '../actions/auth-actions';

export default function authReducer(state = false, { type, payload }) {
    switch (type) {
        case AUTORIZE_USER:
            return payload;

        default:
            return state;
    }

}