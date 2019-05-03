import {DRAWER_STATE} from '../actions/drawer-action';

export default function drawerReducer(state = false, { type, drawerState }) {
    switch (type) {
        case DRAWER_STATE:
            return drawerState;

        default:
            return state;
    }

}