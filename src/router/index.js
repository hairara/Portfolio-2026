import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AnesthesiaLayout from '../views/projectLayouts/AnesthesiaLayout.vue'
import AlomedikaLayout from '../views/projectLayouts/AlomedikaLayout.vue'
import ClmaLayout from '../views/projectLayouts/ClmaLayout.vue'
import VidioLayout from '../views/projectLayouts/VidioLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects/anesthesia-module', name: 'anesthesia', component: AnesthesiaLayout },
    { path: '/projects/alomedika-smart-prescription', name: 'alomedika', component: AlomedikaLayout },
    { path: '/projects/clma-medication', name: 'clma', component: ClmaLayout },
    { path: '/projects/vidio-account-settings', name: 'vidio', component: VidioLayout },
    { path: '/about', name: 'about', component: About },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
