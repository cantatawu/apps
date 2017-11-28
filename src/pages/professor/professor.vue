<template>
  <div id="app" class="app-professor-page">
    <eheader></eheader>
    <eview class="garybg">
      <div class="professor-body">
        <a href="#/professor/0">
          <div class="list-item">
            <div class="left">
              <div class="padding5">
                <img src="../../assets/static/imgs/professor/p_1.png" />
              </div>
            </div>
            <div class="right">
              <div class="padding5">
                <div class="p-name"></div>
                <div class="p-name">
                  <span>本郷祐弥—</span>
                  <span class="flag">整骨治疗</span>
                </div>
                <div class="p-desc">贵为日本王子理疗康复整骨院院长的他，不仅整骨技艺炉火纯青，且在日本国内拥有庞大粉丝团，众多女性客人，还未曾开始治疗，已为其王子般阳光帅气的模样所征服。</div>
              </div>
            </div>
          </div>
        </a>
        <a href="#/professor/1">
          <div class="list-item">
            <div class="left">
              <div class="padding5">
                <img src="../../assets/static/imgs/professor/p_2.jpg" />
              </div>
            </div>
            <div class="right">
              <div class="padding5">
                <div class="p-name">
                  <span>福岡宏則</span>
                  <span class="flag">整脊治疗</span>
                </div>
                <div class="p-desc">福岡宏則院长，年轻、时尚、前卫，具有个性化审美。长相清秀，性格温和，为人善良谨慎，被求美者追捧为“偶像整骨大师”。</div>
              </div>
            </div>
          </div>
        </a>
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
  }
}

</script>

