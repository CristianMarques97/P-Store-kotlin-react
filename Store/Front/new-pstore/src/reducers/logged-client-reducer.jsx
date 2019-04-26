import {LOGIN_USER} from '../actions/logged-user-actions';

export default function loggedClientReducer(state = [], { type, payload }) {
    console.log(type)
    console.log(payload)
    switch (type) {
        case LOGIN_USER:
            return payload

        default:
            return state;
    }

}