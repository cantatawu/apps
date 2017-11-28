<template>
  <div id="app" class="app-professor-page sections">
    <eheader></eheader>
    <eview>
      <article v-if="0 == type" class="detail">
        <section>
            <p class="text-center"><strong>日本国宝级整骨大师本郷祐弥——</strong></p>
           <p class="img">
              <img src="../../assets/static/imgs/professor/p_1.png" />
           </p>
        </section>
        <section>
           <p>他曾成功为超过6.5万人进行过整骨治疗。</p>
           <p>他是日本职业棒球王者读卖巨人队（联盟九连霸暨20次全国冠军纪录保持者）专属整骨理疗师。</p>
           <p>也是亚洲年度顶级时尚盛典Tokyo Boys Collection及风靡全日本的舞台剧《音乐王子》专属理疗训练师。</p>
           <p>贵为日本王子理疗康复整骨院院长的他，不仅整骨技艺炉火纯青，且在日本国内拥有庞大粉丝团，众多女性客人，还未曾开始治疗，已为其王子般阳光帅气的模样所征服。</p>
        </section>
      </article>

      <article v-if="1 == type" class="detail">
        <section>
            <p class="text-center"><strong>福岡宏則（HIRONORI FUKUOKA）</strong></p>
           <p class="img">
              <img src="../../assets/static/imgs/professor/p_2.jpg" />
           </p>
        </section>
        <section>
           <p>王子樱花美式整脊疗院副院长</p>
           <p>曾成功为超过5万人进行过整骨治疗</p>
           <p>日本职业队专属整骨理疗师之一</p>
           <p>竞技比赛的护理（玉井部力士、棒球选手、游泳选手）</p>
           <p>福岡宏則院长，年轻、时尚、前卫，具有个性化审美。长相清秀，性格温和，为人善良谨慎，被求美者追捧为“偶像整骨大师”。</p>
           <p>虽看起来帅气阳光，但早已是而立之年的福岡宏則院长，从事整形美容行业长达14年之久，东京福祉大学（学士）、东京医学柔整专业学校（专业士）毕业，整骨技艺炉火纯青，精湛细腻的手法，得到求美者和理疗顾客的盛赞。数万例成功案例经验，深得求美者追捧。</p>
        </section>
      </article>
    </eview>
  </div>
</template>
<script>
	
import eheader from 'components/header.vue'
import eview from 'components/view.vue'
export default {
  data () {
    return {
      type : '',
    }
  },components : {
    eheader,eview
  },
  mounted(){
    this.type = this.$route.params.id
  },methods : {
  }
}

</script>

