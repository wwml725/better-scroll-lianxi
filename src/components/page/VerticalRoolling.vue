<template>
  <div class="VerticalRoolling-container">
    <Header :back="true"></Header>

    <div class="content" ref="content">
      <ul class="list-group" v-if="listData">
        <li class="list-item" v-for="(item,index) in listData" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from "../base/Header";
  import BScroll from "@better-scroll/core"

  export default {
    name: "VerticalRoolling",
    data() {
      return {
        msg: "VerticalRoolling",
        listData: 30
      }
    },
    created() {

    },
    mounted() {
      this.$nextTick(() => {
        this._initBScroll()
      })
    },
    methods: {
      _initBScroll() {
        this.scroll = new BScroll(this.$refs.content, {
          click: true,
          scrollY: true,
        })
      }
    },
    computed: {},
    components: {Header}
  }
</script>

<style scoped lang="scss">
  @import '../../common/style/mixin';

  .content {
    position: absolute;
    top: 2rem;
    bottom: 0;
    right: 0;
    left: 0;
    background: red;
    overflow: hidden;

    /*.list-group {*/
      /*padding: 5px;*/
    /*}*/

    .list-item {
      @include wh(100%, 2rem);
      border: 1px solid black;
      /*border-bottom: none;*/
      line-height: 2rem;
      @include sc(.8rem, blue);


    }
  }

</style>
