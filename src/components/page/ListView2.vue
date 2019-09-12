<template>
  <div class="singer" ref="singer">
    <Header :back="true"></Header>
    <list-view :data="singers" ref="list"></list-view>
    <!--<list-view @select="selectSinger" :data="singers" ref="list"></list-view>-->
  </div>
</template>


<script>
  import Header from "../base/Header";


  import listView from "../base/listview/listview";
  import singers from "../../mock/singer"

  export default {
    name: "ListView2",
    data() {
      return {
        msg: "ListView2",
        singers: singers
      }
    },

    created() {
      console.log(singers);
    },
    methods: {},
    computed: {},
    components: {listView, Header}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 2rem
    bottom: 0
    width: 100%
</style>
