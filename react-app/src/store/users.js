import reducer from "./dreams";

const SET_SINGLE_USER = "SET_SINGLE_USER";

export const setSingleUser = (user) => {
   return {
       type: SET_SINGLE_USER,
       user: user,
   }
}

export const fetchSingleUser = (userId) => {
    return async (dispatch) => {
        response = await fetch(`api/user/${userId}`)
        user = await response.json()
        dispatch(setSingleUser(user))
    }
}

export default reducer;