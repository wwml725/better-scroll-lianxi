<template>
  <div class="hello">
    <Header></Header>
    <div class="main-container">
      <h3>0001.指南</h3>
      <ul class="clear">
        <li class="item">
          <router-link to="mixinsTest">Test</router-link>
        </li>

        <li class="item">
          <router-link to="basic">基础</router-link>
        </li>

        <li class="item">
          <router-link to="enhanced">增强</router-link>
        </li>

        <li class="item">
          <router-link to="versatile">全能</router-link>
        </li>

      </ul>
      <h3>0002.核心滚动</h3>
      <ul class="clear">
        <li class="item"><router-link to="/vertical">垂直滚动</router-link></li>
        <li class="item"><router-link to="/level">水平滚动</router-link></li>
        <li class="item"><router-link to="/vertical-level">水平垂直同时滚动</router-link></li>
        <li class="item"><router-link to="/use-scroll">scroll组件的使用</router-link></li>
      </ul>
      <h3>0003.API</h3>
      <ul class="clear">
        <li class="item"><router-link to="/api-baisc">API的知识点</router-link></li>
      </ul>

      <h3>0004.插件的使用</h3>
      <ul class="clear">
        <li class="item">
          <router-link to="pullupmore">pullupmore</router-link>
        </li>


        <li class="item">
          <router-link to="pulldownRefresh">pulldownRefresh</router-link>
        </li>

        <li class="item">
          <router-link to="slideShow">slideShow</router-link>
        </li>
        <li class="item">
          <router-link to="wheelSelect">wheelSelect</router-link>
        </li>

        <!--<router-view></router-view>-->
      </ul>

      <h3>0005.经典小李子</h3>
      <ul class="clear">

        <li class="item">
          <router-link to="ListView">ListView</router-link>
        </li>
        <li class="item">
          <router-link to="ListView2">ListView2.0</router-link>
        </li>
        <li class="item">
          <router-link to="MusicList">MusicList</router-link>
        </li>
        <li class="item">
          <router-link to="MusicList2">MusicList2</router-link>
        </li>
        <li class="item">
          <router-link to="SwitchModel">SwitchModel</router-link>
        </li>
        <li class="item">
          <router-link to="SwitchModel2">SwitchModel2</router-link>
        </li>
        <li class="item">
          <router-link to="player">player</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import Header from "./base/Header";

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    components: {
      Header
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../common/style/mixin";

  .main-container {

    position: absolute;
    top: 2rem;
    bottom: 0;
    right: 0;
    left: 0;
    background: #cccccc;
    padding: 10px;
    /*font-size: 0.16rem;*/
    box-sizing: border-box;

    .item {
      float: left;

      /*display: inline-block;*/
      border: 1px solid black;
      padding: .25rem;
      @include sc(.8rem, red);

      a:visited {
        color: blue;
        background: #ff4179;
      }

    }
  }
</style>
