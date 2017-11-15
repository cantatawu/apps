<template>
  <div id="app" class="app-message-page">
    <eheader></eheader>
    <eview class="gary-bg">
      <div class="form-ui">
        <div class="form-li no-border-top">
          <input type="text" @keyup="checkData" v-model="formData.userName" placeholder="请输入您的昵称" class="form-el" />
        </div>
        <div class="form-li margin-top15">
          <textarea rows="5" @keyup="checkData" v-model="formData.userMessage" placeholder="请输入留言" class="form-el"></textarea>
        </div>
        <div class="form-row">
          <a class="button" :class="isOn" href="javascript:;">提交</a>
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
      formData:{
        userName :'',
        userMessage :''
      },
      isOn : 'on'
    }
  },components : {
    eheader,eview
  },mounted(){

  },methods : {
    checkData(){
      if( '' == this.formData.userName || '' == this.formData.userMessage)this.isOn = ''
      else this.isOn = 'on'
    }
  }
}

</script>

