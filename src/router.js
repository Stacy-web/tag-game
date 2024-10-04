import { createWebHistory, createRouter } from 'vue-router'

import PageStart from '@p/PageStart.vue'
import PageGame from '@p/PageGame.vue'
import PageResults from '@p/PageResults.vue'

const routes = [
    { path: '/', component: PageStart },
    { path: '/game:nickname', component: PageGame, name: 'Game', props: true },
    { path: '/results', component: PageResults },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router