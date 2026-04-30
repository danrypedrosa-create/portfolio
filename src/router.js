import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Experience from './views/Experience.vue'
import Certifications from './views/Certifications.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/experience', component: Experience },
  { path: '/certifications', component: Certifications },
  { path: '/contact', component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})