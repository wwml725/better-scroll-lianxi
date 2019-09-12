<template>
  <div class="test-container">
    <!--<section class="head-top">顶部信息</section>-->
    <Header :back="true"></Header>
    <div
      @touchstart="contentTouchStart"
      @touchmove="contentTouchMove"
      @touchend="contentTouchEnd"
      class="content">
      <div class="contentL" ref="contentL">
        Left
      </div>
      <div class="contentR" ref="contentR">
        Right
      </div>
    </div>

  </div>
</template>

<script>
  import Header from "../base/Header";


  export default {
    name: "mixinsTest",
    data() {
      return {
        msg: "mixinsTest",
        currentShow: 'left'
      }
    },

    created() {
      this.touch = []
    },
    methods: {
      contentTouchStart(e) {
        this.touch.initiated = true

        this.touch.moved = false

        const touchStart = e.touches[0];
        const startX = touchStart.pageX;
        const startY = touchStart.pageY;
        this.touch.startX = startX;
        this.touch.startY = startY;
        console.log(this.touch);
      },

      contentTouchMove(e) {

        if (!this.touch.initiated) {
          return
        }

        if (!this.touch.moved) {
          this.touch.moved = true
        }

        const touch = e.touches[0];
        const distanceX = touch.pageX - this.touch.startX;
        const distanceY = touch.pageY - this.touch.startY;
        // console.log(distanceX);

        //偏移的可能的值 有distanceX
        const winWidth = window.innerWidth;
        const left = this.currentShow === 'left' ? 0 : -winWidth
        const offsetWidth = Math.min(0, Math.max(-winWidth, distanceX + left))
        this.touch.percent = Math.abs(offsetWidth / winWidth)

        this.$refs.contentR.style.transform = `translate3d(${offsetWidth}px,0,0)`
        this.$refs.contentR.style.transitionDuration = `0s`

      },

      contentTouchEnd() {
        //如果没有滑动过，就跳过这段代码
        if (!this.touch.moved) {
          return
        }

        let offsetWidth;
        let percent = this.touch.percent;
        if (this.currentShow === 'left') {
          if (percent > 0.1) {
            offsetWidth = -window.innerWidth;
            this.currentShow = 'right'
          } else {
            offsetWidth = 0
          }
        } else {
          if (percent < 0.9) {
            offsetWidth = 0
            this.currentShow = 'left'
          } else {
            offsetWidth = -window.innerWidth;
          }
        }

        this.$refs.contentR.style.transform = `translate3d(${offsetWidth}px,0,0)`
        this.$refs.contentR.style.transitionDuration = `500ms`

          this.touch.initiated = false

      }
    }
    ,
    computed: {}
    ,
    components: {
      Header
    }
  }
</script>

<style scoped lang="scss">
  @import "../../common/style/mixin";

  .test-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: lime;

    .content {
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      white-space: nowrap;

      background: #cccccc;
      font-size: 0;

      .contentL, .contentR {
        display: inline-block;
        font-size: 12px;

        width: 100%;
        height: 100%;
      }

      .contentL {
        background: #7cea20;
      }

      .contentR {
        background: pink;
      }
    }
  }
</style>
