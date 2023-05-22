import axios from "axios";
import App from "@/App";

export default {
    name: "Api",
    methods: {
        async planRelease(data) {
            const url = new URL(App.data().link)
            url.pathname = "api/v1/plan"
            let returnData
            setTimeout(
                await axios({
                    method: 'post',
                    url: url.href,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: data,
                    withCredentials: true
                }).then(response => {
                    returnData = response
                }).catch(error => {
                    returnData = error
                })
            )
            return returnData
        },
        async changeDate(data) {
            const url = new URL(App.data().link)
            url.pathname = "api/v1/change"
            let returnData
            setTimeout(
                await axios({
                    method: 'patch',
                    url: url.href,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: data,
                    withCredentials: true
                }).then(response => {
                    returnData = response
                }).catch(error => {
                    returnData = error
                })
            )
            return returnData
        },
        async registerUser(data) {
            const url = new URL(App.data().link)
            url.pathname = "api/v1/signup"
            let returnData
            setTimeout(
                await axios({
                    method: 'post',
                    url: url.href,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: data,
                }).then(response => {
                    returnData = response
                }).catch(error => {
                    returnData = error
                })
            )
            return returnData
        },
        async getReleases() {
            const url = new URL(App.data().link)
            url.pathname = "api/v1/releases"
            let returnData
            setTimeout(
                await axios({
                    method: 'get',
                    url: url.href
                }).then(response => {
                    console.log(response.data.Message)
                    returnData = response
                }).catch(error => {
                    console.log(error)
                    returnData = error
                })
            )
            return returnData
        },
        async deleteRelease(data){
            const url = new URL(App.data().link)
            url.pathname = "api/v1/cancel"
            let returnData
            setTimeout(await axios({
                method: 'patch',
                url: url.href,
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                data: data
            }).then(response => {
                returnData = response
            }).catch(error => {
                returnData = error
            }))
            return returnData
        },
        async login(data) {
            const url = new URL(App.data().link)
            url.pathname = "api/v1/login"
            let returnData
            setTimeout(
                await axios({
                    method: 'post',
                    url: url.href,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }).then(response => {
                    console.log(data)
                    returnData = response
                }).catch(error => {
                    returnData = error
                })
            )
            return returnData
        }
    }
}

