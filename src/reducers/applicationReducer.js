const initialState = {
    templateData: [],
    deploymentData: [],
    templateDataFetchError: "",
    deploymentDataFetchError: "",
    deletedCount: 0,
    deploymentSuccess: false,
    isTimerRunning: false
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
            return {
                ...state,
                deploymentSuccess: action.deploymentSuccess
            };
        case "FORM_ERROR":
            return state;
        case "DELETE_DEPLOYMENT":
            return {
                ...state,
                deletedCount: action.deletedCount
            };
        case "RESET_DELETED_COUNT":
            return {
                ...state,
                deletedCount: 0
            };
        case "CURRENT_DEPLOYEMENT_DONE":
            return {
                ...state,
                deploymentSuccess: false
            };
        case "SET_TIMER":
            return {
                ...state,
                isTimerRunning: true
            };
        case "RESET_TIMER":
            return {
                ...state,
                isTimerRunning: false
            }
        default:
            return state;
    }
}