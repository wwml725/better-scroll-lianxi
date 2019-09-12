<template>
  <div id="container">
    <Header :back="true"></Header>
    {{msg}}
<p>
  1
</p>
    <div class="container">
      如果你觉得一个个引入插件很费事，我们提供了一个拥有全部插件能力的 BetterScroll 包。它的使用方式与 1.0 版本一模一样，但是体积会相对大很多，推荐按需引入。

      <p>import BScroll from 'better-scroll'</p>

      <div>
        let bs = new BScroll('.wrapper', {
        // ...
        pullUpLoad: true,
        wheel: true,
        scrollbar: true,
        // and so on
        })
      </div>
    </div>



  </div>
</template>

<script>
  import Header from "../base/Header"

  export default {
    name: "Versatile",
    data() {
      return {
        msg: "Versatile"
      }
    },
    methods: {},
    computed: {},
    components: {Header}
  }
</script>

<style scoped>
  #container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: red;
  }

</style>
