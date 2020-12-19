<template>
  <div
    class="nx-slide"
    :style="{
      'border-radius': borderStyle.outerBorderRadius,
      'border-color': borderStyle.borderColor,
      'border-style': borderStyle.outerBorderStyle,
      'border-width': borderStyle.outerBorderWidth,
    }"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
  >
    <div
      v-if="innerBorder"
      class="border-inner border-inner-top-left"
      :style="{ background: borderStyle.borderColor }"
    />
    <div
      v-if="innerBorder"
      class="border-inner border-inner-top-right"
      :style="{ background: borderStyle.borderColor }"
    />
    <div
      v-if="innerBorder"
      class="border-inner border-inner-bottom-left"
      :style="{ background: borderStyle.borderColor }"
    />
    <div
      v-if="innerBorder"
      class="border-inner border-inner-bottom-right"
      :style="{ background: borderStyle.borderColor }"
    />
    <transition name="fade">
      <img
        v-if="isShow"
        :key="firstImg"
        :style="{ 'border-radius': borderStyle.innerBorderRadius }"
        :src="firstImg"
      >
      <img
        v-else
        :key="secondImg"
        :style="{ 'border-radius': borderStyle.innerBorderRadius }"
        :src="secondImg"
      >
    </transition>
  </div>
</template>

<script>
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
            isShow: false
        }
    },
    computed: {
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
        async initSlideAnimation() {
            this.isShow = !this.isShow
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
</style>