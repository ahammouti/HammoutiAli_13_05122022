import axios from "axios";

const baseUrl = "http://localhost:3001/api/v1/"
const loginUrl = baseUrl + "user/login";
const userProfileUrl = baseUrl + "user/profile";

/**
 * async function using axios and post method to manage the authentication of the user
 * @param {Object} dataForm {email: " ", password: " ", rememberMe: true}
 * @returns 
 */
export const userLogin = (dataForm) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.post(loginUrl, dataForm);
            resolve(response.data);

            if (response.data.status === 200) {
                sessionStorage.setItem('token', response.data.body.token);
                localStorage.setItem('token', response.data.body.token);
            }
        } catch (error) {
            reject(error);
        }
    })
}


/**
 * async function using axios and post method to manage the fetching of the user's profile
 * no 
 * @returns
 */
export const fetchUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return reject("Token not found!")

            const response = await axios.post(userProfileUrl, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            console.log(response);

            localStorage.setItem('firstName', response.data.body.firstName);
            localStorage.setItem('lastName', response.data.body.lastName)
            resolve(response.data);
        } catch (error) {
            reject(error);
        }
    })
}


/**
 * async function using axios and put method to manage the updating of the user's profile
 * @param {Object} dataForm {firstName: "John", lastName: "Doe"}
 * @returns  {Promise}  {status: 200, body: {firstName: "John", lastName: "Doe"}}
 */
export const putUserInfo = (dataForm) => {
    return new Promise(async (resolve, reject) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return reject("Token not found!")

            const response = await axios.put(userProfileUrl, dataForm, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            console.log("dataForm put : ", dataForm)
            localStorage.setItem('firstName', response.data.body.firstName);
            localStorage.setItem('lastName', response.data.body.lastName)
            resolve(response.data);
            console.log("put : ", response)
        } catch (error) {
            reject(error);
        }
    })
}