<template>
  <div class="nx-slide-wapper">
    <div
      class="nx-slide"
      :style="{
        'border-radius': innerBorderStyle.outerBorderRadius,
        'border-color': innerBorderStyle.borderColor,
        'border-style': innerBorderStyle.outerBorderStyle,
        'border-width': innerBorderStyle.outerBorderWidth,
      }"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
    >
      <div
        v-if="innerBorder"
        class="border-inner border-inner-top-left"
        :style="{ background: innerBorderStyle.borderColor }"
      />
      <div
        v-if="innerBorder"
        class="border-inner border-inner-top-right"
        :style="{ background: innerBorderStyle.borderColor }"
      />
      <div
        v-if="innerBorder"
        class="border-inner border-inner-bottom-left"
        :style="{ background: innerBorderStyle.borderColor }"
      />
      <div
        v-if="innerBorder"
        class="border-inner border-inner-bottom-right"
        :style="{ background: innerBorderStyle.borderColor }"
      />
      <transition name="fade">
        <img
          :key="firstImg"
          :style="{ 'border-radius': innerBorderStyle.innerBorderRadius }"
          :src="firstImg"
        >
      </transition>
      <img v-show="false" :src="secondImg">
    </div>
    <div class="circle-wapper">
      <div
        v-for="(item, idx) in data"
        :key="item"
        :style="{
          height: innerCircleStyle.circleSize,
          width:
            idx === index - 1
              ? innerCircleStyle.activeWidth
              : innerCircleStyle.circleSize,
          'border-radius':
            idx === index - 1 ? innerCircleStyle.activeBorderRaius : '',
          backgroundColor:
            idx === index - 1
              ? innerCircleStyle.activeCircleColor
              : innerCircleStyle.circleColor,
        }"
        class="circle-item"
        :class="idx === index - 1 ? 'active' : ''"
        @click="
          () => {
            handleChangeCircle(idx);
          }
        "
      />
    </div>
  </div>
</template>

<script>
/* 这里问题太多了 rAF重写吧 */
export default {
    name: 'NxSlide',
    props: {
        data: {
            type: Array,
            default: () => {
                return []
            }
        },
        borderStyle: {
            type: Object,
            default: () => {
                return {
                    outerBorderRadius: '10px', // 外边框圆角宽度
                    outerBorderWidth: '10px', // 外边框宽度
                    outerBorderStyle: 'solid', // 外边框样式
                    innerBorderRadius: '10px', // 内边框宽度
                    borderColor: 'rgba(0,0,0,.2)' // 边框颜色
                }
            }
        },
        innerBorder: {
            type: Boolean,
            default: true
        },
        circleStyle: {
            type: Object,
            default: () => {
                return {
                    circleSize: '5px', // 原点大小
                    circleColor: 'red', // 原点未选中背景色
                    activeCircleColor: 'green', // 选中背景色
                    activeWidth: '20px', // 选中时候的宽度
                    activeBorderRaius: '6px' // 选中时候的圆角
                }
            }
        },
        circleSize: {
            type: String,
            default: '12px'
        },
        duration: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            timer: null,
            index: 0,
            firstImg: '',
            secondImg: '',
            testImg: '',
            isShow: false
        }
    },
    computed: {
        innerBorderStyle() {
            const defaultConfig = {
                outerBorderRadius: '10px', // 外边框圆角宽度
                outerBorderWidth: '10px', // 外边框宽度
                outerBorderStyle: 'solid', // 外边框样式
                innerBorderRadius: '10px', // 内边框宽度
                borderColor: 'rgba(0,0,0,.2)' // 边框颜色
            }
            return Object.assign(defaultConfig, this.borderStyle)
        },
        innerCircleStyle() {
            const defaultConfig = {
                circleSize: '5px', // 原点大小
                circleColor: 'red', // 原点未选中背景色
                activeCircleColor: 'green', // 选中背景色
                activeWidth: '20px', // 选中时候的宽度
                activeBorderRaius: '6px' // 选中时候的圆角
            }
            return Object.assign(defaultConfig, this.circleStyle)
        },
        dataLength() {
            return this.data.length
        },
        imageData() {
            return [...this.data, this.data[0]]
        }
    },
    created() {
        this.initSlideAnimation()
    },
    methods: {
        onMouseenter() {
            clearTimeout(this.timer)
            this.timer = null
        },
        onMouseleave() {
            this.timer = setTimeout(() => {
                this.initSlideAnimation()
            }, 2000)
        },
        handleChangeCircle(index) {
            clearTimeout(this.timer)
            this.index = index
            this.initSlideAnimation()
        },
        // 把握核心 渲染第几张 模板中index为N+1
        async initSlideAnimation() {
            if (this.index >= this.dataLength) {
                this.index = 0
            }
            this.firstImg = this.imageData[this.index]
            this.secondImg = this.imageData[this.index + 1]
            this.index++
            this.timer = setTimeout(() => {
                this.initSlideAnimation()
            }, this.duration * 1000)
        }
    }
}
</script>

<style lang='scss' scoped>
.nx-slide-wapper {
  width: 100%;
  height: 100%;
  padding-bottom: 0.5rem;
  z-index: 1;
  box-sizing: border-box;
  position: relative;
}
.nx-slide {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.fade-enter {
  transform: translateX(100%);
}
.fade-enter-to {
  transform: translateX(0%);
}
.fade-leave {
  transform: translateX(0%);
}
.fade-leave-to {
  transform: translateX(-100%);
}
.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s;
}

.border-inner {
  position: absolute;
  box-sizing: border-box;
  height: 40px;
  width: 40px;
  &-top-left {
    left: 0;
    top: 0;
  }
  &-top-right {
    right: 0;
    top: 0;
  }
  &-bottom-left {
    left: 0;
    bottom: 0;
  }
  &-bottom-right {
    right: 0;
    bottom: 0;
  }
}

.circle-wapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 5%;
  bottom: 0;
  z-index: 2;
  .circle-item {
    margin: 0 2px;
    border-radius: 50%;
    z-index: 2;
    cursor: pointer;
  }
}
</style>