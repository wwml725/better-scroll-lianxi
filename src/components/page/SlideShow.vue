<template>
  <div id="header-container">
    <Header :back="true"></Header>
    <div class="main-content">
      <div class="slide-banner">
        <div class="banner-wrapper">
          <div class="slide-banner-scroll" ref="slide">
            <div class="slide-banner-wrapper">
              <div class="slide-item page1">page 1</div>
              <div class="slide-item page2">page 2</div>
              <div class="slide-item page3">page 3</div>
              <div class="slide-item page4">page 4</div>
            </div>
          </div>
          <div class="docs-wrapper">
             <span
               class="doc"
               v-for="(item, index) in 4"
               :key="index"
               :class="{'active': currentPageIndex === index}"></span>
          </div>
        </div>
        <div class="btn-wrap">
          <button class="next" @click="nextPage">nextPage</button>
          <button class="prev" @click="prePage">prePage</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../base/Header";
  import BScroll from '@better-scroll/core'
  import Slide from '@better-scroll/slide'

  BScroll.use(Slide);

  export default {
    data() {
      return {
        slide: null,
        currentPageIndex: 0,
        playTimer: 0
      }
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      //离开当前路由会触发这个生命周期函数
      clearTimeout(this.playTimer)
      this.slide.destroy()
      console.log('beforeDestroy');
    },

    destroyed(){
      //离开当前路由会触发这个生命周期函数
      console.log('destroyed');
    },
    methods: {
      init() {
        clearTimeout(this.playTimer);
        this.slide = new BScroll(this.$refs.slide, {
          scrollX: true,
          scrollY: false,
          slide: {
            loop: true,
            threshold: 100
          },
          useTransition: true,
          momentum: false,
          bounce: false,
          stopPropagation: true
        });
        this.slide.on('scrollEnd', this._onScrollEnd);
        // user touches the slide area
        //滑动之前清除定时器
        this.slide.on('beforeScrollStart', () => {
          clearTimeout(this.playTimer)
        });
        // // user touched the slide done
        // this.slide.on('scrollEnd', () => {
        //   this.autoGoNext()
        // });
        //自动轮播
        this.autoGoNext()
      },


      _onScrollEnd() {
        let pageIndex = this.slide.getCurrentPage().pageX
        this.currentPageIndex = pageIndex
        this.autoGoNext()
      },

      autoGoNext() {
        clearTimeout(this.playTimer)
        this.playTimer = setTimeout(() => {
          this.nextPage()
        }, 4000)
      },


      nextPage() {
        this.slide.next()
      },
      prePage() {
        this.slide.prev()
      },


    },
    components: {
      Header
    }
  }
</script>

<style scoped lang="scss">

  .main-content {
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1d3e81;
  }

  .slide-banner {
    .banner-wrapper {
      position: relative
    }
  }

  .slide-banner-scroll {
    min-height: 1px;
    overflow: hidden
  }

  .slide-banner-wrapper {
    height: 200px;
    white-space: nowrap;
    font-size: 0
  }

  .slide-item {
    display: inline-block;
    height: 200px;
    width: 100%;
    line-height: 200px;
    text-align: center;
    font-size: 26px;

    &.page1 {
      background-color: #95B8D1;
    }

    &.page2 {
      background-color: #DDA789
    }

    &.page3 {
      background-color: #C3D899
    }

    &.page4 {
      background-color: #F2D4A7
    }

  }

  ;

  .docs-wrapper {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
  }


  .doc {
    display: inline-block;
    margin: 0 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #eee;

    &.active {
      width: 20px;
      border-radius: 5px
    }
  }


  .btn-wrap {
    margin-top: 20px;
    display: flex;
    justify-content: center;

    button {
      margin: 0 10px;
      padding: 10px;
      color: #fff;
      border-radius: 4px;
      background-color: #666;
    }
  }


</style>

