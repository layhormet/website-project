import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import LSWalletView from '@/views/LSWalletView.vue'
import SelfBankingView from '@/views/SelfBankingView.vue'
import PromotionView from '@/views/PromotionView.vue'
import NewsView from '@/views/NewsView.vue'
import ContactUsView from '@/views/ContactUsview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/service',
    name: 'service',
    component: ServicesView
  },
  {
    path: '/LSWallet',
    name: 'LSWallet',
    component: LSWalletView
  },
  {
    path: '/SelfBanking',
    name: 'SelfBanking',
    component: SelfBankingView
  },
  {
    path: '/promotion',
    name: 'promotion',
    component: PromotionView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUsView

  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
