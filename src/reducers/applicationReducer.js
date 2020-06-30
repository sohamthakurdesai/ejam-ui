const initialState = {
    templateData: [],
    deploymentData: [],
    templateDataFetchError: "",
    deploymentDataFetchError: "",
    deletedCount: 0
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
        case "ADD_NEW_DEPLOYMENT":
            break;
        case "DELETE_DEPLOYMENT":
            return {
                ...state,
                deletedCount: action.deletedCount
            }
        default:
            return state;
    }
}