const SET_SINGLE_DREAM = "SET_SINGLE_DREAM";


const setSingleDream = (dream) => {
    return {
        type: SET_SINGLE_DREAM,
        dream: dream
    }
}

export const fetchDream = (dreamId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/dreams/${dreamId}`);
        const dream = await response.json();
        dispatch(setSingleDream(dream));
    }
}

const initialState = {};

const reducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_SINGLE_DREAM:
            newState = {state, ...action.dream};
            return newState;
        default:
            return state;
    }
};

export default reducer;