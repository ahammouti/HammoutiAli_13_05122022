import axios from "axios";

const baseUrl = "http://localhost:3001/api/v1/"
const loginUrl = baseUrl + "user/login";
const userProfileUrl = baseUrl + "user/profile";

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
            console.log(dataForm)
            localStorage.setItem('firstName', response.data.body.firstName);
            localStorage.setItem('lastName', response.data.body.lastName)
            resolve(response.data);
            console.log(response)
        } catch (error) {
            reject(error);
        }
    })
}