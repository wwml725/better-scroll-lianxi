<template>
  <div class="music-list2-container">
    <MHeader id="header" :back="true"></MHeader>
    <div class="bgImage" ref="bgImage">

      <div class="title" ref="title">周杰伦</div>
    </div>

    <div class="player" ref="player"></div>


    <scroll
      :probeType="probeType"
      :listenScroll="listenScroll"
      @scroll="scroll"
      class="list"
      ref="list"
    >
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
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </scroll>

  </div>
</template>

<script>
  import MHeader from '@/components/base/Header'
  import Scroll from '@/components/base/scroll/scroll'

  let REMAININ_HEIGHT = 40;

  export default {
    name: "music-list2",
    data() {
      return {
        msg: "music-list2",
        probeType: 3,
        listenScroll: true,
        scrollY: -0
      }
    },
    mounted() {
      this.bgImageHeight = this.$refs.bgImage.clientHeight;
      this.$refs.list.$el.style.top = `${this.bgImageHeight}px`;
      this.minTranslateY = -this.bgImageHeight + 40;

    },
    methods: {
      scroll(pos) {
        this.scrollY = pos.y
        console.log(this.scrollY);
      }
    },
    computed: {},
    watch: {
      scrollY(val) {
        let zIndex = 0
        let scale = 1

        let translateY = Math.max(val, this.minTranslateY);
        this.$refs.player.style.transform = `translate3d(0,${translateY}px,0)`;

        if (val < this.minTranslateY) {
          zIndex = 10
          this.$refs.bgImage.style.paddingTop = `${REMAININ_HEIGHT}px`
          this.$refs.bgImage.style.height = 0
          this.$refs.title.style.display = 'none'

        } else {

          zIndex = 0
          this.$refs.bgImage.style.paddingTop = `70%`
          this.$refs.bgImage.style.height = 0
          this.$refs.title.style.display = ''

        }
        let percent = Math.abs(val / this.bgImageHeight)

        if (val > 0) {
          //放大比例
          scale = 1 + percent;
          zIndex = 10
        }else{

        }
        this.$refs.bgImage.style.transform = `scale(${scale})`;
        this.$refs.bgImage.style.zIndex = zIndex

      }
    },
    components: {MHeader, Scroll}
  }
</script>

<style scoped lang="less">
  .music-list2-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #cccccc;
    /*overflow: hidden;*/

    #header {
      background: transparent;
    }

    .bgImage {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;

      padding-top: 70%; /*宽度的70%*/
      background: url("../../images/bg-img.jpg");
      background-size: cover;

      .title {
        position: absolute;
        bottom: 20px;
        width: 100%;

        text-align: center;
        margin: 0 auto;
        color: #7cea20;
        /*background: #7cea20;*/
      }
    }

    .player {
      position: relative;
      height: 100%;
      background: red
    }

    .list {
      /*position: absolute;*/
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
  }

</style>
