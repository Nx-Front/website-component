<template>
  <div
    class="nx-wapper"
  >
    <img :src="bgImage" class="bg" alt="">
  </div>
</template>

<script>
export default {
    name: 'NxBg',
    props: {
			  // 横屏幕手机
		   	phoneVertical: {
					 type: String,
					 default: ''
				 },
				 // 竖屏幕手机
				 phoneHorizaontal: {
					 type: String,
					 default: ''
				 },
        pc: {
            type: String,
            default: ''
        },
        pad: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            searchMediaList: [
                window.matchMedia('(max-width:960px) and (orientation: landscape)'), // 手机渲染 横屏
                window.matchMedia('(max-width:768px) and (orientation: portrait)'), // 手机 竖屏
                window.matchMedia('(min-width:1360px)'), // pc端结果
                window.matchMedia('(min-width:768px) and (max-width:1360px)') // pad
            ],
            currentDev: ''
        }
    },
    computed: {
        bgImage() {
            const imageMap = {
                'phone-vertical': this.phoneVertical,
                'phone-horizontal': this.phoneHorizaontal,
                'pc': this.pc,
                'pad': this.pad
            }
            return imageMap[this.currentDev] || ''
        }
    },
    created() {
        this.initScreen()
        this.addEventScreen()
    },
    methods: {
        initScreen() {
            const currentDev = ['phone-vertical', 'phone-horizontal', 'pc', 'pad']
            const index = this.searchMediaList.findIndex(i => i.matches)
            this.currentDev = currentDev[index]
            return currentDev[index]
        },
        addEventScreen() {
					  // 这里会多次触发 暂时放一下 没时间
            this.searchMediaList.forEach(mediaItem => {
                mediaItem.addListener(this.initScreen)
            })
        }
    }
}
</script>

<style lang='scss' scoped>
.nx-wapper {
	height:100%;
	width: 100%;
	overflow: hidden;
	/* 背景图 */
	.bg {
		height: 100%;
		width: 100%;
	}
}
</style>