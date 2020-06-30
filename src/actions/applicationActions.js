import axios from 'axios';
const service_url = process.env.REACT_APP_EJAM_SERVICE_URI

export const getTemplatesAndVersions = () => {

    return async (dispatch) => {
        const request = {
            method: 'get',
            responseType: 'json',
            url: `${service_url}/getalltemplates`,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            let response = await axios(request)

            if(response.data && response.data.data) {
                dispatch({
                    type: "GET_ALL_TEMPLATES",
                    data: response.data.data,
                    error: ""
                })
            }
        } catch (error) {
            console.log("Error:", error)
            dispatch({
                type: "GET_ALL_TEMPLATES",
                data: [],
                error: "Error While getting templates. Contact Administrator."
            })
        }
    }
}

export const getDeployments = () => {
    return async (dispatch) => {
        const request = {
            method: 'get',
            responseType: 'json',
            url: `${service_url}/getdeployment`,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            let response = await axios(request)

            if(response.data && response.data.data) {
                dispatch({
                    type: "GET_ALL_DEPLOYMENTS",
                    data: response.data.data,
                    error: ""
                })
            }
        } catch (error) {
            console.log("Error:", error)
            dispatch({
                type: "GET_ALL_DEPLOYMENTS",
                data: [],
                error: "Error While getting the existing deployments. Contact Administrator."
            })
        }
    }
}

export const addDeployment = (data) => {
    let url = data.get("url")
    let templateName = JSON.parse(data.get("templateObj")).name
    let version = data.get("version")

    return async (dispatch) => {
        const request = {
            method: 'post',
            responseType: 'json',
            url: `${service_url}/adddeployment`,
            data: {
                "url": url,
                "templateName": templateName,
                "version": version
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            let response = await axios(request)

            if(response.data && response.data.data) {
                dispatch({
                    type: "ADD_NEW_DEPLOYMENT",
                    data: response.data.data,
                    error: ""
                })
            }
        } catch (error) {
            console.log("Error:", error)
            dispatch({
                type: "ADD_NEW_DEPLOYMENT",
                data: [],
                error: "Error While getting the existing deployments. Contact Administrator."
            })
        }
    }
}

export const deleteDeployment = (_id) => {
    return async (dispatch) => {
        const request = {
            method: 'delete',
            responseType: 'json',
            url: `${service_url}/deletedeployment`,
            data: { "_id": _id },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        try {
            let response = await axios(request)
            if(response.data && response.data.data) {
                dispatch({
                    type: "DELETE_DEPLOYMENT",
                    deletedCount: response.data.data.deletedCount,
                    error: ""
                })
            }
        } catch (error) {
            console.log("Error:", error)
            dispatch({
                type: "DELETE_DEPLOYMENT",
                deletedCount: 0,
                error: "Error While deleting the existing deployments. Contact Administrator."
            })
        }
    }
}

export const resetDeletedCount = () => {
    return (dispatch) => {
        dispatch({
            type: "RESET_DELETED_COUNT"
        })
    }
}