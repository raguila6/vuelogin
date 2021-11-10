
import {createRouter, createWebHistory} from "vue-router";
import useAuth from "./composable/useAuth";

import About from "./pages/about.vue";
import Login from "./pages/login.vue";
import Index from "./pages/index.vue";
import Secret from "./pages/secret.vue";
import notFound from "./pages/404.vue";

const {isAuthenticated} = useAuth();



const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/secret",
        name: "Secret",
        component: Secret,
        beforeEnter: (to, from, next) => {
            if (!isAuthenticated.value){
               next("login");
            }
            next();
            
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: notFound,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;