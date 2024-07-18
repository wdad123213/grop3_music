import App from './App'
import * as Pinia from 'pinia';
import { createSSRApp } from 'vue'

import { 
  Swipe,
  SwipeItem
 } from 'vant';
// 2. 引入组件样式
 import 'vant/lib/index.css';




export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  
  
  app.use(Swipe)
  app.use(SwipeItem)
  
  
  
  
  return {
    app,
    Pinia
  }
}
