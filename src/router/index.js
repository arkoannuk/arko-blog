import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../views/DetailsView.vue'
import CreateView from '../views/CreateView.vue'
import TagView from '../views/TagView.vue'
import RealTimeView from '../views/RealTimeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/posts/:id',
      name: 'Details',
      component: Details,
      props: true
    },
    {
      path: '/create',
      name: 'Create',
      component: CreateView
    },
    {
      path: '/tags/:tag',
      name: 'Tag',
      component: TagView
    },
    {
      path: '/realtime',
      name: 'RealTime',
      component: RealTimeView
    }
  ]
})

export default router
