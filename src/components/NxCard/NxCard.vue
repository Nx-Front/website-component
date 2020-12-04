<template>
  <div
    class="nx-card-wapper"
  >
    <template v-for="item in cardList">
      <div
        v-if="item.isShow || isPc"
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
          <div class="right-title">
            {{ item.title }}
          </div>
          <div class="right-content">
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
            return this.screenWidth > 600 && this.screenWidth < 1440
        },
        iconSize() {
            return this.isPc ? '60px' : '1rem'
        },
        cardHeight() {
            return this.isPc ? '100px' : ''
        },
        cardWidth() {
            return this.isPc ? '200px' : ''
        },
        isPc() {
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
  justify-content: center;
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
        height: 3rem;
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
        font-size: 0.2rem;
      }
			.right-content {
				font-size:0.4rem;
			}
    }
  }
}
</style>