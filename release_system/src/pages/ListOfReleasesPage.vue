<template>
    <div>
        <div class="nav__menu">
            <navigation-menu></navigation-menu>
        </div>
        <div class="content">
            <h1 class="heading">
                Список релизов
            </h1>
            <div class="lists__wrapper">
                <in-process-releases :releases="inProgressReleases" class="element"/>
                <approve-requested-releases :releases="approveRequestedReleases" class="element"/>
                <planned-releases :releases="plannedReleases" class="element"/>
            </div>
        </div>
    </div>
</template>

<script>
import App from "@/App.vue";
import api from "@/api/Api";

export default {
    name: "ListOfReleasesPage",
    data() {
        return {
            releases: [],
            approveRequestedReleases: [],
            plannedReleases: [],
            inProgressReleases: [],
        }
    },
    methods: {
        async getData() {
            const url = new URL(App.data().link)
            url.pathname = "api/v1/releases"
            let response
            await (async () => {
                response = await api.methods.getReleases()
            })()
            console.log(response)
            if (response.status === 200) {
                this.releases = [...this.releases, ...response.data.Message]
            } else {
                alert("Ошибка")
            }
            this.divideReleasesByStatus(response.data.Message)
        },

        divideReleasesByStatus(releases) {
            for (let i = 0; i < releases.length; i++) {
                switch (releases[i].status) {
                    case "approval_requested":
                        this.approveRequestedReleases.push(releases[i])
                        break
                    case "planned":
                        this.plannedReleases.push(releases[i])
                        break
                    case "in_progress":
                        this.inProgressReleases.push(releases[i])
                        break
                }
            }
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style scoped>
.nav__menu {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    float: left;
    width: 17%;
    margin-left: 4px;
    margin-top: 4px;
}

.content {
    float: right;
    width: 83%;
    margin-top: 30px;
}

.heading {
    font-family: Montserrat;
    font-weight: normal;
    text-align: center;
}

.lists__wrapper{
    height: 84%;
    position: absolute;
    width: 82.5%;
}
.element{
    display: inline-block;
    margin-left: 9.5%;
    width: 21%;
    height: 100%;
}

</style>