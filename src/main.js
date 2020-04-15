import Vue from 'vue'
import App from './App'
import vant from 'vant'

import 'vant/lib/index.css';
import './assats/index.css'
import './assats/indexScss.scss'
import './assats/indexLess.less'


Vue.use(vant);

new Vue({
  el:'#root',
  render:(h)=> h(App)
})