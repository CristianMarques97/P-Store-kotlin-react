import {LOGIN_USER} from '../actions/logged-user-actions';

export default function loggedClientReducer(state = null, { type, payload }) {
    switch (type) {
        case LOGIN_USER:
            return payload;

        default:
            return state;
    }

}