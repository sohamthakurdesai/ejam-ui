import axios from 'axios';
import { toast } from 'react-toastify';
const service_url = process.env.REACT_APP_EJAM_SERVICE_URI

export const getTemplatesAndVersions = () => {

    return async (dispatch) => {
        const request = {
            method: 'get',
            responseType: 'json',
            url: `${service_url}/templates`,
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
            url: `${service_url}/deployments`,
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
    let templateName = JSON.parse(data.get("templateObj")) ? JSON.parse(data.get("templateObj")).name : ""
    let version = data.get("version")

    if(url === "" || templateName === "" || version === "") {
        toast.error("Enter all the required data: Template, Version and URL.")
        return (dispatch) => {
            dispatch({
                type: "FORM_ERROR"
            })
        }
    }

    const expression = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/

    var regex = new RegExp(expression);

    if(!regex.test(url)) {
        toast.error("Enter a valid URL.")
        return (dispatch) => {
            dispatch({
                type: "FORM_ERROR"
            })
        }
    }

    return async (dispatch) => {
        const request = {
            method: 'post',
            responseType: 'json',
            url: `${service_url}/deployments`,
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
                toast.success("Deployment submission successful.")
                dispatch({
                    type: "ADD_NEW_DEPLOYMENT",
                    dataCount: 1,
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
            url: `${service_url}/deployments`,
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