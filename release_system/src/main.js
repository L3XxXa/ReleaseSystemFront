import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import components from "@/components"
import axios from 'axios';


const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
});
axios.defaults.baseURL="";
axios.defaults.timeout=1000;
app.use(router).mount('#app');
