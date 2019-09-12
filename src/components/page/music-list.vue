<template>
  <div class="music-list-container">
    <Header id="m-header" :back="true"></Header>
    <div class="bg-img" ref="bgImage"></div>
    <div class="player" ref="player"></div>

    <Scroll
      class="list"
      :probeType="probeType"
      :listenScroll="listenScroll"
      @scroll="scroll"
      ref="list">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
        <li>16</li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
  //
  import Header from "@/components/base/Header"
  import Scroll from "@/components/base/scroll/scroll"

  let RESERVED_HEIGHT = 40
  export default {
    name: "music-list",
    data() {
      return {
        msg: "music-list",
        probeType: 3,
        listenScroll: true,
        scrollY: -1,

      }
    },
    mounted() {
      this.imageHeight = this.$refs.bgImage.clientHeight
      this.$refs.list.$el.style.top = `${this.imageHeight}px`
      //player上上偏移的最小纵坐标
      this.minTranslateY = -this.imageHeight + 40;

    },
    methods: {
      //scroll事件
      scroll(pos) {
        this.scrollY = pos.y
        // console.log(this.scrollY);
      },

    },
    computed: {},
    watch: {
      scrollY(val) {
        let zIndex = 0
        let scale = 1

        console.log(11);
        let translateY = Math.max(this.minTranslateY, val)
        console.log(translateY);
        this.$refs.player.style.transform = `translate3d(0,${translateY}px,0)`

        const percent = Math.abs(val / this.imageHeight);
        if (val > 0) {//大于0代表下拉
          scale = 1 + percent;
          zIndex = 10
        } else {

        }
        if (val < this.minTranslateY) {
          zIndex = 10
          this.$refs.bgImage.style.paddingTop = 0
          this.$refs.bgImage.style.height = `${RESERVED_HEIGHT}px`
        } else {
          this.$refs.bgImage.style.paddingTop = '70%'
          this.$refs.bgImage.style.height = 0
        }
        this.$refs.bgImage.style.zIndex = zIndex
        this.$refs.bgImage.style.transform = `scale(${scale})`
      }
    },
    components: {Header, Scroll}
  }
</script>

<style scoped lang="less">
  .music-list-container {
    position: absolute;
    /*height: 100%;*/
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  #m-header {
    background: transparent;
  }

  .bg-img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    /*height: 200px;*/
    background: url("../../images/bg-img.jpg");
    transform-origin: top;
    background-size: cover;
    padding-top: 70%;
  }

  .player {
    position: relative;
    height: 100%;
    background: red
  }

  .list {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: red;

    ul {
      /*width: 100%;*/

      li {
        height: 30px;

        border-bottom: 1px solid black;
      }
    }
  }

</style>
