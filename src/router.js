import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import index from 'pages/index/index.vue';
import message from 'pages/index/message.vue';
import navigation from 'pages/index/navigation.vue';
import originator from 'pages/brand/originator.vue';
import about from 'pages/brand/about.vue';
import professor from 'pages/professor.vue';
import album_list from 'pages/view/album-list.vue';
import album from 'pages/view/album.vue';
import video from 'pages/view/video.vue';

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
	        title: '咨询留言'
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
	        title: '关于美媛'
	    }
	},{
		path: '/originator',
		name : 'brand-originator',
		component: originator,
	    meta: {
	        title: '创始人介绍'
	    }
	},{
		path: '/professor',
		name : 'professor',
		component: professor,
	    meta: {
	        title: '专家风采'
	    }
	},{
		path: '/album/:id',
		name : 'view-album',
		component: album,
	    meta: {
	        title: '微相册'
	    }
	},,{
		path: '/album-list',
		name : 'view-album-list',
		component: album_list,
	    meta: {
	        title: '微相册'
	    }
	},{
		path: '/video',
		name : 'view-video',
		component: video,
	    meta: {
	        title: '微视频'
	    }
	}]

export default new Router({
	routes
})