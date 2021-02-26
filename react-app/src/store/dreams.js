const SET_DREAM_FRAGMENTS = "SET_DREAM_FRAGMENTS"

const setDreamFragments = (fragment) => {
    return {
        type: SET_DREAM_FRAGMENTS,
        fragment: fragment
    }
}

export const getDreamFragments = (dreamId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/dreams/${dreamId}/fragments`);
        const fragments = await response.json();
        dispatch(setDreamFragments(fragments));
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