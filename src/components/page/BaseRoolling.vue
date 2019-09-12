<template>
  <div class="container">
    <Header :back="true"></Header>

    <div class="main-container">
      <div class="wrapper" ref="listWrapper">
        <ul class="content">
          <li class="list" @click="clickHandler(item.name)" @touchmove="tm" v-for="(item ,index) in listData" :key="index">
            <span>{{item.id}}</span>
            <span>{{item.name}}</span>
            <span>{{item.age}}</span>
            <span>{{item.tel}}</span>
            <span>{{item.email}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../base/Header"
  // import BScroll from '@better-scroll/core'
  // 这个是  @better-scroll核心滚动  通过这个方法可以按需引入某一些插件

  import BScroll from "better-scroll" //这个是全部引入，推荐上面的

  export default {
    name: "BaseRoolling",
    data() {
      return {
        msg: "BaseRoolling",
        listData: [
          {id: "0001", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0002", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0003", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0004", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0005", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0006", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0007", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0008", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0009", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "00010", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0011", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0012", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0013", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0014", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0015", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0016", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0017", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0018", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0019", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0020", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0021", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0022", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0023", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0024", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0025", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0026", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0027", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0028", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0029", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
          {id: "0030", name: "wangwei", age: 12, tel: "12345678", email: "qq.com"},
        ]
      }
    },
    created() {

    },
    mounted() {
      this.$nextTick(() => {
        this.initScroll()
      })
    },
    methods: {
      tm () {
        console.log('tm')
      },

      initScroll() {
        console.log(1111);
        this.listWrapper = new BScroll(this.$refs.listWrapper, {
          click: true, //结合BScroll的接口使用,是否将click事件传递,默认被拦截了
          probeType:3

        })
      },

      clickHandler (item) {
        alert(item)
      },
    },
    computed: {},
    components: {Header}
  }
</script>

<style scoped lang="scss">
  @import "../../common/style/mixin";

  .main-container {
    position: absolute;
    top: 2rem;
    left: 0;
    bottom: 0;
    right: 0;
    background: #cccccc;
    padding: 5px;
    overflow: hidden;

    .wrapper {
      @include wh(100%, 100%);
      /*overflow: scroll;*/
      .content {

        .list {
          @include wh(100%, 2rem);
          border: 1px solid black;
          border-bottom: none;
          line-height: 2rem;
          @include sc(.8rem, red);
          @include fj(space-between);

          &:nth-child(2n){background-color: #60f735
          }
          &:nth-child(2n+1){background-color: #ff4179
          }



        }
      }
    }
  }


</style>
