<template>
  <div
    class="nx-card-wapper"
  >
    <template v-for="item in cardList">
      <div
        v-if="item.isShow || isDevicePc"
        :key="item.key"
        :style="{
          height:cardHeight,
          width:cardWidth
        }"
        style="height:200px"
        class="nx-card"
        @click="downLoadLink(item.link)"
      >

        <div class="left">
          <template v-if="item.svg">
            <icon
              class="left-svg"
              :name="`icon-${item.svg}`"
            />
          </template>
          <template v-else>
            <i :class="`left-icon iconfont ${item.icon}`" :style="{fontSize:iconSize}" />
          </template>
        </div>
        <div class="right">
          <div class="right-title" :style="{fontSize:titleFontSize}">
            {{ item.title }}
          </div>
          <div class="right-content" :style="{fontSize}">
            {{ item.content }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
// import { downloadFile } from '../helpers/utils'
import Icon from '../NxIcon/NxIcon.vue'
export default {
    name: 'NxCard',
    components: {
        Icon
    },
    props: {
        cardList: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        titleFontSize() {
				  	if (this.isPc) {
                return '16px'
            } else if (this.isPad) {
                return '12px'
            } else return '.7rem'
        },
        fontSize() {
            return this.isPc ? '20px' : '1rem'
        },
        screenWidth() {
            return window.screen.width
        },
        screenHeight() {
            return window.screen.height
        },
        isPad() {
            return this.screenWidth > 600 && this.screenWidth < 1366
        },
        iconSize() {
				  	if (this.isPc) {
                return '.6rem'
            } else return ''
        },
        cardHeight() {
					  if (this.isPc) {
                return '1.2rem'
            } else if (this.isPad) {
                return '2.2rem'
            } else return ''
        },
        cardWidth() {
            if (this.isPc) {
                return '4rem'
            } else if (this.isPad) {
                return '6rem'
            } else {
                return ''
            }
        },
        isPc() {
            return this.screenWidth >= 1366
        },
        isDevicePc() {
            const userAgentInfo = navigator.userAgent
            const Agents = [
                'Android',
                'iPhone',
                'SymbianOS',
                'Windows Phone',
                'iPad',
                'iPod'
            ]
            return !Agents.some((phone) => userAgentInfo.indexOf(phone) !== -1)
        }
    },
    methods: {
        downLoadLink(link) {
            if (!link) return
            // downloadFile(link)
        }
    }
}
</script>

<style lang='scss' scoped>
.nx-card-wapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  .nx-card {
    display: inline-flex;
    background: #000;
    width: 10rem;
    margin: 0 10px;
    height: 4rem;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      transition: all 0.2s linear;
      transform: scale(1.02);
    }
    .left {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .left-svg {
        //height: 2.3rem;
        width: 3rem;
      }
      .left-icon {
				display: flex;
				justify-content: center;
				align-items: center;
        font-size: 2rem;
				height: 3rem;
				width:3rem;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      font-family: "Times New Roman","Courier New", Helvetica, "Hiragino Sans GB",
        "Microsoft Yahei", "微软雅黑", Arial, sans-serif;
      .right-title {
        font-family: Georgia;
      }
    }
  }
}
</style>