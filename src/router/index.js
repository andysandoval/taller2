import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/populares',
    name: 'Populares',
    component: () => import(/* webpackChunkName: "populares" */ '../views/Populares.vue')
  },
  {
    path: '/valoradas',
    name: 'Valoradas',
    component: () => import(/* webpackChunkName: "valoradas" */ '../views/Valoradas.vue')
  },
  {
    path: '/movie/:id',
    name: 'Pelicula',
    component: () => import(/* webpackChunkName: "pelicula" */ '../views/Pelicula.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
