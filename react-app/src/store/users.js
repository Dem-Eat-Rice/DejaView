const SET_SINGLE_USER = "SET_SINGLE_USER";
const SET_USERS_SINGLE_DREAM = "SET_USERS_SINGLE_DREAM";
const SET_USERS_SINGLE_FRAGMENT = "SET_USERS_SINGLE_FRAGMENT";
// const SET_ALL_USERS = "SET_ALL_USERS";
const SET_USERS_DREAMS = "SET_USERS_DREAMS";
const SET_USERS_FRAGMENTS = "SET_USERS_FRAGMENTS";

const setSingleUser = (user) => {
   return {
       type: SET_SINGLE_USER,
       user: user,
   }
}

// const setAllUsers = () => {
//     return {
//         type: SET_ALL_USERS,
//         users: users,
//     }
// }

const setUserDreams = () => {
    return {
        type: SET_USERS_DREAMS,
        dreams: dreams,
    }
}

const setUserFragments = () => {
    return {
        type: SET_USERS_FRAGMENTS,
        fragments: fragments,
    }
}

const setSingleUserDream = (dream) => {
   return {
       type: SET_USERS_SINGLE_DREAM,
       dream: dream,
   }
}

const setSingleUserFragment = (fragment) => {
   return {
       type: SET_USERS_SINGLE_FRAGMENT,
       fragment: fragment,
   }
}

export const fetchSingleUser = (userId) => {
    return async (dispatch) => {
        response = await fetch(`api/users/${userId}`);
        user = await response.json();
        dispatch(setSingleUser(user));
    }
}

export const fetchSingleUserDream = (userId, dreamId) => {
    return async (dispatch) => {
        response = await fetch(`api/users/${userId}/dreams/${dreamId}`);
        dream = await response.json();
        dispatch(setSingleUserDream(dream));
    }
}

export const fetchSingleUserFragment = (userId, fragmentId) => {
    return async (dispatch) => {
        response = await fetch(`api/users/${userId}/fragments/${fragmentId}`);
        fragment = await response.json();
        dispatch(setSingleUserFragment(fragment));
    }
}

// export const fetchAllUsers = () => {
//     return async (dispatch) => {
//         response = await fetch('api/users/');
//         users = response.json();
//         dispatch(setAllUsers(users));
//     }
// }

export const fetchUserDreams = (userId) => {
    return async(dispatch) => {
        response = await fetch(`api/users/${userId}/dreams`); //this route should return all dreams belonging to a specific user
        dreams = await response.json();
        dispatch(setUserDreams(dreams));
    }
}

export const fetchUserFragments = (userId) => {
    return async(dispatch) => {
        response = await fetch(`api/users/${userId}/fragments`); //this route should return all dreams belonging to a specific user
        fragments = await response.json();
        dispatch(setUserFragments(fragments));
    }
}


const initialState = []

const reducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_SINGLE_USER:
            newState = action.user;
            return newState;
        // case SET_ALL_USERS:
        //     newState = action.users;
        //     return newState;
        case SET_USERS_DREAMS:
            newState = action.dreams;
            return newState;
        case SET_USERS_FRAGMENTS:
            newState = action.fragments;
            return newState;
        case SET_USERS_SINGLE_DREAM:
            newState = action.dream;
            return newState;
        case SET_USERS_SINGLE_FRAGMENT:
            newState = action.fragment;
            return newState;
        default:
            return state;
    }
}


export default reducer;