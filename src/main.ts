import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./pages/Home.vue') },
    { path: '/blogs', component: () => import('./pages/Blogs.vue') },
    { path: '/blogs/B0', component: () => import('./blogs/B0/B0.vue') },
    { path: '/blogs/B1', component: () => import('./blogs/B1/B1.vue') },
    { path: '/blogs/B2', component: () => import('./blogs/B2/B2.vue') },
    { path: '/blogs/B3', component: () => import('./blogs/B3/B3.vue') },
    { path: '/blogs/B5', component: () => import('./blogs/B5/B5.vue') },
    { path: '/about', component: () => import('./pages/About.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
