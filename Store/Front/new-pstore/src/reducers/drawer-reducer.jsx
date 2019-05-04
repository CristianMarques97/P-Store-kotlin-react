import {DRAWER_STATE} from '../actions/drawer-action';

export default function drawerReducer(state = false, { type, drawer }) {
    switch (type) {
        case DRAWER_STATE:
            return drawer;

        default:
            return state;
    }

}