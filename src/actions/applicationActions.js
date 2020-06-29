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

            if(response.data) {
                dispatch({
                    type: "GET_ALL_DEPLOYMENTS",
                    data: response.data,
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