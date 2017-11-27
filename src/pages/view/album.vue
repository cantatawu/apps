<template>
  <div id="app" class="app-albums-page">
    <eheader></eheader>
    <eview>
      <div class="albums-body box">
        <div v-for="img in imgs" class="albums-item">
          <div class="img-box">
            <img :src="img" v-preview="img" />
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
      imgs: ['http://covteam.u.qiniudn.com/ka2.jpg', 'http://covteam.u.qiniudn.com/poster.png']
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

