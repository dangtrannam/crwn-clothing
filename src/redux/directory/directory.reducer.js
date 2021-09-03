import sections from './directory.data'
const initializeState = {
    sections :sections
};

const directoryReducer = (state = initializeState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;