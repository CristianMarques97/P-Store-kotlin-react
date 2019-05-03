export const DRAWER_STATE = 'drawer:changeState';

export default function drawerChangeState(stateChange) {
        return {
            type: DRAWER_STATE,
            state: stateChange     
    }
}