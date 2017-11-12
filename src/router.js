import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import index from 'pages/index.vue';
import addr from 'pages/addr.vue';

const routes = [{
	path: '/',
	component: index
},{
	path: '/index',
	component: index
},{
	path: '/addr',
	component: addr
}]

export default new Router({
	routes
})