<template>
  <div class="music-list2-container">
    <MHeader id="header" :back="true"></MHeader>
    <div class="bgImage" ref="bgImage">

      <div class="title" ref="title">周杰伦</div>
    </div>
    <div class="player" ref="player"></div>
    <scroll
      :probeType="probeType"
      :listenScroll="listenScroll"
      @scroll="scroll"
      class="list"
      ref="list"
    >
      <ul>
        <li v-for="(item,index) in 50" @click="open">{{item}}</li>
      </ul>
    </scroll>

    <div class="player11" v-show="showPlayer11">
      <div class="normal-player" v-show="fullScreen">
        <div class="backIcon" @click="open">|||||</div>
        <div class="normal-cd">
          <img src="../../images/bg-img.jpg" alt="">
        </div>
      </div>
      <div class="mini-player" v-show="!fullScreen" @click="open">
        <div class="mini-cd">
          <img src="../../images/bg-img.jpg" alt="">
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import MHeader from '@/components/base/Header'
  import Scroll from '@/components/base/scroll/scroll'

  let REMAININ_HEIGHT = 40;

  export default {
    name: "music-list2",
    data() {
      return {
        msg: "music-list2",
        probeType: 3,
        listenScroll: true,
        scrollY: -0,
        fullScreen: false,
        showPlayer11: false
      }
    },
    mounted() {
      this.bgImageHeight = this.$refs.bgImage.clientHeight;
      this.$refs.list.$el.style.top = `${this.bgImageHeight}px`;
      this.minTranslateY = -this.bgImageHeight + 40;

    },
    methods: {
      _getPosAndScale() {
        const targetWidth = 40//小图实际宽度
        const paddingLeft = 40//小图中心坐标
        const paddingBottom = 30//小图中心坐标
        const paddingTop = 80//大图到顶部的距离
        const width = window.innerWidth * 0.8//大图宽度
        const scale = targetWidth / width//缩放比例
        //初始的x坐标  这是要偏移的水平距离
        const x = -(window.innerWidth / 2 - paddingLeft)//横轴坐标的距离
        //偏移的垂直距离
        const y = window.innerHeight - paddingTop - width / 2 - paddingBottom//纵轴坐标的距离
        return {
          x,
          y,
          scale
        }
      },

      //打开播放器
      open(index) {
        if (this.showPlayer11 === false) {
          this.showPlayer11 = true
        }
        this.fullScreen = !this.fullScreen
      },


      scroll(pos) {
        this.scrollY = pos.y
        console.log(this.scrollY);
      }
    },
    computed: {},
    watch: {
      scrollY(val) {
        let zIndex = 0
        let scale = 1

        let translateY = Math.max(val, this.minTranslateY);
        this.$refs.player.style.transform = `translate3d(0,${translateY}px,0)`;

        if (val < this.minTranslateY) {
          zIndex = 10
          this.$refs.bgImage.style.paddingTop = `${REMAININ_HEIGHT}px`
          this.$refs.bgImage.style.height = 0
          this.$refs.title.style.display = 'none'

        } else {

          zIndex = 0
          this.$refs.bgImage.style.paddingTop = `70%`
          this.$refs.bgImage.style.height = 0
          this.$refs.title.style.display = ''

        }
        let percent = Math.abs(val / this.bgImageHeight)

        if (val > 0) {
          //放大比例
          scale = 1 + percent;
          zIndex = 10
        } else {

        }
        this.$refs.bgImage.style.transform = `scale(${scale})`;
        this.$refs.bgImage.style.zIndex = zIndex

      }
    },
    components: {MHeader, Scroll}
  }
</script>

<style scoped lang="less">
  .music-list2-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #cccccc;
    /*overflow: hidden;*/

    #header {
      background: transparent;
    }

    .bgImage {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;

      padding-top: 70%; /*宽度的70%*/
      background: url("../../images/bg-img.jpg");
      background-size: cover;

      .title {
        position: absolute;
        bottom: 20px;
        width: 100%;

        text-align: center;
        margin: 0 auto;
        color: #7cea20;
        /*background: #7cea20;*/
      }
    }

    .player {
      position: relative;
      height: 100%;
      background: red
    }

    .list {
      /*position: absolute;*/
      position: fixed;
      top: 0;
      bottom: 0;
      width: 100%;
      background: red;

      ul {
        /*width: 100%;*/

        li {
          height: 30px;

          border-bottom: 1px solid black;
        }
      }


    }

    .player11 {
      .normal-player {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #cccccc;
        z-index: 101;
        .normal-cd{
          width:70%;
          border-radius: 50%;
          overflow: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%,-50%,0);


          img{
            width: 100%;
            height: 100%;
          }

        }
      }

      .mini-player {
        height: 60px;
        width: 100%;
        position: absolute;
        bottom:0;
        left: 0;
        right: 0;
        background: #222222;
        .mini-cd{
          width: 30px;
          height: 30px;
          position: absolute;
          top: 50%;
          left: 30px;
          /*left: 50%;*/
          transform: translate3d(0,-50%,0);
          overflow: hidden;
          border-radius: 50%;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }

    }
  }

</style>
