import { transitions, positions } from 'react-alert';

export const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '20px',
    containerStyle: {
        zIndex: 9999,
    },
    transition: transitions.SCALE
}