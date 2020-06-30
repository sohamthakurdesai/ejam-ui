const initialState = {
    templateData: [],
    deploymentData: [],
    templateDataFetchError: "",
    deploymentDataFetchError: "",
    deletedCount: 0,
    dataCount: 0
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
            console.log("action.dataCount==>", action.dataCount)
            return {
                ...state,
                dataCount: action.dataCount
            };
        case "DELETE_DEPLOYMENT":
            return {
                ...state,
                deletedCount: action.deletedCount
            }
        case "RESET_DELETED_COUNT":
            return {
                ...state,
                deletedCount: 0,
                dataCount: 0
            };
        case "FORM_ERROR":
            return {
                ...state
            };
            break;
        default:
            return state;
    }
}