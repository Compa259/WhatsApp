import { EDIT } from './types.js';

export const edit = (selectedBool) => {
    return {
        type: EDIT,
        payload: selectedBool
    };
};
