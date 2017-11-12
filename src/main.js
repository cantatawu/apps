import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'assets/sass/main.scss'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

new Vue({
	el: '#app',
	router,
	render: h => h(App),
	mounted() {
	}
})
