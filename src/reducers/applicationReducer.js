const initialState = {
    templateData: [],
    deploymentData: [],
    templateDataFetchError: ""
}

export default function applicationReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_ALL_TEMPLATES":
            return {
                ...state,
                templateData: action.data,
                templateDataFetchError: action.error
            };
        case "GET_ALL_DEPLOYMENTS":
            return {
                ...state,
                deploymentData: action.data,
                deploymentDataFetchError: action.error
            };
        default:
            return state;
    }
}