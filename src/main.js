import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'assets/sass/main.scss'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

router.beforeEach((to, from, next) => {	
	if (meta && meta.title) document.title = meta.title;
	next();
})

new Vue({
	el: '#app',
	router,
	render: h => h(App),
	mounted() {
	}
})
