import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Projects from "@/views/Projects.vue";
import projects from "@/projects.js";
import Project from "@/views/Project.vue";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/projects', name: 'Projects', component: Projects},
    ...projects.map(project => ({
        path: "/" + project.title,
        name: project.title,
        component: Project,
        props: {project}
    }))
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        return {top: 0}
    }
})

export default router
