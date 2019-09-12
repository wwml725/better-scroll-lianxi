<template>
  <div class="header">
    <div v-if="back" class="head_goback" @click="goback">
      <img src="../../images/返回.svg" alt="">
    </div>
    <div class="title_head ellipsis" v-if="title">
      <span class="title_text">{{title}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Header",
    props: ["back"],
    data() {
      return {
        msg: "Header"
      }
    },
    methods: {
      goback() {
        this.$router.go(-1)
      }
    },
    computed: {
      title() {
        return this.$route.meta.title
      }
    },
    components: {}
  }
</script>

<style scoped lang="scss">
  @import '../../common/style/mixin';

  .header {
    background-color: $blue;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    @include wh(100%, 2rem);
    @include font(16px, 2rem);
    text-align: center;

    .head_goback{
      @include ct;
      left: .4rem;
      @include wh(1rem, 1rem);
      line-height: 1rem;
      img{
        width: 100%;
        height: 100%;
      }
    }

    .title_head {
      @include center;
      width: 50%;
      color: #fff;
      text-align: center;

      .title_text {
        @include sc(0.8rem, #fff);
        text-align: center;
        font-weight: bold;
      }
    }



  }



</style>
