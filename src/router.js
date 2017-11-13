import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import index from 'pages/index/index.vue';
import message from 'pages/index/message.vue';
import navigation from 'pages/index/navigation.vue';
import originator from 'pages/brand/originator.vue';
import about from 'pages/brand/about.vue';
import professor from 'pages/professor.vue';
import album from 'pages/view/album.vue';
import video from 'pages/view/video.vue';

import addr from 'pages/addr.vue';

const routes = [{
	path: '/',
	name : 'index',
	component: index,
    meta: {
        title: ''
    }
	},{
		path: '/index',
		name : 'index',
		component: index,
	    meta: {
	        title: ''
	    }
	},{
		path: '/message',
		name : 'index-message',
		component: message,
	    meta: {
	        title: ''
	    }
	},{
		path: '/navigation',
		name : 'index-navigation',
		component: navigation,
	    meta: {
	        title: ''
	    }
	},{
		path: '/about',
		name : 'brand-about',
		component: about,
	    meta: {
	        title: ''
	    }
	},{
		path: '/originator',
		name : 'brand-originator',
		component: originator,
	    meta: {
	        title: ''
	    }
	},{
		path: '/professor',
		name : 'professor',
		component: professor,
	    meta: {
	        title: ''
	    }
	},{
		path: '/album',
		name : 'view-album',
		component: album,
	    meta: {
	        title: ''
	    }
	},{
		path: '/video',
		name : 'view-video',
		component: video,
	    meta: {
	        title: ''
	    }
	}]

export default new Router({
	routes
})