import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"

const app = createApp(App)

app.use(router)

axios.defaults.baseURL = import.meta.env.VITE_SERVER_IP

app.mount("#app")
