<template>
  <div class="pullup">
    <div ref="scroller" class="pullup-bswrapper">
      <div class="pullup-scroller">
        <ul class="pullup-list">
          <li v-for="i of data" :key="i" class="pullup-list-item">
            {{ i % 5 === 0 ? 'scroll up 👆🏻' : `I am item ${i} `}}
          </li>
        </ul>

        <div class="pullup-wrapper">
          <div v-if="!isPullUpLoad" class="before-trigger">
            <span class="pullup-txt">Pull up and load more</span>
          </div>
          <div v-else class="after-trigger">
            <span class="pullup-txt">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from "../base/Header"
  // import BScroll from "better-scroll" //这个是全部引入，推荐上面的

  import BScroll from '@better-scroll/core'
  // 这个是  @better-scroll核心滚动  通过这个方法可以按需引入某一些插件
  import Pullup from '@better-scroll/pull-up'

  BScroll.use(Pullup)
  export default {
    data() {
      return {
        isPullUpLoad: false,
        data: 30
      }
    },
    created() {
      this.bscroll = null
    },
    mounted() {
      this.initBscroll()
    },
    methods: {
      initBscroll() {
        this.bscroll = new BScroll(this.$refs.scroller, {
          scrollY: true,
          pullUpLoad: true
        });

        this.bscroll.on('pullingUp', this.pullingUpHandler)
      },
      async pullingUpHandler() {
        this.isPullUpLoad = true

        await this.requestData()

        this.bscroll.finishPullUp()
        this.bscroll.refresh()
        this.isPullUpLoad = false
      },

      async requestData() {
        try {
          const newData = await this.ajaxGet(/* url */)
          this.data += newData
        } catch (err) {
          // handle err
          console.log(err)
        }
      },
      ajaxGet(/* url */) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(20)
          }, 1000)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../common/style/mixin";

  .pullup {
    height: 100%;
    position: absolute;
    top: 0;
    left:0;right:0;bottom:0

  }

  .pullup-bswrapper {
    height: 100%;
    padding: 0 10px;
    border: 1px solid #ccc;
    overflow: hidden
  }

  .pullup-list{
    padding: 0
  }

  .pullup-list-item{
    padding: 10px 0;
    list-style: none;
    border-bottom: 1px solid #ccc
  }

  .pullup-wrapper{
    padding: 20px;
    text-align: center;
    color: #999
  }



</style>
