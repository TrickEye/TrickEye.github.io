import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Blogs from './pages/Blogs.vue'
import B0 from './blogs/B0/B0.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/blogs', component: Blogs },
    { path: '/blogs/B0', component: B0 },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
