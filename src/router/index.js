import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import LoginView from '../views/LoginView.vue'
import DebtorsView from '../views/DebtorsView.vue'
import PayersView from '../views/PayersView.vue'
import DateView from '../views/DateView.vue'
import RedactChoice from '../views/RedactChoice.vue'
import RecordView from '../views/RecordView.vue'
import ClientView from '../views/ClientView.vue'
import FrequencyView from '../views/FrequencyView.vue'
import ShopsView from '../views/ShopsView.vue'
import RecentView from '../views/RecentView.vue'
import EditView from '../views/EditView.vue'
import EditorView from '../views/EditorView.vue'
import RestsView from '../views/RestsView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/enter',
    name: 'login',
    component: LoginView
  },
  {
    path: '/debtors',
    name: 'debtors',
    component: DebtorsView
  },
  {
    path: '/payers',
    name: 'payers',
    component: PayersView
  },
  {
    path: '/datesChart',
    name: 'datesChart',
    component: DateView
  },
  {
    path: '/redact',
    name: 'redact',
    component: RedactChoice
  },
  {
    path: '/record',
    name: 'record',
    component: RecordView
  },
  {
    path: '/addClient',
    name: 'addClient',
    component: ClientView
  },
  {
    path: '/frequency',
    name: 'frequency',
    component: FrequencyView
  },
  {
    path: '/clients',
    name: 'clients',
    component: ShopsView
  },
  {
    path: '/recent',
    name: 'recent',
    component: RecentView
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditView
  },
  {
    path: '/editor/:id',
    name: 'editor',
    component: EditorView,
    props: true
  },
  {
    path: '/rests',
    name: 'rests',
    component: RestsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router







