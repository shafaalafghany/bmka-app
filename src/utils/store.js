import {createStore} from 'redux'

const initialState = {
    userStats: {
        current: 0,
        available: 0,
        loadingCurrent: false,
        loadingAvailable: true,
    }
}

const changeState = (state = initialState, {type, ...rest}) => {
    switch (type){
        case "userStats": return {
            ...state,
            userStats:{
                ...state.userStats,
                ...rest,
            }
        }
        default: return state
    }
}

const store = createStore(changeState);

export default store