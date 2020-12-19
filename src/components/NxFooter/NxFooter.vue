<template>
  <div class="nx-footer">
    <div class="footer-wapper">
      <div
        v-for="(item, index) in data"
        :key="item.pathName"
        class="item"
        @click="clickFooter(item)"
      >
        {{ index !== 0 ? "." : "" }} {{ item.text }}
      </div>
    </div>
    <div class="copy-right">{{ copyRight }}</div>
  </div>
</template>
<script>
import { sendEmail } from '../../helpers/utils'
export default {
    name: 'NxFooter',
    props: {
        copyRight: {
            type: String,
            default: ''
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        clickFooter(item) {
            if (item.path && this.$router) {
                this.$router.push({
                    name: item.path
                })
            } else if (item.email) {
                sendEmail(item.email)
            }
            this.$emit('click', item)
        }
    }
}
</script>
<style lang="scss" scoped>
.nx-footer {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: -apple-system-font, BlinkMacSystemFont, Helvetica Neue,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei UI, Microsoft YaHei, Arial,
    sans-serif;
  .footer-wapper {
    display: flex;
    .item {
      cursor: pointer;
      color: #a7b5c3;
    }
  }
  .copy-right {
    color: #a7b5c3;
  }
}
@media screen and (min-width: 1366px) {
  .nx-footer {
    bottom: 0.1rem;
    font-size: 0.26rem;
    line-height: 0.36rem;
    .item {
      margin: 0 0.06rem;
    }
    .copy-right {
      font-size: 0.16rem;
    }
  }
}
@media screen and (min-width: 769px) and (max-width: 1366px) {
  .nx-footer {
    bottom: 0.1rem;
    font-size: 0.5rem;
    .item {
      margin: 0 0.1rem;
    }
    .copy-right {
      font-size: 0.3rem;
    }
  }
}
// 竖屏幕
@media screen and (max-width: 769px) and (orientation: portrait) {
  .nx-footer {
    bottom: 0.1rem;
    font-size: .8rem;
    line-height: 1rem;
    .item {
      margin: 0 0.1rem;
    }
    .copy-right {
      font-size: 0.3rem;
    }
  }
}
@media screen and (max-width: 769px) and (orientation: landscape) {
  .nx-footer {
    bottom: 0.1rem;
    font-size: 0.5rem;
    line-height: 0.6rem;
    .item {
      margin: 0 0.1rem;
    }
    .copy-right {
      font-size: 0.3rem;
    }
  }
}
</style>