import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' //here I have implemented the router, for future expansion of our website.
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import './index.css'

const router = createRouter({
  history: createWebHistory(),
  routes: 
  [
    { path: '/', component: HelloWorld } //home page of our website
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app') 