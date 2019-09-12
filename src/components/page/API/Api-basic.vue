<template>
  <div class="Api-basic-container">
    <Header :back="true"></Header>
    <div class="main-container">
      <div class="list-wrapper" ref="wrapper">
        <ul class="list-content">
          <li class="list-item" v-for="(item,index) in dataList" :key="index">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../../base/Header";
  import BScroll from "@better-scroll/core"


  export default {
    name: "Api-basic",
    data() {
      return {
        msg: "Api-basic",
        dataList: 50
      }
    },
    mounted() {
      this.$nextTick(() => {
        this._initBScroll()
      })
    },
    methods: {
      //初始化BS
      _initBScroll() {
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: 3,//监听scroll的大小，有三种监听方式分别是1，2,3，
          scrollY: true,
          click: true,
          startY: -300,//初始位置
        });
        //2、监听scroll事件
        this.scroll.on('scroll', (pos)=>{
          console.log(`Now position is x: ${pos.x}, y: ${pos.y}`)
        });


      },

    },
    computed: {},
    components: {Header}
  }
</script>

<style scoped lang="scss">
  @import '../../../common/style/mixin';

  .main-container {
    position: absolute;
    top: 2rem;
    bottom: 0;
    right: 0;
    left: 0;
    background: red;

    .list-wrapper {
      position: relative;
      @include wh(100%, 100%);
      overflow: hidden;

      .list-item {
        @include wh(100%, 30px);
        @include sc(20px, #ccc);
        line-height: 30px;
        border: 1px solid black;
        border-bottom: none;

        &:nth-last-child(1) { /*从后向前数第几个*/
          border-bottom: 1px solid black;
          background: #ff4179;
        }
      }


    }

  }

</style>
