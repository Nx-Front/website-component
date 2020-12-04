<template>
  <div
    class="nx-wapper"
    :style="{ backgroundImage:`url(${backgroundImg})` }"
  >
    <div class="footer-wapper">
      <div class="link-wapper">
        <slot :info="{ height:pcLinkHeight,width:pcLinkWidth }" />
      </div>
      <div class="text-wapper">
        <div class="footer" :style="{fontSize}">
          <span v-for="item in footerList" :key="item.text" @click="triggerFooterClick(item)">
            {{ item.text }}
          </span>

        </div>
        <div class="copy-right" :style="{fontSize:copyRightSize}">
          {{ copyRight }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    name: 'NxBg',
    props: {
        footerList: Array,
        webBg: String,
        padBg: String,
        phoneBg: String,
        copyRight: String
    },
    computed: {
        screenWidth() {
            return window.screen.width
        },
        screenHeight() {
            return window.screen.height
        },
        isPad() {
            return this.screenWidth > 600 && this.screenWidth < 1366
        },
        isPc() {
            return this.screenWidth >= 1366
        },
        isPhone() {
            return this.screenWidth < 600
        },
        backgroundImg() {
            // pad 暂时当作 竖着拿手机吧 出现来需求再说 早晚得重构
            if (this.isPad) return this.padBg
            else if (this.isPhone) return this.phoneBg
            else return this.webBg
        },
        copyRightSize() {
            return this.isPc ? '16px' : '.8rem'
        },
        fontSize() {
            return this.isPc ? '20px' : '1rem'
        },
        pcLinkHeight() {
            return this.isPc ? '100px' : '5rem'
        },
        pcLinkWidth() {
            return this.isPc ? '240px' : '12rem'
        }
    },
    methods: {
			 onSupport(email) {
            const emailNode = document.createElement('a')
            const sendEmail = (email) => {
                emailNode.setAttribute('href', `mailto:${email}`)
                emailNode.click()
            }
            sendEmail(email)
        },
        triggerFooterClick(item) {
            if (item.text.indexOf('Support') > 0) {
                this.onSupport(item.email)
            } else {
                this.$emit('triggerClick', item)
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.nx-wapper{
	position: relative;
	height: 100%;
	width:100%;
	background-position: center;
  background-size: cover;
	background-repeat: no-repeat;
	//min-height: calc(100vw/0.57);
	.footer-wapper {
			width:100%;
			height: 20%;
			position: absolute;
			bottom: 0;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
		}
	.link-wapper {
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		width:100%;
		.link {
			display:flex;
			width:100%;
		}
	}
	.text-wapper{
		text-align: center;
		.footer {
			//margin-top:.4rem;
			height: 50%;
			//margin-top:10px;
			text-align: center;
			font-size:1rem;
			color:#667E95;
			width: 100%;
			cursor: pointer;
		}
		.copy-right {
			margin-top:.1rem;
			color:#A7B5C3;
		}
	}
}
</style>