const initialState = {
    templateData: [],
    error: ""
}

export default function applicationReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_ALL_TEMPLATES" : 
            return {
                ...state,
                templateData: action.data,
                error: action.error
            };
        default:
            return state;
    }
}