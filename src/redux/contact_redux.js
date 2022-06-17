const GETCONTACTS = 'GETCONTACTS';
const DELCONTACTS = "DELCONTACTS";



export const getcontacts  = (contacts) => {
    return {
        type: GETCONTACTS,
        contacts
    }
}


const initialstate = [
    
]

export const contactReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GETCONTACTS:
            return action.contacts;
        default:
            return state;
    }
}
