import {createStore} from 'vuex'
export default createStore(
    {
        state:{
            app_name: "zhora",
            task_link: "asdf",
            start_date: "2023-10-13T16:39:17.033922Z",
            finish_date: "2024-01-02T17:04:05.033922Z",
            ver: "0.8",
            status: "planned",
            thread_id: "1683198607.240319",
            auto_tests_required: false,
            on_duty: "a.sartakov1",
            followers: [
                "a.sartakov1"
            ],
            logs: [
                "2023-05-04 18:10:07.374396803 +0700 +07 m=+1362.331897161: Релиз запланирован"
            ]
        },
        mutations:{
            setFields(state, value){
                state.app_name = value.app_name
                state.ver = value.ver
                state.logs = value.logs
                state.task_link = value.task_link
                state.status = value.status
                state.start_date = value.start_date
                state.finish_date = value.finish_date
                state.auto_tests_required = value.auto_tests_required
                state.on_duty = value.on_duty
                state.followers = value.followers
            }
        },
        getters:{
            getData(state){
                return state
            }
        }
    }
)