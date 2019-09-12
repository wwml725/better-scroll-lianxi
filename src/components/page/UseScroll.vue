<template>
  <div class="UseScroll-container">
    <Header :back="true"></Header>
    <div class="main-container">
      <Scroll class="listview">
        <ul class="list-group">
          <li class="list-item" v-for="(item,index) in dataList">
            {{item}}
          </li>
        </ul>
      </Scroll>
    </div>
  </div>
</template>

<script>
  import Header from "../base/Header";
  import Scroll from "../base/scroll/scroll";



  export default {
    name: "UseScroll",
    data() {
      return {
        msg: "UseScroll",
        dataList:30
      }
    },
    methods: {},
    computed: {},
    components: {Header,Scroll}
  }
</script>

<style scoped lang="scss">
  @import './../../common/style/mixin';
  .main-container{
    position:absolute ;
    top: 2rem;
    left: 0;
    right: 0;
    bottom: 0;
    .listview{
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background:#ccc;
      .list-item{
        @include wh(100%,30px);
        line-height: 30px;
        border: 1px solid black;
      }
    }
  }

</style>
