<template>
  <div class="app-footer-component">
		<div class="logo-bg"></div>
		<div class="footer-body flexbox">
		  	<a 
		  	v-for="(key,index) in navs" :key="index" 
		  	@click="goto(index)" 
		  	href="javascript:;" 
		  	:class="{'on':index == isActive}"
		  	>	

		  		<div v-if="2 == index" class="home flexbox">
		  			<div class="logo"></div>
		  		</div>
		  		<div v-else>
			  		<i class="iconfont" :class="key.icon"></i>
			  		<div>{{key.text}}</div>
		  		</div>
		  	</a>
		</div>
  </div>
</template>
<script>

export default {
  data () {
    return {
    	isActive : -1,
    	navs : [
    		{ text : '联系美媛',link : '' ,icon : 'icon-lianxiren'},
    		{ text : '关于美媛',link : '' ,icon : 'icon-huangguan'},
    		{ text : '',link : ''},
    		{ text : '专家风采',link : '' ,icon : 'icon-zhuanjia'},
    		{ text : '美媛微看',link : '' ,icon : 'icon-collections'}
    	]
    }
  },mounted(){

  },methods : {
  	goto(index){
  		if(this.isActive == index)this.isActive = -1
  		else this.isActive = index
        this.$emit('bindGetMenuIndex', index)
  	}
  }
}

</script>

