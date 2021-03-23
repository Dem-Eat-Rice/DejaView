const SET_DREAM_FRAGMENTS = "SET_DREAM_FRAGMENTS"

const setDreamFragments = (fragment) => {
    return {
        type: SET_DREAM_FRAGMENTS,
        fragment: fragment
    }
}

const getDream = (dreamId) => {
    return {
        type: GET_DREAM,
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

export const getDream = (dreamId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/dreams/${dreamId}`);
        const dream = response.json();
        dispatch(getDream(dreamId));
    }
}

const initialState = [];

const reducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_DREAM_FRAGMENTS:
            newState = action.fragments;
            return newState;
        default:
            return state;
    }
};

export default reducer;