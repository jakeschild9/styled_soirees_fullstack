import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ContactForm from "@/components/ContactForm.vue"
import Services from "@/components/Services.vue"
import Vendors from "@/components/Vendors.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactForm,
        },
        {
            path: "/services",
            name: "services",
            component: Services,
        },
        {
          path: "/vendors",
          name: "vendors",
          component: Vendors
        }
    ],
})

export default router
