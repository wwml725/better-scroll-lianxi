<template>
  <div class="Switch-model-container">
    <MHeader id="header" :back="true"></MHeader>
    <div class="content"
         @touchstart="contentTouchStart"
         @touchmove="contentTouchMove"
         @touchend="contentTouchEnd"
    >
      <div class="content-l" ref="contentL">
        left
      </div>
      <div class="content-r" ref="contentR">
        right
      </div>
      <div class="dots">
        <span class="dot dot-l"></span>
        <span class="dot dot-r"></span>
      </div>
    </div>

  </div>
</template>

<script>
  import MHeader from '@/components/base/Header'

  export default {
    // name: "Switch-model",
    data() {
      return {
        msg: "Switch-model",
        currentShow: 'cd'
      }
    },
    created() {
      this.touch = []
    },
    methods: {
      contentTouchStart(e) {
        // this.touch.initiated = true;
        // this.touch.move = false;
        const firstTouch = e.touches[0];
        const startX = firstTouch.pageX;
        const startY = firstTouch.pageY;
        this.touch.startX = startX
        this.touch.startY = startY
        console.log(this.touch);

      },
      contentTouchMove(e) {
        // if (!this.touch.initiated) {
          // return
        // }

        // if(!this.touch.move){
        //   this.touch.move=true
        // }
        console.log(this.touch.move);

        const touch = e.touches[0];
        const distanceX = touch.pageX - this.touch.startX;
        const distanceY = touch.pageY - this.touch.startY;
        //如果显示的contentR页面，偏移量最小就是-window.innerWidth
        const left = this.currentShow === 'cd' ? 0 : -window.innerWidth
        // //偏移量：
        const offsetWidth = Math.min(0, Math.max(-window.innerWidth, distanceX + left))//这样做的目的是给contentR做一个偏移的左右边界
        //percent
        this.touch.percent = Math.abs(offsetWidth / window.innerWidth)
        //contentR的偏移量
        this.$refs.contentR.style.transform = `translate3d(${offsetWidth}px,0,0)`
        //contentL的透明度
        this.$refs.contentL.style.opacity = 1 - this.touch.percent
      },

      contentTouchEnd() {
        // if (!this.touch.move) {
        //   return/
        // }

        //offsetWidth的确定
        let offsetWidth;
        if (this.currentShow == 'cd') {
          if (this.touch.percent > 0.1) {
            offsetWidth = -window.innerWidth
            this.currentShow = "cr"
          } else {
            offsetWidth = 0
          }
        } else {
          if (this.touch.percent < 0.9) {
            offsetWidth = 0
            this.currentShow = "cd"

          } else {
            offsetWidth = -window.innerWidth
          }
        }


        //contentR的偏移距离，向左偏移，偏移量为负值
        this.$refs.contentR.style.transform = `translate3d(${offsetWidth}px,0,0)`
        //contentL的透明度
        this.$refs.contentL.style.opacity = 1 - this.touch.percent
        this.$refs.contentL.style.transitionDuration = "1s"
        this.$refs.contentR.style.transitionDuration = "1s"
        // this.touch.initiated = false
        // this.touch.move = false


      }

    },
    computed: {},
    components: {MHeader}
  }
</script>

<style scoped lang="less">
  .content {
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #cccccc;
    white-space: nowrap;
    font-size: 0;


    .content-l {
      background: #7cea20;
    }

    .content-r {
      background: rgba(255, 0, 0, 0.42);
    }

    .content-l, .content-r {
      vertical-align: top;
      display: inline-block;
      width: 100%;
      height: 100%;
      font-size: 18px;

    }
  }
</style>
