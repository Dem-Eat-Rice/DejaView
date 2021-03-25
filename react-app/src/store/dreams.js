const SET_DREAM_FRAGMENTS = "SET_DREAM_FRAGMENTS";
const SET_SINGLE_DREAM = "SET_SINGLE_DREAM";

const setDreamFragments = (fragment) => {
    return {
        type: SET_DREAM_FRAGMENTS,
        fragment: fragment
    }
}

const setSingleDream = (dream) => {
    return {
        type: SET_SINGLE_DREAM,
        dream: dream
    }
}

export const getDreamFragments = (dreamId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/dreams/${dreamId}/fragments`);
        const fragments = await response.json();
        dispatch(setDreamFragments(fragments));
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
        case SET_DREAM_FRAGMENTS:
            newState = action.fragment;
            return newState;
        case SET_SINGLE_DREAM:
            newState = {state, ...action.dream};
            return newState;
        default:
            return state;
    }
};

export default reducer;