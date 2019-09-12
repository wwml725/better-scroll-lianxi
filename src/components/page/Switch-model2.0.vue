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
        //是否开始触摸，有什么用
        this.touch.initiated = true
        // // 用来判断是否是一次移动
        this.touch.moved = false
        const touch = e.touches[0]
        //触摸点的其实位置
        this.touch.startX = touch.pageX
        this.touch.startY = touch.pageY
      },
      contentTouchMove(e) {
        if (!this.touch.initiated) {
          return
        }
        const touch = e.touches[0]
        const deltaX = touch.pageX - this.touch.startX
        const deltaY = touch.pageY - this.touch.startY
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
          return
        }
        if (!this.touch.moved) {
          this.touch.moved = true
        }
        //如果展现的是cd页面，左边偏移量
        const left = this.currentShow === 'cd' ? 0 : -window.innerWidth
        //
        const offsetWidth = Math.min(0, Math.max(-window.innerWidth, left + deltaX))
        this.touch.percent = Math.abs(offsetWidth / window.innerWidth)
        this.$refs.contentR.style.transform = `translate3d(${offsetWidth}px,0,0)`
        this.$refs.contentR.style.transition = `all 0`;
        this.$refs.contentL.style.opacity = 1 - this.touch.percent;
        this.$refs.contentL.style.transition = `all 0`;

        console.log(this.touch);
      },
      contentTouchEnd() {
        if (!this.touch.moved) {
          return
        }
        let offsetWidth
        let opacity
        if (this.currentShow === 'cd') {
          if (this.touch.percent > 0.1) {
            offsetWidth = -window.innerWidth
            opacity = 0
            this.currentShow = 'lyric'
          } else {
            offsetWidth = 0
            opacity = 1
          }
        } else {
          if (this.touch.percent < 0.9) {
            offsetWidth = 0
            this.currentShow = 'cd'
            opacity = 1
          } else {
            offsetWidth = -window.innerWidth
            opacity = 0
          }
        }
        const time = 300
        this.$refs.contentR.style.transform = `translate3d(${offsetWidth}px,0,0)`
        this.$refs.contentR.style.transitionDuration = `${time}ms`
        this.$refs.contentL.style.opacity = opacity
        this.$refs.contentL.style.transitionDuration = `${time}ms`
        this.touch.initiated = false

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
