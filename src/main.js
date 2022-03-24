import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// 引入 qiankun 前端微服务框架
import { registerMicroApps, start } from 'qiankun'


Vue.use(ElementUI);

Vue.config.productionTip = false

// 配置子应用
const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:9001',
    container: '#vue',
    activeRule: '/vue2.x',
    props: {
      message: '主应用传递给Vue子应用的参数'
    }
  }, {
    name: 'reactApp',
    entry: '//localhost:9002',
    container: '#react',
    activeRule: '/react',
    props: {
      message: '主应用传递给React子应用的参数'
    }
  }, {
    name: 'page1',
    entry: 'lidengkedev.github.io',
    container: '#page1',
    activeRule: '/games/src/'
  }
]

// 注册子应用
registerMicroApps(apps, {
  beforeMount() {
    console.log('子应用挂载前的钩子函数：beforeMount')
  }
})
// 启用子应用
start({
  // 取消预加载
  prefetch: false
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
