const ADDBANNER = "ADDBANNER";
const REMOVEBANNER = "REMOVEBANNER";
const GETBANNER = "GETBANNER";

export const getbanner = (data) => {
    return {
        type: GETBANNER,
        payload: data
    }
}

export const addbanner = (data) => {
    return {
        type: ADDBANNER,
        payload: data
    }
}

export const removebanner = (data) => {
    return {
        type: REMOVEBANNER,
        payload: data
    }
}

const initialstate = [
  
]
export const bannerReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GETBANNER:
            return action.payload;
        case ADDBANNER:
            return [...state, action.payload]
        case REMOVEBANNER:
            return state.filter(state => state === action.payload);
        default:
            return state
    }
}