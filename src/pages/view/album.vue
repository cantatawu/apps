<template>
  <div id="app" class="app-album-page">
    <eheader></eheader>
    <eview>
      <div class="album-body" @click="gotoAlbum">
        <div class="album-list">
            <div class="cover">
              <img src="../../assets/static/imgs/originator/ori_3.png" />
            </div>
            <div class="title">
              虞美人始终致力于实现众多女性的美丽梦想
            </div>
        </div>
        <div class="album-list">
            <div class="cover">
              <img src="../../assets/static/imgs/originator/ori_1.png" />
            </div>
            <div class="title">
              传奇女子演绎实现梦想的艺术
            </div>
        </div>
        <div class="album-list">
            <div class="cover">
              <img src="../../assets/static/imgs/originator/ori_2.png" />
            </div>
            <div class="title">
              美丽从不相同
            </div>
        </div>
        <div class="album-list">
            <div class="cover">
              <img src="../../assets/static/imgs/index/3.jpg" />
            </div>
            <div class="title">
              为健康美丽保驾护航
            </div>
        </div>
        <div class="album-list">
            <div class="cover">
              <img src="../../assets/static/imgs/index/1.jpg" />
            </div>
            <div class="title">
              相册介绍
            </div>
        </div>
      </div>
    </eview>
  </div>
</template>
<script>
	
import eheader from 'components/header.vue'
import eview from 'components/view.vue'
export default {
  data () {
    return {
    }
  },components : {
    eheader,eview
  },mounted(){

  },methods : {
    gotoAlbum(){
      global.MintUI.Toast('马上放开')
    }
  }
}

</script>

