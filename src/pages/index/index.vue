<template>
  <div id="app" class="app-index-page">
  	<div class="cover">
		<mt-swipe :auto="4000">
			<mt-swipe-item>
				<img src="../assets/static/imgs/large.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../assets/static/imgs/large.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../assets/static/imgs/large.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../assets/static/imgs/large.jpg" />
			</mt-swipe-item>
		</mt-swipe>
  	</div>
  	<efooter v-on:bindGetMenuIndex="getMenuIndex"></efooter>
  	<transition name="load">
  	<div v-show="isModal" @click="closeModal()" class="modal-box flexbox">
	  	<div class="menu" :class="{ 'on' : menuIndex == 0}">
	  		<a class="" href="javascript:;">
	  			<i class="iconfont icon-dianhua"></i>
	  			<div>一键拨号</div>
	  		</a>
	  		<a class="" href="javascript:;">
	  			<i class="iconfont icon-daohang"></i>
	  			<div>一键导航</div>
	  		</a>
	  		<a class="" href="javascript:;">
	  			<i class="iconfont icon-liuyan"></i>
	  			<div>咨询留言</div>
	  		</a>
	  	</div>
	  	<div class="menu" :class="{ 'on' : menuIndex == 1}">
	  		<a class="" href="javascript:;">
	  			<i class="iconfont icon-guanyu"></i>
	  			<div>关于美媛</div>
	  		</a>
	  		<a class="" href="javascript:;">
	  			<i class="iconfont icon-chuangshiren"></i>
	  			<div>创始人介绍</div>
	  		</a>
	  	</div>
	  	<div class="menu" :class="{ 'on' : menuIndex == 4}">
	  		<a class="" href="javascript:;">
	  			<i class="iconfont icon-shipin"></i>
	  			<div>微视频</div>
	  		</a>
	  		<a class="" href="javascript:;">
	  			<i class="iconfont icon-xiangce"></i>
	  			<div>微相册</div>
	  		</a>
	  	</div>
  	</div>
  	</transition>
  	
  </div>
</template>
<script>
	
import efooter from 'components/footer.vue'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  data () {
    return {
    	menuIndex : -1,
    	isModal : false
    }
  },components : {
  	efooter
  },mounted(){

  },methods : {
  	getMenuIndex (index){
  		if(2 == index || 3 == index){
  			this.isModal = false
  			return
  		}
  		if(this.menuIndex == index){
  			this.isModal = !this.isModal
  		}else{
  			this.isModal = true
  			this.menuIndex = index
  		}
  	},
  	closeModal(){
  		this.isModal = false
  		this.menuIndex = -1
  	}
  }
}

</script>

