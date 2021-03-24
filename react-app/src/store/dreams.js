const SET_DREAM_FRAGMENTS = "SET_DREAM_FRAGMENTS";
const SET_DREAM = "SET_DREAM";

const setDreamFragments = (fragment) => {
    return {
        type: SET_DREAM_FRAGMENTS,
        fragment: fragment
    }
}

const setDream = (dream) => {
    return {
        type: SET_DREAM,
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
        dispatch(setDream(dream));
    }
}

const initialState = [];

const reducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_DREAM_FRAGMENTS:
            newState = action.fragment;
            return newState;
        case SET_DREAM:
            newState = action.dream;
            return newState;
        default:
            return state;
    }
};

export default reducer;