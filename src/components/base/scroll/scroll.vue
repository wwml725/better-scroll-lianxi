<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      pullup: {
        type: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        //better-scroll的最初始应用
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        });
        //监听滚动条，监听子组件的滚动条，触发父组件的滚动条的事件
        //问题：直接封装一个方法，在父组件中使用不行吗？
        if (this.listenScroll) {
          let me = this;
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
        }

        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              this.$emit('scrollToEnd')
            }
          })
        }

        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },


      //这样做其实就是把BScroll上的实例放在组件实力上了，这样就可以在父组件中直接调用这个子组件实例上的方法就可以了
      disable() {
        //this.scroll.disable():禁用 BetterScroll，DOM 事件（如 touchstart、touchmove、touchend）的回调函数不再响应。
        this.scroll && this.scroll.disable()
      },
      enable() {
        //启用 BetterScroll, 默认 开启
        this.scroll && this.scroll.enable()
      },
      //在实力上添加方法
      refresh() {
        //作用：重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        //作用：滚动到指定的位置。
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        //作用：滚动到指定的目标元素。
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }

      //注意：如果还需要better-scroll的方法，就用此种方法依次 创建
    },
    watch: {
      data() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
