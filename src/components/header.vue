<template>
  <header class="app-header-component flexbox">
    <a href="javascript:;" @click="btnLeft()" class="header-left btn" slot="head-left">
      <i class="iconfont icon-fanhui"></i>
    </a>
    <h1 class="header-h1" v-text="">{{pageTitle}}</h1>
    <div class="header-right btn"><slot name="head-right"></slot></div>
  </header>
</template>
<script>

export default {
  props:['title','isStopBack'],
  data () {
    return {
      pageTitle : this.title || document.title
    }
  },mounted(){
  },methods : {
    btnLeft(){
      if(this.isStopBack)return;
      else history.go(-1)
    }
  }
}

</script>

