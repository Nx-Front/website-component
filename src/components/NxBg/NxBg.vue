<template>
  <div
    class="nx-wapper"
    :style="{ backgroundImage:`url(${backgroundImg})` }"
  >
    <div class="footer-wapper">
      <div class="link-wapper">
        <slot :info="{ height:pcLinkHeight,width:pcLinkWidth }" />
      </div>
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
            return this.screenWidth > 600 && this.screenWidth < 1440
        },
        isPc() {
            return this.screenWidth > 1440
        },
        isPhone() {
            return this.screenWidth < 600
        },
        backgroundImg() {
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
	background-position: center;
  background-size: cover;
	background-repeat: no-repeat;
	.link-wapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width:100%;
		.link {
			display:flex;
			width:100%;
		}
	}
	.footer-wapper {
		width:100%;
		position: absolute;
		bottom: .2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.footer {
		margin-top:.4rem;
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
</style>