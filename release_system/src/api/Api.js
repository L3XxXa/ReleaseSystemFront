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
                    data: data
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
                data: data
            }).then(response => {
                returnData = response
            }).catch(error => {
                returnData = error
            }))
            return returnData
        }
    }
}

